<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Category;

class InfluencerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'username' => $this->username,
            'full_name' => $this->full_name,
            'engagement_rate' => 0, //$this->engagementRate(), // TODO: engagement_rate and interactions should be db fields, updated daily as CRON jobs to boost performance
            'interactions' => 0, // $this->interactions(),
            'followers_count' => $this->followers_count,
            'profile_photo_url' => $this->profile_photo_url,
            'profile_banner_url' => $this->profile_banner_url,
            'profile_url' => $this->profile_url,
            'categories' => $this->categories,
            'location' => $this->location,
            'bio' => $this->bio,
            'gender' => 'Male',
            'age' => 29,
            'parental_status' => 'parent',
            'marital_status' => 'married',
            'ethinic' => 'Hausa-Fulani',
            'income' => '$10-25k',
            'education' => 'bachelor',
            'metrics' => [
                'avg_comments' => [
                    'score' => 118,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'engagement_rate' => [
                    'score' => 0.89,
                    'increase' => 0.24,
                    'label' => 'last 7 days'
                ],
                'avg_retweet' => [
                    'score' => 0.89,
                    'increase' => 0.24,
                    'label' => 'last 7 days'
                ],
                'global_rank' => [
                    'score' => 40204,
                    'increase' => null,
                    'label' => 'Worldwide'
                ],
            
                'category_rank' => [
                    'score' => 17,
                    'increase' => null,
                    'label' => 'Beauty in Nigeria'
                ],
                'country_rank' => [
                    'score' => 358,
                    'increase' => null,
                    'label' => '🇳🇬 Nigeria'
                ],
           ],
            'quality_audience_score' => 0,
            'quality_audience' => 0,
            'total_comments' => 0,
            'total_likes' => 0,
            'language' => 'English',
            'phone_number' => '+234094614109',
            'email' => 'tomike_a@gmail.com'
        ];
    }
}
