<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'name'=> $this->name ?? '',
            'email'=> $this->email ?? '',
            'message'=> $this->message ?? '',
            'phone'=> $this->phone ?? '',
            'status'=> $this->status,
        ];
    }
}
