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

        $quality_audience = ($this->followers_count * 0.8);


        return [
            'id' => $this->id,
            'username' => $this->username,
            'full_name' => $this->full_name,
            'engagement_rate' => $this->metrics?->engagement_rate, //$this->engagementRate(), // TODO: engagement_rate and interactions should be db fields, updated daily as CRON jobs to boost performance
            'followers_count' => $this->followers_count,
            'tweet_count' => $this->tweets_count,
            'following_count' => $this->following_count,
            'profile_photo_url' => $this->profile_photo_url,
            'profile_banner_url' => $this->profile_banner_url,
            'profile_url' => $this->profile_url,
            'categories' => $this->categories,
            'location' => $this->geo_location?->name,
            'is_verified' => $this->is_verified,
            'bio' => $this->bio,
            // 'gender' => 'Male',
            // 'age' => 29,
            // 'parental_status' => 'parent',
            // 'marital_status' => 'married',
            // 'ethinic' => 'Hausa-Fulani',
            // 'income' => '$10-25k',
            // 'education' => 'bachelor',
            'metrics' => [
                'reach' => [
                    'score' => $this->metrics?->reach,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'reachability' => [
                    'score' => $this->metrics?->reachability,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'impressions' => [
                    'score' => $this->metrics?->impressions,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_impressions' => [
                    'score' => $this->metrics?->average_impressions,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'media_value' => [
                    'score' => $this->metrics?->media_value,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_cpe' => [
                    'score' => $this->metrics?->average_cpe,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'avg_cpm' => [
                    'score' => $this->metrics?->average_cpm,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'engagement_rate' => [
                    'score' => $this->metrics?->engagement_rate,
                    'increase' => 0.24,
                    'label' => 'last 7 days'
                ],
                'interactions' => [
                    'score' => $this->metrics?->interactions,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_retweet' => [
                    'score' => $this->metrics?->total_retweets,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_impressions' => [
                    'score' => $this->metrics?->average_impressions,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'global_rank' => [
                    'score' => '-',
                    'increase' => null,
                    'label' => 'Worldwide'
                ],

                'category_rank' => [
                    'score' => '-',
                    'increase' => null,
                    'label' => $this->categories[0]?->name,
                ],
                'country_rank' => [
                    'score' => '-',
                    'increase' => null,
                    'label' => $this->country?->name
                ],
            ],
            'brand_safety_level'  => $this->metrics?->brand_safety_level  ?? 0,
            'most_used_hashtags'  => json_decode($this->metrics?->most_used_hashatags),
            'best_performing_tweets'  => json_decode($this->metrics?->best_performing_tweets),
            'quality_audience_score' => (float)(($this->metrics?->engagement_rate * $quality_audience) / ($this->metrics?->interactions ?? 1)) * 100,
            'quality_audience' => $this->metrics?->quality_audience, // (float)(($this->metrics?->engagement_rate * $quality_audience) / $this->metrics?->interactions),
            'engagement_rate' => $this->metrics?->engagement_rate,
            'quality_audience' =>  (int)$quality_audience, // $this->metrics?->quality_audience,
            'total_comments' => $this->metrics?->total_replies,
            'total_likes' => $this->metrics?->total_likes,
            'language' => 'English',
            'phone_number' => '+234094614109',
            'email' => 'tomike_a@gmail.com'
        ];
    }
}
