<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InfluencerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'full_name' => $this->full_name,
            'engagement_rate' => 0, //$this->engagementRate(), // TODO: engagement_rate and interactions should be db fields, updated daily as CRON jobs to boost performance
            'interactions' => 0, // $this->interactions(),
            'followers_count' => $this->followers_count,
            'profile_photo_url' => $this->profile_photo_url,
            'profile_banner_url' => $this->profile_banner_url,
            'profile_url' => $this->profile_url,
            // 'bio' => $this->details ? $this->details->bio : null,
        ];
    }
}
