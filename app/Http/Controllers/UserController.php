<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index() {
        
        $users = User::getFakeUser();
        
        return response()->json($users);
    }

    public function login(Request $req) {
        $email = $req->email;
        $password = $req->password;
        $isValid = User::validate($email, $password);

        return response()->json($isValid);
    }


}
