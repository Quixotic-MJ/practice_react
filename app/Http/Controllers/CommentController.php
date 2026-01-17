<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $req) {
        $words = Comment::listOfBadWord();
        $comment = strtolower($req->text);

        foreach ($words as $word){
            if (str_contains($comment, $word)){
                return response()->json([
                    'status' => 'rejected',
                    'text' => 'Please be nice!'
                ]);
            }
        }   

        return response()->json([
            'status' => 'approved',
            'text' => $comment
        ]);



        
    }
}
