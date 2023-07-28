<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\URLController;

Route::post('/url', [URLController::class, 'store']);

Route::get('/r/{shortCode}', [URLController::class, 'redirectToLongURL'])->name('redirect');

Route::get('/url', [URLController::class, 'index']);
