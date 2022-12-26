<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Influencer;
use App\Models\Search;
use App\Models\TwitterInfluencer;
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
        $top_categories = Category::where('is_parent', true)->limit(8)->get();
        $top_influencers = $this->influencer->limit(8)->get();


        return Inertia::render(
            'Influencers/index',
            [
                'search_history' => $search_history,
                'top_influencers' => $top_influencers,
                'top_categories' => $top_categories,
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
        $result = Influencer::query();

        if ($request->has('location')) {
            $result = $result->where('location', 'like', "%$request->location%");
        }

        if ($request->has('keyword')) {
            $result = $result->where('bio', 'like', "%$request->location%")->orWhere('username', 'like', "%$request->keyword%");
        }

        return $result->get();
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
}
