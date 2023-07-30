<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCampaignSearchResource extends JsonResource
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
            'keyword' => $this->search?->keyword,
            'created_at' => $this->search?->created_at,
            'updated_at' => $this->search?->updated_at,
            'result' => $this->search?->result,
        ];
    }
}
