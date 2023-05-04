<?php

namespace App\Http\Controllers;

use App\Http\Resources\InfluencerResource;
use App\Models\Category;
use App\Models\Influencer;
use App\Models\Search;
use App\Models\TwitterInfluencer;
use App\Models\ProfiledInfluencer;
use App\Models\InfluencerList;
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

        $user = request()->user();

        $search_history = Search::where('user_id', $user->id)->limit(3)->orderBy('id', 'Desc')->get();
        $saved_search = Search::where('user_id', $user->id)->where('is_saved', true)->limit(3)->orderBy('id', 'Desc')->get();
        $top_categories = Category::where('is_featured', true)->limit(8)->get();
        $top_influencers = $this->influencer->limit(8)->get();
        $categories = Category::get();

        return Inertia::render(
            'Influencers/index',
            [
                'search_history' => $search_history,
                'saved_search' => $saved_search,
                'top_influencers' => InfluencerResource::collection($top_influencers),
                'top_categories' => $top_categories,
                'categories' => $categories,
                'total_count' => $this->influencer->count()
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

        $categories = Category::get();

        if (count($request->all()) > 0) {

            $result = TwitterInfluencer::query();

            $request_categories = explode(',', $request->category);

            $influencer_location = $request->influencer_location;
            $audience_size = $request->audience_size;
            $category = $request->category;
            $keywords = $request->keyword;
            $keywords_position = $request->position;

            if ($influencer_location) {
                $influencer_location = explode(',', $influencer_location);

                $result = $result->where(function ($query) use ($influencer_location) {
                    foreach ($influencer_location as $location) {
                        $query->orWhere('location', 'LIKE', "%$location%");
                    }
                });
            }

            if ($audience_size) {
                $audience_size = explode(',', $audience_size);

                $result = $result->where(function ($query) use ($audience_size) {
                    foreach ($audience_size as $size) {
                        $query->orWhere('followers', '>=', "%$size%");
                    }
                });
            }

            if ($category) {
                $category = explode(',', $category);

                $result = $result->where(function ($query) use ($category) {
                    foreach ($category as $cat) {
                        $query->orWhereHas('categories', function ($q) use ($cat) {
                            $q->where('name', $cat);
                        });
                    }
                });
            }




            if ($keywords) {

                if ($keywords_position == 'bio') {
                    $result->where('bio', 'like', "%$request->keywords%");
                } else {

                    // Actually, check tweets
                    $result = $result->where('bio', 'like', "%$request->keywords%")->orWhere('username', 'like', "%$request->keywords%");
                }
            }


            // Store User search sesion
            if ($request) {
                $this->storeSearch($request, $result->count());
            }

            $result = $result->latest()->paginate(10)->appends($_GET);
        } else {
            $result = null;
        }


        return Inertia::render(
            'Influencers/search',
            [
                'list' => $result ? InfluencerResource::collection($result) : [], //InfluencerResource::collection($result->latest()->paginate(10)),
                'count' => $result ? $result->count() : 0, // $result->count(), //$result->count(),
                'categories' => $categories,
                'total_count' => $this->influencer->count()
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
    public function show(Request $request, TwitterInfluencer $id)
    {
        $list = [];
        $influencer = $id;
        $findProfiled = ProfiledInfluencer::find($id);
        $user_id = $request->user()->id;
        if ($findProfiled) {
            $list = InfluencerList::with('influencers')->where('user_id', $user_id)->get();
        }

        return Inertia::render(
            'InfluencerProfile/show',
            [
                'influencer' => InfluencerResource::make($influencer),
                'list' => $list
            ]
        );
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

    public function storeSearch(Request $request, $count)
    {
        if (count($request->all()) > 0) {

            Search::firstOrCreate(
                [
                    'keyword' => $request->keyword ?? 'null',
                    'search_filters' => json_encode($request->except('page')),
                    'session_id' => session()->getId(),
                    'user_id' => $request->user()->id ?? null,
                ],
                [
                    'query' => $request->getQueryString(),
                    'results_count' => $count
                ]
            );
        }

        return response(['status' => true, 'data' => $request->queryData]);
    }

    public function storeUserSearch(Request $request)
    {

        $user = $request->user();

        $search = Search::where('user_id', $user->id)->where('query', $request->queryData)->first();

        $result = [];
        parse_str($request->queryData, $result);

        unset($result['page']);

        $result = json_encode($result);


        if ($search) {
            // Break filters down to JSON object key:value pair
            $search->update([
                'is_saved' => true,
                'search_filters' => $result,
                'name' => $request->name,
            ]);
        } else {
            Search::create([
                'name' => $request->name,
                'is_saved' => true,
                'user_id' => $user->id,
                'keyword' => $request->queryData ??  'null',
                'session_id' => $request->session()->getId(),
                'user_id' => $request->user()->id ?? null,
                'query' => json_encode($request->query),
                'results_count' => $request->count ?? 0,
                'search_filters' => $result,
            ]);
        }

        return response(['status' => true]);
    }


    public function deleteUserSearch(Request $request)
    {


        try {
            $search = Search::find($request->id);
            $search->delete();
            return response(['status' => true, 'message' => 'Search deleted successfully']);
        } catch (\Throwable $th) {
            return response(['status' => false, 'message' => 'An error occured. Please try again']);
        }
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

    public function savedSearches()
    {

        $user = request()->user();
        $saved_search = Search::where('user_id', $user->id)->where('is_saved', true)->orderBy('id', 'Desc')->get();
        return Inertia::render(
            'Influencers/RecentSearches/savedSearches',
            [
                'saved_search' => $saved_search
            ]
        );
    }
}
