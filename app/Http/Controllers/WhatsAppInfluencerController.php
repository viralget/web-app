<?php

namespace App\Http\Controllers;

use App\Http\Resources\InfluencerResource;
use App\Models\Category;
use App\Models\Influencer;
use App\Models\Search;
use App\Models\WhatsappInfluencer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WhatsAppInfluencerController extends Controller
{

    protected WhatsappInfluencer $influencer;

    function __construct(WhatsappInfluencer $influencer)
    {
        $this->influencer = $influencer;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $search_history = Search::limit(3)->get();
        $top_categories = Category::where('is_featured', true)->limit(8)->get();
        $top_influencers = $this->influencer->limit(8)->get();

        $categories = Category::get();

        return Inertia::render(
            'Influencers/index',
            [
                'search_history' => $search_history,
                'top_influencers' => InfluencerResource::collection($top_influencers),
                'top_categories' => $top_categories,
                'categories' => $categories
            ]
        );
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
     * Search a resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $result = WhatsappInfluencer::query();
        $categories = Category::get();


        if ($request->has('location')) {
            $result = $result->where('location', 'like', "%$request->location%");
        }

        if ($request->has('keywords')) {
            $result = $result->where('bio', 'like', "%$request->keywords%")->orWhere('username', 'like', "%$request->keywords%");
        }


        // Store User search sesion
        // $this->storeSearch($request, $result->count());
        return Inertia::render(
            'Influencers/search',
            [
                'list' => InfluencerResource::collection(
                    $result->get()
                ),
                'count' => $result->count(),
                'categories' => $categories
            ]
        );
        // return $result->get();
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
            "gender" => "required",
            "marital_status" => "required",
            "occupation" => "required",
            "whatsapp_phone_number" => "required",
            "average_whatsapp_views" => "required",
            "country" => "required",
            "state" => "required",
            "parental_status" => "required",
            "interests" => "required",
            "video_evidence" => "required"
        ]);

        dd($request->all());
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
