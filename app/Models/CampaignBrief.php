<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CampaignBrief extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $appends = ['logo_url', 'mood_board_url'];

    public function getLogoUrlAttribute()
    {
        if ($this->logo == '' || $this->logo == null) {
            return;
        }

        return url('storage/campaign_brief_logos/' . $this->logo);
    }

    public function getMoodBoardUrlAttribute()
    {
        if ($this->mood_board == '' || $this->mood_board == null) {
            return;
        }

        return url('storage/campaign_brief_moodBoards/' . $this->mood_board);
    }


}
