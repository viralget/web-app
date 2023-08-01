<?php

namespace App\Mail;

use App\Models\Invoice;
use App\Models\TwitterInfluencer;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use League\OAuth1\Client\Server\Twitter;

class InfluencerMessage extends Mailable
{
    use Queueable, SerializesModels;

    protected $influencer;
    protected $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(TwitterInfluencer $influencer, $message)
    {
        $this->influencer = $influencer;
        $this->message = $message;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'New Message Received',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            markdown: 'emails.messages.new',
            with: [
                'influencer' => $this->influencer,
                'message' => $this->message,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
