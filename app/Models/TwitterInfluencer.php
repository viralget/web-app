<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TwitterInfluencer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function engagementRate()
    {
        return 0;
    }

    public function interactions()
    {
        return 0;
    }
}
