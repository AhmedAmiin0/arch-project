<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class CorporateSection extends Model
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
    protected $hidden = [
        'created_at',
        'updated_at',
        'id'
    ];
    // public function corporate()
    // {
    //     return $this->hasMany(Corporate::class, 'corporate_section_id');
    // }
}
