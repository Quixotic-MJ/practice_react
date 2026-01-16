<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    public static function getFakeUser() {
        return [
            ['id' => 1, 'name' => 'John Doe', 'role' => 'Admin'],
            ['id' => 2, 'name' => 'Jane Smith', 'role' => 'Editor'],
            ['id' => 3, 'name' => 'Bob Builder', 'role' => 'Guest'],
        ];
    }
    
    public static function userAccounts() {
        return [
            ['id' => 1, 'name' => 'John Doe', 'role' => 'Admin', 'email' => 'sample1@example.com', 'password' => 'password1'],
            ['id' => 2, 'name' => 'Jane Smith', 'role' => 'Editor', 'email' => 'sample2@example.com', 'password' => 'password2'],
            ['id' => 3, 'name' => 'Bob Builder', 'role' => 'Guest', 'email' => 'sample3@example.com', 'password' => 'password3'],
        ];
    }

    public static function validate($email, $password){
        $users = self::userAccounts();

        foreach ($users as $user) {
            if ($user['email'] == $email && $user['password'] == $password) {
                return true;
            } 
        }

        return false;
    }
}
