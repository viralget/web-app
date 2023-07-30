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
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return Inertia::render('Dashboard/index');
    }
}
