<?php

namespace App\Services;

use App\Helpers\LoggerHelper;

use Abraham\TwitterOAuth\TwitterOAuth;

class TwitterService
{
    use LoggerHelper;

    private $connection;

    public function __construct()
    {
        $this->connection = new TwitterOAuth(config('services.twitter.client_id'), config('services.twitter.client_secret'), config('services.twitter.access_token'), config('services.twitter.access_token_secret'));
        $this->connection->setApiVersion('2');
        // dd($this->connection);
    }

    public function getUserProfileById()
    {
        return $this->connection->get('users', ['ids' => 12]);
    }
}
