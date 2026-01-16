<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClubController extends Controller
{
    public function checkEntry(Request $req){

        $req->validate([
            'name' => 'required',
            'age' => 'required|integer|min:18'
        ]);

            return response()->json("Welcome to the club, " .$req->name);
    }
}
