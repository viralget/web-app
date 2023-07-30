<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'name' => $this->first_name . ' ' . $this->last_name,
            'email' => $this->email,
            'is_deactivated' => $this->is_deactivated,
            'phone' => $this->details ? $this->details->phone : null,
            'location' => $this->details ? $this->details->location : null,
            'linkedin_url' => $this->details ? $this->details->linkedin_url : null,
            'bio' => $this->details ? $this->details->bio : null,
            // $this->userProfilingCountLeft(),
            'available_profiling_count' => 0, // $this->userProfilingCountLeft(),
            'image_url' => $this->info?->image_url
        ];
    }
}
