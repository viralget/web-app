<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function influencers()
    {
        $influencers = json_decode($this->influencers);

        $_influencers = [];

        foreach ($influencers as $account) {
            // dd($account);
            $acc = TwitterInfluencer::where('username', $account)->first();

            if ($acc) {
                $_influencers[] = $acc;
            }
        }

        return collect($_influencers);
    }


    public function qas()
    {
        $total = 0;

        foreach ($this->influencers() as $influencer) {
            $total += $influencer->followers_count;
        }

        return $total;
    }

    public function qat()
    {
        $total = 0;

        foreach ($this->influencers() as $influencer) {
            $total += $influencer->followers_count;
        }

        return $total;
    }

    public function impressions()
    {
        $total_er = 0;

        foreach ($this->influencers() as $influencer) {
            $total_er += $influencer->interactions();
        }

        return $total_er;
    }


    public function reach()
    {
        $total_er = 0;

        foreach ($this->influencers() as $influencer) {
            $total_er += $influencer->interactions();
        }

        return $total_er;
    }

    public function reachablility()
    {
        $total_er = 0;

        foreach ($this->influencers() as $influencer) {
            $total_er += $influencer->engagementRate();
        }

        return $total_er;
    }

    public function er()
    {
        $total_er = 0;

        foreach ($this->influencers() as $influencer) {
            $total_er += $influencer->engagementRate();
        }

        return $total_er;
    }
}
