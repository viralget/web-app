<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;


class UserProfileController extends Controller
{
    

    public function createSettings(){
        $user_id = request()->user()->id;
        $user = User::with('info')->find($user_id);
        return Inertia::render('Account/index', [ "user" => $user]);
    }
}
