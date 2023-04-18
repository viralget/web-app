<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    public $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if ($this->image == '' || $this->image == null) {
            return;
        }

        return url('user_images/'.$this->image);
    }
}
