<?php

namespace App\Imports;

use App\Models\Category;
use App\Models\InfluencerCategory;
use App\Models\InfluencerCountry;
use App\Models\InfluencerLocation;
use App\Models\InfluencerMetrics;
use App\Models\Location;
use App\Models\TwitterInfluencer;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class InfluencersImport implements ToModel, WithHeadingRow
{

        protected $metricsFields = [
        'niche',
'category',
'first_name',
'last_name',
'username',
'page_url',
'gender',
'age',
'followers_count',
'following_count',
'posting_frequency',
'total_image_post',
'total_video_post',
'total_video_views',
'total_likes',
'total_comments',
'total_shares',
'average_likes_per_post',
'average_comments_per_post',
'average_views_per_post',
'average_shares_per_post',
'likes_comments_ratio',
'likes_shares_ratio',
'total_engagement',
'average_engagement',
'engagement_rate',
'video_view_rate',
'comment_rate',
'potential_reach',
'potential_total_impact',
'average_impact_per_post',
'growth_rate',
'quality_audience',
'qas',
'media_value',
'media_value_per_post',
'average_cpm',
'average_cpe',
'average_cpv',
'category_rank',
'country_rank',
'global_rank',
'email',
'phone_number',
'parental_status',
'marital_status',
'education',
'is_verified',
'brands_worked_with',
'ethnicity',
'location',
'previous_30_days_followers_count',
'posts_count'
    ];
    protected $extraFields = [
                 'niche',
                'category',
                'first_name',
                'last_name',
                'page_url',
                'age',
            ];
    protected $platform;
    protected $category;

    public function __construct($platform, $category)
    {
        $this->platform = $platform;
        $this->category = $category;
    }

    public function model(array $row)
    {
        $data = [
            'username' => str_replace('@',  '', $row['username']),
            'full_name' => $row['first_name'] . ' ' . $row['last_name'],
            'followers_count' => $row['followers_count'],
            'following_count' => $row['following_count'],
            'location' => $row['location'],
            'tweets_count' => $row['posts_count'],
            'geocode' => '0,0',
            'bio' => isset($row['bio']) ? $row['bio'] : "Contact: " .$row['email'] . ' '.$row['phone_number'],
            // 'engagement_rate' => $row['engagement_rate'] ? (float)$row['engagement_rate'] * 100 : 0,
            // 'average_likes_per_post' => $row['average_likes_per_post'],
            'email' => $row['email'],
            'phone' => $row['phone_number'],
            'gender' => $row['gender'],
            'platform' => $this->platform,
            'profile_photo_url' => 'null',
            'profile_banner_url' => 'null',
            'is_verified' => $row['is_verified'] == 'yes' ? true : false,
            // 'bio' => $row['description'],
            'profile_url' => $row['page_url'],
            'is_protected' => false,
            'is_featured' => false,
            'account_created_on' => \Carbon\Carbon::now(),
            // 'is_protected' => $row['protected'],
            // 'profile_photo_url' => $row['profile_image_url'],
            // 'profile_banner_url' => $row['profile_banner_url'],
            // 'is_verified' => $row['verified'],
            // 'following_count' => $row['friends_count'],
        ];

        foreach($this->extraFields as $field) {
            $data[$field] = $row[$field];
        };

        if ($row['username']) {
            $influencer = TwitterInfluencer::firstOrCreate($data);

            if ($row['location'] && $influencer) {
                $location = Location::firstOrCreate([
                    'name' => $row['location'],
                    'is_parent' => true
                ]);

                InfluencerLocation::firstOrNew([
                    'influencer_id' => $influencer->id,
                    'location_id' => $location->id,
                ]);

        
                // dd($location, $influencer_location);
            }

            $platform_id = $this->platform == 'twitter' ? 1 : 2; // Temporary. Use DB for future ref

            InfluencerCategory::firstOrCreate([
                'influencer_id' => $influencer->id,
                'platform_id' => $platform_id,
                'category_id' => $this->category,
            ]);

            $metricsData = [];
            
            foreach($this->metricsFields as $field) {
                $metricsData[$field] = $row[$field];
            }

            // dd($metricsData);
            InfluencerMetrics::updateOrCreate([
                'influencer_id' => $influencer->id,
                'platform_id' => $platform_id,
            ], $metricsData);

            return $influencer;
        }
    }
}
