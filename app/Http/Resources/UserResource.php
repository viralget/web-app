<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $user = $request->user();
        // dd($request->user());
        $user_plan = $user->getActivePlan($user);

        $subscription_features = $user->getUserPlanFeatures($user_plan);

        // dd($user_plan, $subscription_features, $user->getSubscriptionFeatureLimits($user, 'monthly-influencer-analysis'));
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'name' => $this->first_name . ' ' . $this->last_name,
            'email' => $this->email,
            'is_deactivated' => $this->is_deactivated,
            'phone' => $this->details ? $this->details->phone : null,
            'location' => $this->details ? $this->details->location : null,
            'linkedin_url' => $this->details ? $this->details->linkedin_url : null,
            'bio' => $this->details ? $this->details->bio : null,
            // $this->userProfilingCountLeft(),
            // 'available_profiling_count' => $this->userProfilingCountLeft(),
            //  $this?->userProfilingCountLeft(),
            'image_url' => $this->info?->image_url,
            'active_subscription' => $user_plan,
            'subscription_features' => $subscription_features,
            'available_profiling_count' => $user->getSubscriptionFeatureUsage($user, 'monthly_influencer_analysis'),

        ];
    }
}
