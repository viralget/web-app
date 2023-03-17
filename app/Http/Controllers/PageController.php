<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use App\Models\ProfiledInfluencer;
use App\Http\Resources\InfluencerResource;
use Inertia\Inertia;
use App\Models\User;

class PageController extends Controller
{
    //



    public function sendContact(Request $request)
    {

        $request->validate([
            'full_name' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'message' => 'required|string',
        ]);

        $data = [
            'title' => 'Web contact form',
            'message' => $request->message,
            'company_name' => $request->company_name,
            'email' => $request->email,
            'full_name' => $request->full_name
        ];

        try {

            $send =  Mail::to($_ENV['SUPPORT_EMAIL_ADDRESS'])->send(new SendMail($data));

            if ($send) {
                return redirect()->back();
            }
        } catch (\Exception $e) {
            return redirect()->back()->withError('An error occured. Please try again');
        }
    }




    public  function createProfiling(Request $request)
    {

        $data = $request->data;
        $user_id = $request->user()->id;

        foreach ($data as $key => $val) {
            $find = ProfiledInfluencer::where('influencer_id', $val['id'])->first();

            if (!$find) {
                $profilefInfluencer = new ProfiledInfluencer;
                $profilefInfluencer->influencer_id = $val['id'];
                $profilefInfluencer->user_id = $user_id;
                $profilefInfluencer->save();
            }
        }

        return response(['status' => true, 'message' => 'profile save successfully']);
    }



    public function profilingPage(Request $request)
    {

        $user_id = $request->user()->id;
        $profiles = ProfiledInfluencer::with(['user', 'influencer'])->where('user_id', $user_id)->latest()->take(3)->get();
        $profiles_count = ProfiledInfluencer::where('user_id', $user_id)->count();

        return Inertia::render('Profiling/index', [
            'profiles' => $profiles,
            'profiles_count' => $profiles_count
        ]);
    }


    public function list(Request $request)
    {

        $user_id = $request->user()->id;
        $profiles = ProfiledInfluencer::with(['user', 'influencer'])->where('user_id', $user_id)->latest()->get();

        return Inertia::render('Profiling/all', [
            'profiles' => $profiles,
        ]);
    }
}
