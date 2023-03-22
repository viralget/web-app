<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use App\Models\ProfiledInfluencer;
use App\Http\Resources\InfluencerResource;
use Inertia\Inertia;
use App\Models\User;
use App\Models\InfluencerList;
use App\Models\InfluencerListsTwitterInfluencer;

class ProfilingController extends Controller
{


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

        return response(['status' => true, 'message' => 'Profile save successfully']);
    }



    public function profilingPage(Request $request)
    {

        $user_id = $request->user()->id;
        $profiles = ProfiledInfluencer::with(['user', 'influencer'])->where('user_id', $user_id)->latest()->take(3)->get();
        $profiles_count = ProfiledInfluencer::where('user_id', $user_id)->count();
        $influencerList = InfluencerList::with('influencers')->where('user_id', $user_id)->orderBy('id', 'Desc')->get();

        return Inertia::render('Profiling/index', [
            'profiles' => $profiles,
            'influencerList' => $influencerList,
            'profiles_count' => $profiles_count
        ]);
    }


    public function list(Request $request)
    {

        $user_id = $request->user()->id;
        $profiles = ProfiledInfluencer::with(['user', 'influencer'])->where('user_id', $user_id)->orderBy('id', 'Desc')->get();
        $influencerList = InfluencerList::with('influencers')->where('user_id', $user_id)->orderBy('id', 'Desc')->get();
        return Inertia::render(
            'Profiling/index',
            [
                'profiles' => $profiles,
                'influencerList' => $influencerList
            ]
        );
    }

    public function createList(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:50'
        ]);

        try {

            $list = new  InfluencerList;
            $list->name = $request->name;
            $list->user_id = $request->user()->id;
            $list->save();
            return response(['status' => true, 'message' => 'List created successfully']);
        } catch (\Throwable $th) {
            return response(['status' => false, 'message' => 'An error occured. Please try again']);
        }
    }

    public function updateList(Request $request)
    {


        $request->validate([
            'name' => 'required|string|max:50'
        ]);

        try {


            $list = InfluencerList::where('id', $request->id)->first();
            $list->name = $request->name;
            $list->save();

            return response(['status' => true, 'message' => 'List updated successfully']);
        } catch (\Throwable $th) {
            return response(['status' => false, 'message' => 'An error occured. Please try again']);
        }
    }


    public function deleteList(Request $request)
    {

        try {

            $list = InfluencerList::find($request->id);
            $list->delete();

            return response(['status' => true, 'message' => 'List deleted successfully']);
        } catch (\Throwable $th) {
            return response(['status' => false, 'message' => 'An error occured. Please try again']);
        }
    }


    public function AddInfluencerToList(Request $request)
    {


        $data = $request->data;
        $list_id = $request->list_id;

        foreach ($data as $key => $val) {
            $find = InfluencerListsTwitterInfluencer::where('twitter_influencer_id', $val['id'])->where('influencer_list_id', $list_id)->first();

            if (!$find) {
                $listInfluencers = new InfluencerListsTwitterInfluencer;
                $listInfluencers->twitter_influencer_id = $val['id'];
                $listInfluencers->influencer_list_id = $list_id;
                $listInfluencers->save();
            }
        }

        return response(['status' => true, 'message' => 'Influencers added successfully']);
    }


    public function getSingleList(Request $request)
    {
        $id = $request->id;
        $user_id = $request->user()->id;
        $influencerList = InfluencerList::with('influencers')->where('id', $id)->first();
        $profiles = ProfiledInfluencer::with(['user', 'influencer'])->where('user_id', $user_id)->orderBy('id', 'Desc')->get();

        return Inertia::render(
            'Profiling/singleList/index',
            [
                'influencerList' => $influencerList,
                'profiled_influencers' => $profiles
            ]
        );
    }
}