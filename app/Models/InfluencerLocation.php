<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfluencerLocation extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $table = "influencer_location";
    public $timestamps = false;
}
