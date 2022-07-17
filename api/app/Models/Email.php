<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Email extends Model
{
    use HasFactory,Searchable;
    protected $fillable = ['email'];
    protected $hidden = ['created_at', 'updated_at'];
}
