<?php

namespace App\Http\Controllers;

use App\Http\Resources\InfluencerResource;
use App\Models\Category;
use App\Models\Influencer;
use App\Models\Search;
use App\Models\TwitterInfluencer;
use App\Models\ProfiledInfluencer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InfluencerController extends Controller
{

    protected TwitterInfluencer $influencer;

    function __construct(TwitterInfluencer $influencer)
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
        //
    }

    /**
     * Search a resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {

        $result = TwitterInfluencer::query();
        $categories = Category::get();

        $request_categories = explode(',', $request->category);

        if ($request->has('location')) {
            $result = $result->where('location', 'like', "%$request->location%");
        }

        if (count($request_categories) > 0) {
            $result = $result->where(function ($query) use ($request_categories) {
                foreach ($request_categories as $category) {
                    $query->orWhereHas('categories', function ($q) use ($category) {
                        $q->where('name', 'LIKE', "%$category%");
                    });
                }
            });
        }

        if ($request->has('keywords')) {
            $result = $result->where('bio', 'like', "%$request->keywords%")->orWhere('username', 'like', "%$request->keywords%");
        }


        // Store User search sesion
        if ($request) {
            $this->storeSearch($request, $result->count());
        }

        return Inertia::render(
            'Influencers/search',
            [
                'list' => InfluencerResource::collection($result->latest()->paginate(10)), //InfluencerResource::collection($result->latest()->paginate(10)),
                'count' => $result->count(), // $result->count(), //$result->count(),
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

        return response(['status' => true, 'data' => $request->queryData]);
    }




    public   function  getAllCategoriesPage()
    {

        $categories = Category::get();

        return Inertia::render(
            'AllCategories/index',
            [
                'categories' => $categories
            ]
        );
    }



    public function  getInfluencer($id)
    {

        $influencer = TwitterInfluencer::find($id);

        return Inertia::render(
            'InfluencerProfile/index',
            [
                'influencer' => $influencer
            ]
        );
    }


}
