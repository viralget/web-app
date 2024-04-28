<?php

namespace App\Services;

use Laravelcm\Subscriptions\Models\Plan;
use Laravelcm\Subscriptions\Models\Feature;
use Laravelcm\Subscriptions\Interval;
use App\Services\PaymentMethods\Paystack;
use Laravelcm\Subscriptions\Models\Subscription;

class SubscriptionService {


    protected $plan;

    public function __construct()
    {
        $this->plan = new Subscription;

    }


}