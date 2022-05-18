<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ProjectSentence extends Model
{
    use HasFactory,HasTranslations;
    protected $fillable = [
        'title',
        'subtitle',
        'description'
    ];
    public $translatable = [
        'title',
        'subtitle',
        'description'
    ];
}
