<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public static function findPrice(int $id) {
        if ($id == 1) {
            return 100;
        } else if ($id == 2) {
            return 200;
        } else {
            return 0;
        }
    }
}
