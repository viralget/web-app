<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Imports\InfluencersImport;
use App\Models\User;
use App\Models\WhatsappInfluencer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


class WhatsAppInfluencersController extends Controller
{

    private $admin;
    private $influencer;

    public function __construct(WhatsappInfluencer $influencer)
    {
        $this->influencer = $influencer;
        // $this->admin = $admin;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $influencers = $this->influencer->latest()->paginate(20);

        return Inertia::render('Admin/WhatsAppInfluencers/index', [
            'influencers' => $influencers
        ]);
    }


    public function show(WhatsappInfluencer $influencer)
    {

        return Inertia::render('Admin/WhatsAppInfluencers/Show/index', [
            'influencer' => $influencer
        ]);
    }




    public function verification(Request $request, WhatsappInfluencer $influencer)
    {

        if ($request->status == 'verified') {
            $influencer->update(['is_verified' => true]);

            // Send mail?
            return redirect()->back()->withMessage('Influencer marked as verified');
        } else if ($request->status == 'unverified') {
            $influencer->update(['is_verified' => false]);

            return redirect()->back()->withMessage('Influencer marked as unverified');
        } else {
            return redirect()->back()->withErrors('An error occured');
        }
    }


    public function approval(Request $request, WhatsappInfluencer $influencer)
    {

        if ($request->status == 'approved') {
            $influencer->update(['approval_status' => 'approved']);

            // Send mail?
            return redirect()->back()->withMessage('Influencer marked as approved');
        } else if ($request->status == 'pending') {
            $influencer->update(['approval_status' => 'pending']);

            return redirect()->back()->withMessage('Influencer marked as pending approval');
        } else {
            return redirect()->back()->withErrors('An error occured');
        }

        return redirect()->back()->withMessage('Influencer marked as approved');
    }
}
