<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public static function listOfBadWord(){
        return ['bad', 'ugly', 'stupid'];
    }
}
