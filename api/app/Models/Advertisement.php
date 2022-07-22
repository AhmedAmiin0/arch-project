<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Advertisement extends Model
{
    use HasFactory, Searchable;
    protected $fillable = [
        'title',
        'message',
        'subject',
    ];
    public function toSearchableArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title ?? '',
            'subject' => $this->subject ?? '',
            'message' => $this->message ?? '',
        ];
    }
}
