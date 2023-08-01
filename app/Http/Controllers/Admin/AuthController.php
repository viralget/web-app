<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Imports\InfluencersImport;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;


class AuthController extends Controller
{

    private $admin;

    public function __construct(Admin $admin)
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

        $user = $this->admin->firstOrCreate([
            'email' => 'paul@viralget.io',
        ], [
            // 'first_name' => 'Paul',
            'password' => Hash::make('password')
        ]);
        Auth::guard('admin')->login($user);
        // return Inertia::render('Admin/Auth/Login');


        return redirect()->intended(route('admin.dashboard'));
    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (Auth::guard('admin')->attempt($request->only('email', 'password'), true)) {
            $request->session()->regenerate();

            // dd('hello');
            return redirect()->intended(route('admin.dashboard'));
        } else {
            // dd('hellox');
            return redirect()->back()->withErrors('Invalid login credentials');
        }
    }


    /** 
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illumina    te\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('admin.login');
    }
}
