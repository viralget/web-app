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
        $category = isset($this->categories[0]) ? $this->categories[0] : null;
        $additional_data = json_decode($this->additional_data);
        $default_metrics_label = 'last 30 days';

        return [
            'id' => $this->id,
            'username' => $this->username,
            'full_name' => $this->full_name,
            'engagement_rate' => $this->engagement_rate, //$this->engagementRate(), // TODO: engagement_rate and interactions should be db fields, updated daily as CRON jobs to boost performance
            'followers_count' => $this->followers_count,
            'tweet_count' => $this->tweets_count,
            'following_count' => $this->following_count,
            'profile_photo_url' => $this->profile_photo_url,
            'profile_banner_url' => $this->profile_banner_url,
            'profile_url' => $this->profile_url,
            'categories' => $this->categories,
            'location' => $this->geo_location?->name,
            'is_verified' => $this->is_verified,
            'platform' => $this->platform,
            'average_likes' => $this->average_likes_per_post,
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
                    'score' => $this->reach,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'reachability' => [
                    'score' => $this->reachability,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'impressions' => [
                    'score' => $this->impressions,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_impressions' => [
                    'score' => $this->average_impressions,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'media_value' => [
                    'score' => $this->media_value,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_cpe' => [
                    'score' => $this->average_cpe,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'avg_cpm' => [
                    'score' => $this->average_cpm,
                    'increase' => 3.3,
                    'label' => 'last 30 days'
                ],
                'engagement_rate' => [
                    'score' => $this->engagement_rate,
                    'increase' => 0.24,
                    'label' => 'last 7 days'
                ],
                'interactions' => [
                    'score' => $this->interactions,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_retweet' => [
                    'score' => $this->total_retweets,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'avg_impressions' => [
                    'score' => $this->average_impressions,
                    'increase' => 0.24,
                    'label' => 'last 30 days'
                ],
                'global_rank' => [
                    'score' => 'N/A',
                    'increase' => null,
                    'label' => 'Worldwide'
                ],

                'category_rank' => [
                    'score' => 'N/A',
                    'increase' => null,
                    'label' => $category?->name,
                ],
                'country_rank' => [
                    'score' => 'N/A',
                    'increase' => null,
                    'label' => $this->country?->name
                ],
                'average_tweet_per_contributor' => [
                    'score' => $additional_data->average_tweet_per_contributor ?? 0,
                    'increase' => null,
                    'label' => $default_metrics_label
                ],
                'average_follower_per_contributor' => [
                    'score' => $additional_data->average_follower_per_contributor ?? 0,
                    'increase' => null,
                    'label' => $default_metrics_label
                ],
                'engagements' => [
                    'score' => $additional_data->engagements ?? 0,
                    'increase' => null,
                    'label' => $default_metrics_label
                ],
                'total_retweets' => [
                    'score' => $additional_data->total_retweets ?? 0,
                    'increase' => null,
                    'label' => $default_metrics_label
                ],
            ],
            'brand_safety_level'  => $this->brand_safety_level  ?? 0,
            'most_used_hashtags'  => json_decode($this->most_used_hashatags),
            'best_performing_tweets'  => json_decode($this->best_performing_tweets),
            'quality_audience_score' => 0, //(float)(($this->engagement_rate * $quality_audience) / ($this->interactions ?? 1)) * 100,
            'quality_audience' => $this->quality_audience, // (float)(($this->engagement_rate * $quality_audience) / $this->interactions),
            'reach' => $this->reach, // (float)(($this->engagement_rate * $quality_audience) / $this->interactions),
            'engagement_rate' => number_format((float)$this->engagement_rate, 2, '.', ''),
            'quality_audience' =>  (int)$quality_audience, // $this->quality_audience,
            'total_comments' => $this->total_replies,
            'total_likes' => $this->total_likes,
            'most_used_hashtags' => explode(',', $this->most_used_hashtags),
            'recent_tweets' => $additional_data->recent_tweets ?? [],
            'best_performing_videos' => $additional_data->best_performing_videos ?? [],
            'best_performing_photos' => $additional_data->best_performing_photos ?? [],
            'best_performing_tweets' => $additional_data->best_performing_tweets ?? [],
            'language' => 'English',
            'phone_number' => '+234094614109',
            'email' => 'tomike_a@gmail.com'
        ];
    }
}
