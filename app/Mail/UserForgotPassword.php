<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $user;

    // protected $token;

    public function __construct(User $user)
    {
        $this->user = $user;
        // $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $reset_url = route('password.reset', ['email' => $this->user->email]);
        

        $data = [
            'reset_url' => $reset_url
        ];
        return $this->view('mail.sendPasswordResetMail')
        ->subject('Reset your  password')
          ->with('data', $data);
    }
}
