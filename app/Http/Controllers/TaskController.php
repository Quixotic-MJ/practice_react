<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $req){
        return response()->json([
            'id' => rand(100, 999),
            'title' => $req->title
        ]);
    }

    public function destroy ($id) {
        return response()->json([
            'status' => 'deleted',
            'message' => "task $id has been deleted"
        ]);
    }
}
