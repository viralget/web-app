<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravelcm\Subscriptions\Models\Plan as ModelsPlan;

class Plan extends ModelsPlan
{
    use HasFactory;

    function paymentService() {
        return $this->hasOne(PaymentServicePlans::class, 'plan_id');
    }

   
}
