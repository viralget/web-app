<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {


        $data = [
            'id' => $this->id,
            'invoice_id' => 'VRL-000' . $this->id,
            'items' => json_decode($this->items, true),
            'amount' => $this->amount,
            'currency_amount' => $this->currency . ' ' . $this->amount,
            'total_amount' => $this->total_amount,
            'currency_total_amount' => $this->currency . ' ' . $this->total_amount,
            'tax' => $this->tax,
            'status' => $this->status,
            'currency' => $this->currency,
            'description' => $this->description,
            'address' => $this->user->first_name . ' ' . $this->user->last_name,
            'phone' => $this->user->phone,
            'created_at' => $this->created_at,
        ];

        return $data;
    }
}
