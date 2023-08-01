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
use App\Models\CampaignReport;


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

      

    public function viewBrief( $id) {
        $data['campaign'] = CampaignBrief::with('reports.user')->where('id', $id)->first();
        return Inertia::render('Admin/CampaignBrief/view', $data);
    }

    public function createReport(Request $request){
        $admin_id =  $request->user()->id;

        try{

         $campaign = CampaignBrief::where('id',  $request->campaign_briefs_id)->first();
         $campaign->status = $request->status;
         $campaign->update();

         if(!isset($request->report_note)  && !isset($request->report_file)) return false;

         $report_file_name = null;
        if($request->hasFile('report_file')){
            $report_file_name = time().$admin_id.'.'.$request->report_file->extension();
            $request->report_file->storeAs('public/campaign_report_files', $report_file_name);    
        }
     


        $brief = new CampaignReport;
        $brief->admin_id =  $admin_id ;
        $brief->report_note = $request->report_note;
        $brief->report_file = $report_file_name;
        $brief->status = $request->status;
        $brief->campaign_briefs_id = $request->campaign_briefs_id;
        $brief->save();

        // return response(['status' => 'success', 'message' => 'brief created.', 'data' => $brief  ]);
    } catch (\Exception $e) {
        dd($e);
        // $this->log($e);
        return response(['status' => 'error', 'message' => $e, 'data' =>[] ]);
        // return redirect()->back()->withError('An error occured. Please try again');
    }
    }
}
