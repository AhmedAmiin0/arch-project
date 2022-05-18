<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Home extends model implements hasmedia
{
    use hasfactory, interactswithmedia, HasTranslations;

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'keywords',
        'slug',
        'sentence_title',
        'sentence_subtitle',
        'sentence_description'
    ];
    public $translatable = [
        'title',
        'subtitle',
        'description',
        'slug',
        'sentence_title',
        'sentence_subtitle',
        'sentence_description'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function banners()
    {
        return $this->morphMany(banner::class, 'model');
    }
}
