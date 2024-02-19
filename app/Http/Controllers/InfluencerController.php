<?php

namespace App\Http\Controllers;

use App\Http\Resources\InfluencerResource;
use App\Models\Category;
use App\Models\Influencer;
use App\Models\InfluencerCountry;
use App\Models\Search;
use App\Models\TwitterInfluencer;
use App\Models\ProfiledInfluencer;
use App\Models\InfluencerList;
use App\Services\TwitterService;
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

        $countries = InfluencerCountry::get();

        return Inertia::render(
            'Influencers/index',
            [
                'search_history' => $search_history,
                'saved_search' => $saved_search,
                'top_influencers' => InfluencerResource::collection($top_influencers),
                'top_categories' => $top_categories,
                'categories' => $categories,
                // 'countries' => $countries,
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

            $has_query = true;
            $result = TwitterInfluencer::query();

            $request_categories = explode(',', $request->category);

            $influencer_location = $request->influencer_location;
            $audience_size = $request->audience_size;
            $category = $request->category;
            $keywords = $request->keyword;
            $keywords_position = $request->position;
            $qas = $request->influencer_qas;
            $size = $request->size;
            $reach = $request->influencer_reach;
            $platform = $request->platform;

            $verification_status = $request->verification_status;
            $gender = $request->gender;
            $avg_likes = $request->average_likes;
            $er = (float) $request->engagement_rate;


            $any = 'Any';

            // $countries = InfluencerCountry::get();

            if ($platform) {
                $result->where('platform', strtolower($platform));
            }

            if ($size && $size != $any) {

                $size = explode(',', $size);


                $result = $result->where(function ($query) use ($size) {
                    foreach ($size as $_size) {
                        if ($_size == 'any')
                            continue;
                        $_size = $this->getsizeRange($_size);
                        $query->orWhereBetween('followers_count', $_size);
                    }
                });
            }


            if ($influencer_location && $influencer_location != $any) {

                $influencer_location = explode(',', $influencer_location);

                $result = $result->where(function ($query) use ($influencer_location) {
                    foreach ($influencer_location as $location) {
                        if ($location == 'any')
                            continue;
                        $query->orWhereHas('geo_location', function ($q) use ($location) {
                            $q->where('name', $location);
                        });
                        $query->orWhere('location', $location);
                    }
                });
            }

            if ($audience_size && $audience_size != $any) {
                $audience_size = explode(',', $audience_size);

                $result = $result->where(function ($query) use ($audience_size) {
                    foreach ($audience_size as $size) {
                        if ($size == 'any')
                            continue;
                        $query->orWhere('followers', '>=', "%$size%");
                    }
                });
            }

            if ($category && $category != $any) {
                $category = explode(',', $category);

                $result = $result->where(function ($query) use ($category) {
                    foreach ($category as $cat) {
                        $query->orWhereHas('categories', function ($q) use ($cat) {
                            $q->where('name', $cat);
                        });
                    }
                });
            }



            if ($reach && $reach != $any) {
                $reach = explode(',', $reach);

                $result = $result->where(function ($query) use ($reach) {
                    foreach ($reach as $_reach) {
                        $query->orWhereHas('metrics', function ($q) use ($_reach) {
                            $reach_value = $this->getReachRange($_reach);

                            $q->whereBetween('reach', [$reach_value[0], $reach_value[1]]);
                        });
                    }
                });
            }


            if ($qas && $qas != $any) {
                $qas = explode(',', $qas);

                $result = $result->where(function ($query) use ($qas) {
                    foreach ($qas as $score) {
                        $score = $this->getQASValue($score);
                        if (!$score)
                            continue;
                        $query->orWhereHas('metrics', function ($q) use ($score) {
                            $q->where('quality_audience', '>=', $score);
                        });
                    }
                });
            }


            if ($er) {
                $result->whereHas('metrics', function ($query) use ($er) {
                    $query->where('engagement_rate','>=', $er);
                });
            }


            if ($avg_likes) {
                $result->whereHas('metrics', function ($query) use ($avg_likes) {


                    $query->where('average_likes_per_post', '>=',  $avg_likes);
                });


                // dd($request->all());
                // $result->where('average_likes_per_post', $avg_likes);
            }

            if ($gender) {
                $values = $this->getSearchValues($gender);

                if ($values) {
                    $result->whereHas('metrics', function ($query) use ($values) {
                        $query->whereIn('gender', $values);
                    });
                }
            }


            if ($verification_status) {
                $verification_status = explode(',', $verification_status);

                $vs_types = [];

                foreach($verification_status as $vs) {
                    array_push($vs_types, $vs == 'Verified' ? 'yes' : 'no');
                }


                $result->whereHas('metrics', function ($query) use ($vs_types) {
                        // $query->orWhere(function ($q) use ($value) {
                        $query->whereIn('is_verified', $vs_types);
                        // });
                });
            }



            if ($keywords && $keywords != $any) {

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
            $has_query = false;
        }


        return Inertia::render(
            'Influencers/search',
            [
                'list' => $result ? InfluencerResource::collection($result) : [], //InfluencerResource::collection($result->latest()->paginate(10)),
                'count' => $result ? $result->count() : 0, // $result->count(), //$result->count(),
                'categories' => $categories,
                // 'countries' => $countries,
                'total_count' => $this->influencer->count(),
                'has_query' => $has_query
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
    public function show(Request $request, TwitterInfluencer $influencer)
    // public function show(Request $request, $influencer)
    {
        // $list = [];

        // $influencer = $id;
        // $findProfiled = ProfiledInfluencer::where('')->first(); // ProfiledInfluencer::find($id);
        // $user_id = $request->user()->id;
        // if ($findProfiled) {
        $list = InfluencerList::with('influencers')->where('user_id', $influencer->id)->get();
        // }

        return Inertia::render(
            'InfluencerProfile/Show/index',
            [
                // 'username' => $influencer,
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
                'keyword' => $request->queryData ?? 'null',
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


    public function getAllCategoriesPage()
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

    private function getSizeRange($size)
    {

        switch ($size) {
            case 'Nano':
                return [100, 10000];
            case 'Micro':
                return [10000, 50000];
            case 'Mid-Tier':
                return [50000, 500000];
            case 'Macro':
                return [5000000, 1000000];

            default:
                # code...
                break;
        }
    }

    private function getReachRange($size)
    {
        switch ($size) {
            case 'Nano':
                return [100, 10000];
            case 'Micro':
                return [10000, 50000];
            case 'Mid-Tier':
                return [50000, 500000];
            case 'Macro':
                return [5000000, 1000000];

            default:
                # code...
                break;
        }
    }

    private function getQASValue($value)
    {

        switch ($value) {
            case 'Any':
                return '';
            case 'Excellent >90':
                return 90;
            case 'Very Good >80':
                return '80';
            case 'Good >60':
                return 60;
            case 'Average >40':
                return 40;
            case 'Poor >25':
                return 25;

            default:
                # code...
                break;
        }
    }

    private function getSearchValues($values)
    {
        return explode(',', str_replace('any', '', $values));
    }
}
       
