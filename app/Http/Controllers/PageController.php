<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;


class PageController extends Controller
{
    //



    public function sendContact(Request $request){

            $request->validate([
                'full_name' => 'required|string|max:255',
                'company_name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'message' => 'required|string',
            ]);
            
            $data = [
                'title' => 'Web contact form',
                'message' => $request->message,
                'company_name' => $request->company_name,
                'email' => $request->email,
                'full_name' => $request->full_name
            ];

         try {
    
             $send =  Mail::to($_ENV['SUPPORT_EMAIL_ADDRESS'])->send(new SendMail($data));

               if($send){
                   return redirect()->back();
               }
           
            } catch (\Exception $e) {
                return redirect()->back()->withError('An error occured. Please try again');
            }
    

       
    }
}