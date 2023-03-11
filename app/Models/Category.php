<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\influencer;

class Category extends Model
{
    use HasFactory;




    function influencer(){

        return $this->belongsTo(influencer::class);
     }

}
