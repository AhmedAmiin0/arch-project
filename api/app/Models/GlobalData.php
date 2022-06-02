<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\HasTranslations;

class GlobalData extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, HasTranslations;

    protected $fillable = [
        'facebook_link',
        'twitter_link',
        'instagram_link',
        'youtube_link',
        'address',
        'phone',
        'email',
        'name',
        'message',
        'email_app_secret'
    ];
    public $translatable = [
        'message',
        'name'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
        'id'
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('logo')->singleFile();
        // $this->addMediaConversion('logo')
        //     ->format('png')
        //     ->width(100)->height(100);
        // $this->addMediaConversion('ico')
        //     ->width(32)->height(32)->format('png');
    }
}
