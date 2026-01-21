<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function update(Request $req) {
        $validated = $req->validate([
            'name' => 'min:3',
            'role' => 'nullable',
            'bio' => 'max:200'
        ]);

        return response()->json([
            'message' => 'success',
            'user' => $validated            
        ]);
    }
}
