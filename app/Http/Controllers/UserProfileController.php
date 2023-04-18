<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Support\Facades\Hash;


class UserProfileController extends Controller
{
    

    public function createSettings(){
        $user_id = request()->user()->id;
        $user = User::with('info')->find($user_id);
        return Inertia::render('Account/index', [ "user" => $user]);
    }


    public function updateSettings(Request $request)
    {
        $user = request()->user();
        $imageName = null;

        if($request->hasFile('file')){
            $imageName = time().$user->id.'.'.$request->file->extension();
            $request->file->storeAs('public/user_images', $imageName);    
        }
        

       
       
        if($request->current_password && $request->new_password &&  $user){

            if (Hash::check($request->current_password, $user->password)) {
                 $updateUser  =  User::find($user->id);
                 $updateUser->password =  Hash::make($request->new_password);
                 $updateUser->update();
                 return back()->with([
                    'success' => 'profile updated successfully!!'
                ]);
            }else{
                return back()->withErrors([
                    'error' => 'Your password doesn\'t match'
                ]);
            }
          
        }
       

        $userdetails = UserDetail::where('user_id', $user->id)->first();
        $userdetails->first_name = $request->first_name;
        $userdetails->last_name = $request->last_name;
        $userdetails->image =  $request->hasFile('file') ? $imageName : $userdetails->image;
        $userdetails->company_name = $request->company_name;
        $userdetails->company_type = $request->company_type;
        $userdetails->company_website = $request->company_website;
        $userdetails->company_bio = $request->company_bio;
        $userdetails->job_title = $request->job_title;
        
        $userdetails->update();
       
        return back()->with([
            'success' => 'profile updated successfully!!'
        ]);
       
    }
}
