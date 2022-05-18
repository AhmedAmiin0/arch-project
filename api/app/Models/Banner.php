<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Banner extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'title',
        'subtitle',
        'slug',
        'model_type',
        'model_id'
    ];
    protected $hidden = ['created_at', 'updated_at'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('banner')->singleFile();
    }

    public function model()
    {
        $this->morphTo();
    }

    public function project()
    {
        return $this->belongsTo(Project::class, 'slug', 'slug');
    }
}
