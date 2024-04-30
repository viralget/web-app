<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Services\SubscriptionService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laravelcm\Subscriptions\Models\Plan;
use Laravelcm\Subscriptions\Traits\HasPlanSubscriptions;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasPlanSubscriptions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];





    public $appends = ['full_name'];

    public function getFullNameAttribute()
    {

        return $this->first_name.' '.$this->last_name;
    }


    public function profiles()
    {
        return  $this->hasMany(ProfiledInfluencer::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function account()
    {
        return $this->hasOne(UserAccount::class);
    }

    public function info()
    {
        return $this->hasOne(UserDetail::class);
    }

    public function details()
    {
        return $this->hasOne(UserDetail::class);
    }


    public function userProfilingCountLeft()
    {
        $count = $this->profiles()->count();

        $default = 50;

        return $default - $count;
    }

    public function getActivePlan($user) {
        return $user->subscribedPlans()->first();
    }

    public function getActiveSubscription($user) {
        return $user->activePlanSubscriptions()->first();
    }

     public function getUserPlanFeatures(Plan $plan) {
        return $plan ? $plan->features()->get() : [];
    }

    public function getSubscriptionFeatureLimits(User $user, $feature) {
        $subscriptionService = new SubscriptionService;

        return $subscriptionService->checkUserFeatureLimits($user, $feature);
    }


    public function getSubscriptionFeatureUsage(User $user, $feature) {
        $subscriptionService = new SubscriptionService;

        return $subscriptionService->checkUserFeatureUsage($user, $feature);
    }

    
}
