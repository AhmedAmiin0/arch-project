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
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => [
                'src' => $this->getFirstMediaUrl('avatar') == '' ? asset('download.png') : $this->getFirstMediaUrl('avatar'),
                'alt' => $this->getFirstMedia('avatar')->name ?? 'avatar',
                'id' => $this->getFirstMedia('avatar')->id ?? '',
            ],
        ];
    }
}
