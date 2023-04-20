<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfluencerList extends Model
{
    use HasFactory;

    public function influencers()
    {
        return $this->hasManyThrough(TwitterInfluencer::class, InfluencerListsTwitterInfluencer::class, 'influencer_list_id', 'id', 'id', 'twitter_influencer_id');
    }

}
