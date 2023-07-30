<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\LoggerHelper;
use App\Http\Controllers\Controller;
use App\Mail\UserVerifyEmail;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Services\PaymentMethods\Paystack;
use App\Models\User;
use App\Models\UserDetail;
use App\Models\UserPlan;
use App\Models\Transaction;
use Carbon\Carbon;

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
        // return redirect(route('landing-page'));
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
                'token' => $token,
            ]);

            $imageName = null;

            if ($request->hasFile('file')) {
                $imageName = time() . $user->id . '.' . $request->file->extension();
                $request->file->storeAs('public/user_images', $imageName);
            }

            $userdetails = new UserDetail;
            $userdetails->user_id =  $user->id;
            $userdetails->first_name = $request->first_name;
            $userdetails->last_name = $request->last_name;
            $userdetails->image = $imageName;
            $userdetails->save();


            if ($userdetails) {

                event(new Registered($user));
                Mail::to($user->email)->queue(new UserVerifyEmail($user, $token));

                Auth::login($user);

                // Redirect to update areas of interest, and update profile.
                return redirect(route('confirmation.page'));
            }
        } catch (\Exception $e) {
            // dd($e);
            $this->log($e);
            return redirect()->back()->withError('An error occured. Please try again');
        }
    }


    public  function confirmation(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return redirect(route('login'));
        }
        return Inertia::render('Auth/Confirmation');
    }

    public function resendMail(Request $request)
    {
        $token = Str::random(20);
        $user = $request->user();
        $user->token = $token;
        $user->update();

        Mail::to($user->email)->send(new UserVerifyEmail($user, $token));
        return redirect(route('confirmation.page'));
    }

    public function accountSetup(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return redirect(route('login'));
        }
        $data = User::where('id', $user->id)->with('info')->first();
        $userimage = $data->info ? storage_path('app/user_images/' . $data->info->image) : null;

        return Inertia::render(
            'Auth/AccountSetup/index',
            ['user' =>  $data, "image_url" => $userimage]
        );
    }

    public  function  storeDetail(Request $request)
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'job_title' => 'required|string|max:50',
            'company_type' => 'required|string|max:50',
            'company_website' => 'required|string|max:50',
            'company_bio' => 'required|string|max:255',
        ]);
        $user = $request->user();
        $userdetail = UserDetail::firstOrCreate([
            'user_id' => $user->id
        ]);
        $userdetail->company_name = $request->company_name;
        $userdetail->company_type = $request->company_type;
        $userdetail->company_website = $request->company_website;
        $userdetail->company_bio = $request->company_bio;
        $userdetail->job_title = $request->job_title;
        $userdetail->save();


        if ($userdetail) {
            return redirect(route('pricing'));
        }
    }

    public  function  selectPricing()
    {

        $plans = Paystack::fetchPlans();
        $data['plans']  = $plans?->data ? $plans?->data : [];

        $user = request()->user();
        if (!$user) {
            return Inertia::render('Pricing/Guest/index', $data);
            // return redirect(route('login'));
        }

        return Inertia::render('Pricing/index', $data);
    }


    public function verifyEmail($id, $hash)
    {

        $user = request()->user();
        if (!$user) {
            return redirect(route('login'));
        }

        $user = User::find($id);
        $oldDate = Carbon::parse($user->updated_at);
        $currentDate = Carbon::now();
        $totalDuration = $currentDate->diffInSeconds($oldDate) / 60;

        if ($totalDuration  > 10) {
            return redirect(route('confirmation.page') . '?token=expired');
        }

        $user->email_verified_at = Now();
        $user->update();

        if ($user) {
            return redirect(route('account.setup'));
        }
    }

    public function selectPayment($plan_id)
    {
        $user = request()->user();
        if (!$user || !$plan_id) {
            return redirect(route('register'));
        }
        if (config('services.paystack.mode') == 'live') {
            $public_key = config('services.paystack.live_pk');
        } else {
            $public_key = config('services.paystack.test_pk');
        }
        $data['public_key'] = $public_key;
        $data['plan_id'] = $plan_id;
        $plan = Paystack::fetchPlan($plan_id);
        $data['plan'] = $plan?->data ?? null;

        return Inertia::render('UserPayment/index', $data);
    }

    public function verifyPayment($reference, $plan_id)
    {

        $verify = Paystack::verify($reference);
        $data['verify'] = $verify;
        $plan = Paystack::fetchPlan($plan_id);
        $user = request()->user();
        $user_id =  $user->id;
        if ($verify->status) {
            $userPlan =  new userPlan;
            $userPlan->plan_name = $plan->data->name;
            $userPlan->plan_code = $plan->data->plan_code;
            $userPlan->plan_id = $plan->data->id;
            $userPlan->user_id = $user_id;
            $userPlan->save();

            if ($userPlan) {
                return response(['status' => true, 'message' => $verify->message]);
            }
        } else {
            return response(['status' => false, 'message' => $verify->message]);
        }
    }

    function selectSocial()
    {
        $user = request()->user();
        if (!$user) {
            return redirect(route('login'));
        }
        return Inertia::render('Auth/SelectSocial');
    }
}
