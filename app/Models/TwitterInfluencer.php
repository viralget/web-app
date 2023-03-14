<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TwitterInfluencer extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function categories()
    {
        return $this->hasManyThrough(Category::class, InfluencerCategory::class, 'influencer_id', 'id', 'id', 'category_id');
    }


    public function tweets()
    {
        return $this->hasMany(TwitterPost::class, 'user_id', 'twitter_id');
    }


    public function engagementRate()
    {

        $followers = $this->followers_count;
        $likes = $this->tweets()->sum('favorite_count');
        $retweets = $this->tweets()->sum('retweet_count');

        // dd($followers, $likes, $retweets);

        $engagementRate = ($followers === 0) ? 0 : ($likes  + $retweets) / ($followers ?? 0);
        $engagementRate = round($engagementRate, 2);


        return $engagementRate;
    }

    public function interactions()
    {
        return $likes = $this->tweets()->sum('favorite_count') * 5;
    }
}
