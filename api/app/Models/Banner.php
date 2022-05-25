<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Banner extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Searchable,HasTranslations;

    protected $fillable = [
        'title',
        'subtitle',
        'url',
    ];
    public $translatable = ['title', 'subtitle'];
    protected $hidden = ['created_at', 'updated_at'];
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('banner')->singleFile();
    }
}
