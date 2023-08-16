<?php

namespace App\Imports;

use App\Models\Category;
use App\Models\InfluencerCategory;
use App\Models\InfluencerCountry;
use App\Models\InfluencerLocation;
use App\Models\Location;
use App\Models\TwitterInfluencer;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class InfluencersImport implements ToModel, WithHeadingRow
{

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
            'username' => str_replace('@',  '', $row['handle']),
            'full_name' => $row['first_name'] . ' ' . $row['last_name'],
            'followers_count' => $row['followers_count'] ? (float)(str_replace("K", '', $row['followers_count']) * 1000) : 0,
            'location' => $row['location'],
            'engagement_rate' => $row['engagement_rate'] ? (float)$row['engagement_rate'] * 100 : 0,
            'average_likes_per_post' => $row['average_likes_per_post'],
            'email' => $row['email'],
            'phone' => $row['phone'],
            'gender' => $row['gender'],
            'platform' => $this->platform,
            // 'bio' => $row['description'],
            // 'profile_url' => $row['description'],
            // 'account_created_on' => \Carbon\Carbon::now(),
            // 'is_protected' => $row['protected'],
            // 'profile_photo_url' => $row['profile_image_url'],
            // 'profile_banner_url' => $row['profile_banner_url'],
            // 'is_verified' => $row['verified'],
            // 'following_count' => $row['friends_count'],
        ];

        if ($row['handle']) {
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

            return $influencer;
        }
    }
}
