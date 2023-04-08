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

                event(new Registered($user));
                Mail::to($user->email)->queue(new UserVerifyEmail($user, $token));
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
           return redirect(route('login'));
        }
        return Inertia::render('Auth/Confirmation');
    }

    public function resendMail(Request $request){
        $token = Str::random(20);
        $user = $request->user();
         Mail::to($user->email)->send(new UserVerifyEmail($user, $token));            
        return redirect()->back()->with(['flash' =>'Email resend successfully!!']);
    }

    public function accountSetup(Request $request){
        $user = $request->user();
        if(!$user){
           return redirect(route('login'));
        }
        $data = User::where('id', $user->id)->with('info')->first();
        $userimage = storage_path('app/user_images/' . $data->info->image);
        return Inertia::render('Auth/AccountSetup/index', 
        [ 'user' =>  $data, "image_url" => $userimage]);
    }

    public  function  storeDetail(Request $request){
        $request->validate([
            'company_name' => 'required|string|max:255',
            'job_title' => 'required|string|max:50',
            'company_type' => 'required|string|max:50',
            'company_website' => 'required|string|max:50',
            'company_bio' => 'required|string|max:255',
        ]);
        $user = $request->user();
        $userdetail = UserDetail::where('user_id', $user->id)->first();
        $userdetail->company_name = $request->company_name;
        $userdetail->company_type = $request->company_type;
        $userdetail->company_website = $request->company_website;
        $userdetail->company_bio = $request->company_bio;
        $userdetail->job_title = $request->job_title;
        $userdetail->save();


        if($userdetail){
            return redirect(route('pricing'));
        }
    }

    public  function  createPricing() {
        return Inertia::render('PricingPage/index');
    }


    public function verifyEmail($id, $hash){
       
        $hash = $hash;
        $id = $id;
        $user = User::find($id);
        $user->email_verified_at = Now();
        $user->refresh_token = $hash;
        $user->update();

        if($user){
            return redirect(route('account.setup'));
        }

    }
}
