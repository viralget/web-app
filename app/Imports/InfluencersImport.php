<?php

namespace App\Imports;


use App\Models\TwitterInfluencer;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;


class InfluencersImport implements ToModel, WithHeadingRow
{

    public function model(array $row)
    {
        return new TwitterInfluencer([
            'username' => $row['handle'],
            'full_name' => $row['first_name'] . ' ' . $row['last_name'],
            'profile_photo_url' => $row['profile_image_url'],
            'profile_banner_url' => $row['profile_banner_url'],
            'is_verified' => $row['verified'],
            'followers_count' => $row['followers_count'],
            'following_count' => $row['friends_count'],
            'location' => $row['location'],
            'bio' => $row['description'],
            'profile_url' => $row['description'],
            'account_created_on' => \Carbon\Carbon::parse($row['created_at']),
            'is_protected' => $row['protected'],
        ]);
    }
}
