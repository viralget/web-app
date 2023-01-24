<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $campaigns = Campaign::where('user_id', request()->user()->id)->get();
        // My campaigns
        return Inertia::render('Campaigns/list', compact('campaigns'));
    }

    public function initiateCampaign(Request $request)
    {
        $request->session()->put('campaign-influencers', $request->influencers);

        return response(['status' => true]);
        // return Redirect::route('campaigns.create');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $influencers = $request->session()->get('campaign-influencers');

        return Inertia::render('Campaigns/new', compact('influencers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $influencers = $request->session()->get('campaign-influencers');
        $_influencers = [];

        if ($influencers) {
            foreach ($influencers as $influencer) {
                array_push($_influencers, $influencer['username']);
            }
        }

        Campaign::create([
            'user_id' => $request->user()->id,
            'title' => $request->title,
            'goal' => $request->goal,
            'influencers' => json_encode($_influencers)
        ]);

        return redirect()->back()->withMessage('Influencer created successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
