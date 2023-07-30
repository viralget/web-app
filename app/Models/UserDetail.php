<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if ($this->image == '' || $this->image == null) {
            return;
        }

        return url('storage/user_images/' . $this->image);
    }
}
