<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CampaignReport extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $appends = ['report_file_url'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getReportFileUrlAttribute()
    {
        if ($this->report_file == '' || $this->report_file == null) {
            return;
        }

        return url('storage/campaign_report_files/' . $this->report_file);
    }
}
