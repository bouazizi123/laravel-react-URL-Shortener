<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class URL extends Model
{
    use HasFactory;

    protected $fillable = ['long_url', 'short_code'];

    // Add a relationship to track clicks (you may need to create another table for click records)
    public function clicks()
    {
        return $this->hasMany(Click::class);
    }
}
