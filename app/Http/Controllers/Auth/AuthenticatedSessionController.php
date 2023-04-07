<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\LoggerHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Mail\UserRegistered;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthenticatedSessionController extends Controller
{
    use LoggerHelper;

    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {

        $request->authenticate();

        $request->session()->regenerate();

        $redirect_url = route('home');

        $user = $request->user();

        if (!$user->account) {
            $user->account()->create();
        }

        // $user->update(['last_logged_in' => Carbon::now()]);

        if ($request->redirect_url) {
            $redirect_url = $request->redirect_url;
        }
        return redirect()->intended($redirect_url);
    }

    public function welcome()
    {
        return Inertia::render(
            'Auth/Welcome'
        );
    }


    public function socialAuth(Request $request)
    {
        if ($request->redirect_url) {
            $request->session()->put('user_auth_redirect_url', $request->redirect_url);
        }
        // dd($request);

        try {
            return Socialite::driver($request->platform)->redirect();
        } catch (\Exception $e) {
            return redirect()->back()->withError('Invalid platform specified');
        }
    }


    public function googleAuthCallback(Request $request)
    {

        try {
            $code = $request->code;
            $scope = $request->scope;
            $state = $request->state;

            // dd($scope, $code);
            $user = Socialite::driver('google')->user();
            
            return $this->postSocialLogin($request, $user, 'google');

        } catch (\Exception $e) {
            dd($e);
            $this->log($e);

            return redirect()->route('login')->withError('Sorry, Google sign-in service not available at the moment');
        }
    }


    public function twitterAuthCallback(Request $request)
    {

        try {
            $token = $request->oauth_token;
            $secret = $request->oauth_verifier;

            // dd($token, $secret);
            $user = Socialite::driver('twitter')->user();

            $twitterUser = [
                'email' => $user->email,
                'token' => $user->token,
                'refresh_token' => $user->refreshToken,
                'avatar' => $user->avatar,
            ];

            return $this->postSocialLogin($request, $user, 'twitter');
        } catch (\Exception $e) {
            // dd($e);
            $this->log($e);

            return redirect()->route('login')->withError('Sorry, Twitter sign-in service not available at the moment');
        }
    }




    public function postSocialLogin(Request $request, $socialUser, $platform)
    {
        try {
            $redirect_url = route('home');

            $name = explode(' ', $socialUser->name);

            $user = User::where('email', $socialUser->email)->first();

            $data = [
                'is_social_login' => true,
                'login_platform' => $platform,
                'first_name' => $name[0],
                'last_name' => $name[1] ?? null,
                'email' => $socialUser->email,
                'token' => $socialUser->token,
                'avatar_url' => $socialUser->avatar,
                'refresh_token' => $socialUser->refreshToken,
                'last_logged_in' => Carbon::now(),
            ];

            if ($user) {
                $user->update($data);

                if (!$user->account) {
                    $user->account()->create();
                }
            } else {
                $data['password'] = Hash::make($socialUser->token);

                $user = User::create($data);

                $user->account()->create();

                Mail::to($user->email)->queue(new UserRegistered($user));
            }


            if ($request->session()->has('user_auth_redirect_url')) {
                $redirect_url = $request->session()->get('user_auth_redirect_url');
                // unset the session data
                $request->session()->forget('user_auth_redirect_url');
            }

            $request->session()->regenerate();

            // Log user in 
            Auth::login($user);


            return redirect()->intended($redirect_url);
        } catch (\Exception $e) {
            $this->log($e);
            dd($e);

            return redirect()->route('login')->withError('An error occurred while logging you in');
        }
    }
    /** 
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illumina    te\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
