<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserVerifyEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $user;

    protected $token;

    public function __construct(User $user, $token)
    {
        $this->user = $user;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $verify_url = route('verification.verify', ['id' => $this->user->id, 'hash' => $this->token]);
        

        $data = [
            'user' => $this->user,
            'verify_url' => $verify_url
        ];
        // return $this->markdown('users.auth.verify-email', [
        //     'user' => $this->user,
        //     'verify_url' => $verify_url,
        // ])->subject('Verify your email address');
        return $this->view('mail.sendVerificationMail')
        ->subject('Verify your email address')
          ->with('data', $data);
    }
}
