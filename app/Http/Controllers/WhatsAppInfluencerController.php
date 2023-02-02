<?php

namespace App\Http\Controllers;

use App\Http\Resources\InfluencerResource;
use App\Models\Category;
use App\Models\Influencer;
use App\Models\Search;
use App\Models\WhatsappInfluencer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WhatsAppInfluencerController extends Controller
{

    protected WhatsappInfluencer $influencer;

    function __construct(WhatsappInfluencer $influencer)
    {
        $this->influencer = $influencer;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('WhatsAppInfluencer/new');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            "name" => "required",
            "email" => "required|unique:whatsapp_influencers",
            "gender" => "required",
            "marital_status" => "required",
            "age" => "required",
            "occupation" => "required",
            "whatsapp_number" => "required|unique:whatsapp_influencers",
            "average_views" => "required",
            "country" => "required",
            "state" => "required",
            "parental_status" => "required",
            "interests" => "required",
            "video_evidence" => "required|file"
        ]);

        $data = $request->except('video_evidence');

        if ($request->file('video_evidence')) {
            $file = $request->file('video_evidence');

            $path = $file->store('influencers/whatsapp/video_evidence' . time() . '_' . $request->whatsapp_phone_number);
            $data['video_evidence'] = Storage::url($path);
        }

        $this->influencer->create($data);
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

    public function storeSearch(Request $request)
    {
        if ($request->queryData || $request->location) {
            Search::firstOrCreate(
                [
                    'keyword' => $request->queryData,
                    'session_id' => session()->getId(),
                    'user_id' => $request->user()->id ?? null,
                ],
                [
                    'query' => $request->query,
                    'results_count' => $request->count
                ]
            );
        }

        return response(['status' => true]);
    }
}
