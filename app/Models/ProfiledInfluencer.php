<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfiledInfluencer extends Model
{
    use HasFactory;



   public   function  user(){
       return  $this->belongsTo(User::class, 'user_id');
    }

    public function influencer(){
        return  $this->belongsTo(TwitterInfluencer::class, 'influencer_id');
    }
}