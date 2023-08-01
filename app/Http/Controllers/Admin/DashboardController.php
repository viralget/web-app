<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Imports\InfluencersImport;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Models\CampaignBrief;


class DashboardController extends Controller
{

    private $admin;

    public function __construct(User $admin)
    {
        $this->admin = $admin;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Dashboard/index');
    }





    // admin campaign


    public   function  indexBrief(){
        $data['campaigns'] = CampaignBrief::with('user')->orderBy('id', "Desc")->get();
        return Inertia::render('Admin/CampaignBrief/index', $data);
      } 
}
