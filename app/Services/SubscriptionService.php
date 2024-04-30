<?php

namespace App\Services;

use App\Models\User;
use Laravelcm\Subscriptions\Models\Plan;
use Laravelcm\Subscriptions\Models\Feature;
use Laravelcm\Subscriptions\Interval;
use App\Services\PaymentMethods\Paystack;
use Laravelcm\Subscriptions\Models\Subscription;
use Laravelcm\Subscriptions\Models\SubscriptionUsage;

class SubscriptionService {


    protected $subscription;
    protected $pricingService;

    public function __construct()
    {
        $this->subscription = new Subscription;
        $this->pricingService = new PricingService;

    }


    public function checkUserCanUseFeature(User $user, $feature) {
        
        return $this->checkUserFeatureLimits($user, $feature) > 0;
    }

    public function checkUserFeatureLimits(User $user, $feature) {

        $user_subscription = $user->getActiveSubscription($user);

        if (!$user_subscription)
            return 0;

        // dd($usage);
        // $feature_record = $user_subscription->getFeatureValue($feature);
        $feature_record = Feature::where('name','like', "%$feature%")->where('plan_id', $user_subscription->plan_id)->first();

        // dd($feature_record, $feature);
        if (!$feature_record)
            return 0;

        // dd($this->userSubscription($user)->first());
        $usage = $this->userSubscription($user)?->usage()->where('feature_id', $feature_record->id)->first();

        // $usage = SubscriptionUsage::where('user_id', $user->id)->where('feature_id')->first();

        // dd($feature_record);
        if($usage && $feature_record ) {
            $used = (int) $feature_record->value - $usage->used;
            return  $used > 0 ? $used : 0;
        }

        return $feature_record->value;
    }

    public function checkUserFeatureUsage(User $user, $feature) {


        $user_subscription = $user->getActiveSubscription($user);

        if (!$user_subscription)
            return 0;

        // dd($usage);
        // $feature_record = $user_subscription->getFeatureValue($feature);
        $feature_record = Feature::where('name','like', "%$feature%")->where('plan_id', $user_subscription->plan_id)->first();

        // dd($feature_record, $feature);
        if (!$feature_record)
            return 0;

        // dd($this->userSubscription($user)->first());
        $usage = $this->userSubscription($user)?->usage()->where('feature_id', $feature_record->id)->first();


        return $usage?->used ?? 0;
    }

    public function recordFeatureUsage(User $user, $feature, $value = 1) : bool
    {

        try {
        $user_plan = $user->getActivePlan($user);

        if (!$user_plan)
            return false;

        $plan = $this->pricingService->getPlan($user_plan->id);

        if (!$plan)
            return false;

        $subscription = $this->userSubscription($user);

        $feature_record = Feature::where('slug', $feature)->first();

        // dd($feature_record, $feature);

            if (!$subscription)
                return false;

        // return $feature_record->;
        $usage = $subscription?->usage()->firstOrNew([
            'subscription_id' => $subscription->id,
            'feature_id' => $feature_record->id,
        ]);

        if($usage->used) {
            $usage->increment('used', $value);
        } else {
            $usage->used = $value;
        }

        $usage->save();

            return true;
        // return $usage;
        } catch(\Exception $e) {
            return false;
            // return 
        }

        // dd($feature);
                // return $subscription?->recordFeatureUsage($feature, $value);

        // dd($user->getActivePlan($user));

        // $subscription = Subscription::ofSubscriber($user)->first();
        // dd($subscription);
        // dd($user->planSubscription($plan->name), $plan->slug); //->recordFeatureUsage($feature, $value));
        // return $user->planSubscription($plan->name)?->recordFeatureUsage($feature, $value);
    }

    public function userSubscription(User $user) {
        return $user->planSubscriptions()->latest()->first();
    }


}