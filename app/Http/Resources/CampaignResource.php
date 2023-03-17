<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CampaignResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        // $influencers = json_decode($this->influencers);
        return [
            'id' => $this->id,
            'title' => $this->title,
            'created_at' => $this->created_at->toDateTimeString(),
            'influencers' => InfluencerResource::collection($this->influencers()),
        ];
    }
}
