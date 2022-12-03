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

        // $user->update(['last_logged_in' => Carbon::now()]);

        if ($request->redirect_url) {
            $redirect_url = $request->redirect_url;
        }
        return redirect()->intended($redirect_url);
    }


    public function socialAuth(Request $request)
    {
        if ($request->redirect_url) {
            $request->session()->put('user_auth_redirect_url', $request->redirect_url);
        }

        try {
            return Socialite::driver($request->platform)->redirect();
        } catch (\Exception $e) {
            // dd($e->getMessage());
            return redirect()->back()->withError('Invalid platform specified');
        }
    }



    public function facebookAuthCallback(Request $request)
    {
        try {
            $fbUser = Socialite::driver('facebook')->user();

            //Check if user already has an email account with us first.

            //Safe if existing user email logins in with their social?? Discuss.

            // $userExists = User::whereEmail($request->email)->first();


            return $this->postSocialLogin($request, $fbUser);
        } catch (\Exception $e) {
            $this->log($e);

            return redirect()->route('home')->withError('Sorry, Google signin service not available at the moment');
        }
    }

    public function googleAuthCallback(Request $request)
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            //Check if user already has an email account with us first.

            //Safe if existing user email logins in with their social?? Discuss.

            // $userExists = User::whereEmail($request->email)->first();



            return $this->postSocialLogin($request, $googleUser);
        } catch (\Exception $e) {
            $this->log($e);

            return redirect()->route('home')->withError('Sorry, Google signin service not available at the moment');
        }
    }


    public function linkedinAuthCallback(Request $request)
    {
        try {
            $linkedInUser = Socialite::driver('linkedin')->user();

            // //Check if user already has an email account with us first.

            // //Safe if existing user email logins in with their social?? Discuss.

            // // $userExists = User::whereEmail($request->email)->first();



            return $this->postSocialLogin($request, $linkedInUser);
        } catch (\Exception $e) {
            $this->log($e);

            return redirect()->route('home')->withError('Sorry, Google signin service not available at the moment');
        }
    }


    public function postSocialLogin(Request $request, $socialUser)
    {

        try {
            $redirect_url = route('home');

            $name = explode(' ', $socialUser->name);

            $user = User::where('email', $socialUser->email)->first();

            $data = [
                'is_social_login' => true,
                'platform' => 'facebook',
                'first_name' => $name[0],
                'last_name' => $name[1],
                'email' => $socialUser->email,
                'token' => $socialUser->token,
                'avatar' => $socialUser->avatar,
                'refresh_token' => $socialUser->refreshToken,
                'last_logged_in' => Carbon::now(),
            ];

            if ($user) {
                $user->update($data);
            } else {
                $data['password'] = Hash::make($socialUser->token);

                $user = User::create($data);

                Mail::to($user->email)->queue(new UserRegistered($user));
            }


            // Log user in 
            Auth::login($user);

            if ($request->session()->has('user_auth_redirect_url')) {
                $redirect_url = $request->session()->get('user_auth_redirect_url');
                // unset the session data
                $request->session()->forget('user_auth_redirect_url');
            }

            $request->session()->regenerate();

            return redirect()->intended($redirect_url);
        } catch (\Exception $e) {
            $this->log($e);

            return redirect()->route('home');
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
