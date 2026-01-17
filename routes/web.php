<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\CommentController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'index']);

Route::get('/employees', [EmployeeController::class, 'getAllEmployees']);

Route::get('/product/{id}', [ProductController::class, 'show']);

Route::post('/login', [UserController::class, 'login']);

Route::post('/enter', [ClubController::class, 'checkEntry']);

Route::post('/comment', [CommentController::class, 'store']);
