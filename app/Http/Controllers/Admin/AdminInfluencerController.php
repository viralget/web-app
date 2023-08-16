<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Imports\InfluencersImport;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Maatwebsite\Excel\Importer;


class AdminInfluencerController extends Controller
{

    private $importer;

    public function __construct(Importer $importer)
    {
        $this->importer = $importer;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // My campaigns
        // return Inertia::render('Campaigns/list');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return view('admin.influencers');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function upload()
    {
        $categories = Category::get();

        return view('admin.influencers.upload', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleUpload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:csv,xlsx,xls',
            'platform' => 'required',
            'category' => 'required'
        ]);

        try {
            $file = $request->file('file');

            $this->importer->import(new InfluencersImport($request->platform, $request->category), $request->file('file'));

            // Storage::delete($path);

            return redirect()->back()->withMessage('Influencers imported successfully');
            // return response(['status' => true, 'message' => 'Influencers imported successfully']);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Error uploading' . $e->getMessage());
            // return response(['status' => false, 'message' => 'File not imported', 'error' => $e->getMessage()]);
        }
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
