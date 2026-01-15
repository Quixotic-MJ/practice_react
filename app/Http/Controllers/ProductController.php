<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function show(int $id){
        $price = Product::findPrice($id);

        return response()->json($price);
    }
}
