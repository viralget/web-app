<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCampaignSearch extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = ['created_at'];

    public function search()
    {
        return $this->hasOne(CampaignSearch::class, 'id', 'campaign_search_id');
    }
}
