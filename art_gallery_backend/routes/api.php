
<?php 
use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\UserController;

Route::get('/artworks', [ArtworkController::class, 'index']);
Route::get('/artworks/{id}', [ArtworkController::class, 'show']);
Route::put('/artworks/{id}', [ArtworkController::class, 'update']);
Route::delete('/artworks/{id}', [ArtworkController::class, 'destroy']);

Route::get('/artists', [ArtistController::class, 'index']);
Route::get('/artists/{id}', [ArtistController::class, 'show']);

Route::get('/user', [UserController::class, 'user']);

Route::post('/upload', [UploadController::class, 'store']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

