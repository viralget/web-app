<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\InfluencerResource;
use App\Models\Campaign;
use App\Models\TwitterInfluencer;
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
        $campaigns = CampaignResource::collection($campaigns);
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

        $campaign =  Campaign::create([
            'user_id' => $request->user()->id,
            'title' => $request->title,
            'goal' => $request->goal,
            'influencers' => json_encode($_influencers)
        ]);

        return redirect()->route('campaigns.show', ['campaign' => $campaign->id])->withMessage('Influencer created successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $campaign = Campaign::where('id', $id)->first();
        $campaigns = Campaign::where('user_id', request()->user()->id)->get();

        if (!$campaign) {
            abort(404);
        }

        $stats = [
            'qas' => $campaign->qas(),
            'engagement' => $campaign->qat(),
            'impressions' => $campaign->impressions(),
            'reach' => $campaign->reach(),
            'reachability' => $campaign->reachablility(),
            'engagement_rate' => $campaign->er(),
        ];

        // $influencers = json_decode($campaign->influencers);

        // $_influencers = [];

        // foreach ($influencers as $account) {
        //     $acc = TwitterInfluencer::where('username', $account)->first();

        //     if ($acc) {
        //         $_influencers[] = $acc;
        //     }
        // }

        $influencer = $campaign->influencers();
        // $influencers = explode(', ', $)
        // dd($campaign);

        return Inertia::render('Campaigns/show', [
            'campaign' => $campaign,
            'influencers' => InfluencerResource::collection($influencer),
            'campaigns' => CampaignResource::collection($campaigns),
            'stats' => $stats
        ]);
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





    public  function  trackCampaignPage(){

        return Inertia::render('TrackCampaigns/index');
    }
}
