<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class Corporate extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Searchable;

    protected $fillable = ['name', 'url'];

    // public function registerMediaCollections(): void
    // {
    //     $this->addMediaCollection('corporate_logo')->singleFile();
    //     $this->addMediaConversion('corporate_logo')
    //         ->width(100)
    //         ->height(100)
    //         ->performOnCollections('corporate_logo');
    //     ;
    // }
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('corporate_logo')->singleFile();
    }
}
