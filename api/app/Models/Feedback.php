<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Feedback extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Searchable, HasTranslations;

    protected $fillable = ['name', 'position', 'feedback', 'visible'];
    public $translatable = ['name', 'position', 'feedback'];
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('client_photo')->singleFile();
    }
}
