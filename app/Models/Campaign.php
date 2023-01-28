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
}
