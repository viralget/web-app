<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\InfluencerResource;
use App\Http\Resources\UserCampaignSearchResource;
use App\Models\Campaign;
use App\Models\CampaignSearch;
use App\Models\TwitterInfluencer;
use App\Models\UserCampaignSearch;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Models\CampaignBrief;
use App\Helpers\LoggerHelper;


class CampaignController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $campaigns = CampaignBrief::where('user_id', request()->user()->id)->get();
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

        return Inertia::render('Campaigns/create');
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



    public  function  trackCampaignPage()
    {
        $user_id = request()->user()->id;
        $user_searches = UserCampaignSearch::where('user_id', $user_id)->latest()->get();

        $data['searches'] = UserCampaignSearchResource::collection($user_searches);

        return Inertia::render('TrackCampaigns/index', $data);
    }

    public  function  campaignMetricsPage($query)
    {
        $user_id = request()->user()->id;

        $data['keyword'] = $query;

        $metrics = CampaignSearch::where('keyword', $query)->latest()->first();

        if ($metrics) {

            UserCampaignSearch::updateOrCreate([
                'user_id' => Auth::user()->id,
                'campaign_search_id' => $metrics->id
            ]);

            // if ($findIfExist && ($findIfExist?->result != "")) {
            $data['search'] =  $metrics;
            $data['result'] =  json_decode($metrics->result);
            $data['updated_at'] = $metrics->updated_at ?? $metrics->created_at;
        }

        return Inertia::render('TrackCampaigns/Metrics', $data);
    }

    public function storeMetrics(Request $request)
    {
        $request->validate([
            'result' => 'required',
            'keyword' => 'required',
        ]);

        try {

            // dd($request->result);
            $metrics =  CampaignSearch::updateOrCreate(
                [
                    'keyword' => $request->keyword,
                ],
                [
                    // 'user_id' => Auth::user()->id,
                    'result' => json_encode($request->result)
                ]
            );

            UserCampaignSearch::firstOrCreate([
                'user_id' => Auth::user()->id,
                'campaign_search_id' => $metrics->id
            ]);

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }



    public function  createBrief(){
         

        $data['user'] = Auth::user();
        return Inertia::render('CampaignBrief/create', $data);
    }

    public function  storeBrief(Request $request){
        $user_id =  $request->user()->id;

        try{
          

            $logoName = null;
            $moodBoardName = null;

        if($request->hasFile('logo')){
            $logoName = time().$user_id.'.'.$request->logo->extension();
            $request->logo->storeAs('public/campaign_brief_logos', $logoName);    
        }
       
        if($request->hasFile('mood_board')){
            $moodBoardName = time().$user_id.'.'.$request->mood_board->extension();
            $request->mood_board->storeAs('public/campaign_brief_moodBoards', $moodBoardName);    
        }

        // dd($request);

        $brief = new CampaignBrief;
        $brief->user_id = $user_id;
        $brief->campaign_name = $request->title;
        $brief->social_network = $request->social_network;
        $brief->campaign_type = $request->campaign_type;
        $brief->budget = $request->budget;
        $brief->campaign_budget = $request->budget;
        $brief->tracked_keywords = $request->keywords;
        $brief->campaign_state_date = $request->start_date;
        $brief->campaign_end_date = $request->end_date;
        $brief->campaign_description= $request->description;
        $brief->brand_name= $request->brand_name;
        $brief->target_location= $request->location;
        $brief->target_gender= $request->gender;
        $brief->target_age= $request->age;
        $brief->target_interest= $request->interest;

        $brief->reach_goal= $request->reach;
        $brief->impressions_goal= $request->impression;
        $brief->engagement_goal= $request->engagement;
        $brief->conversion_goal= $request->conversion;
      
        $brief->about_us= $request->about_us;
        $brief->campaign_goal= $request->campaign_goal;
        $brief->campaign_message= $request->campaign_message;
        $brief->campaign_key_objectives= $request->key_objectives;
        $brief->channels= $request->channels;
        $brief->timeline= $request->timeline;
        $brief->target_audience= $request->target_audience; 
        $brief->logo = $logoName;
        $brief->status= "pending";
        $brief->mood_board= $moodBoardName;

        $brief->save();

        return redirect()->route('preorder.success')->withMessage('Campaign created successfully!');

        // return response(['status' => 'success', 'message' => 'brief created.', 'data' => $brief  ]);
    } catch (\Exception $e) {
        dd($e);
        // $this->log($e);
        return response(['status' => 'error', 'message' => $e, 'data' =>[] ]);
        // return redirect()->back()->withError('An error occured. Please try again');
    }


        

    }
}
