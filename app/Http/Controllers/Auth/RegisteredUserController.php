<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\LoggerHelper;
use App\Http\Controllers\Controller;
use App\Mail\UserVerifyEmail;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    use LoggerHelper;

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            // 'company_name' => 'string|max:255',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        try {
            $token = Str::random(20);

            $user = User::create([
                'first_name' => $request->first_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $imageName = null;

            if($request->hasFile('file')){
                $imageName = time().$user->id.'.'.$request->file->extension();
                $request->file->storeAs('user_images', $imageName);    
            }

           

            $userdetails = new UserDetail;
            $userdetails->user_id =  $user->id;
            $userdetails->first_name = $request->first_name;
            $userdetails->last_name = $request->last_name;
            $userdetails->image = $imageName;
            $userdetails->save();
           

            if($userdetails){

                // event(new Registered($user));
                // Mail::to($user->email)->queue(new UserVerifyEmail($user, $token));
                Auth::login($user);
               
                // Redirect to update areas of interest, and update profile.
                return redirect(route('confirmation.page'));
            }
          
        } catch (\Exception $e) {
            dd($e);
            $this->log($e);
            return redirect()->back()->withError('An error occured. Please try again');
        }
    }




    public  function confirmation(Request $request){
        $user = $request->user();
        if(!$user){
            redirect(route('login'));
        }
        return Inertia::render('Auth/Confirmation');
    }

    public function resendMail(Request $request){
        $token = Str::random(20);
        $user = $request->user();
        //  Mail::to($user->email)->queue(new UserVerifyEmail($user, $token));            
        return redirect()->back()->with(['flash' =>'Email resend successfully!!']);
    }
}
