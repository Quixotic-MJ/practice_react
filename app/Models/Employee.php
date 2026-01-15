<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    public static function getEmployee()
    {
        return [
            ['id' => 1, 'name' => 'Alex', 'role' => 'Developer'],
            ['id' => 2, 'name' => 'Sarah', 'role' => 'Designer'],
            ['id' => 3, 'name' => 'Mike', 'role' => 'Manager'],
        ];
    }
}
