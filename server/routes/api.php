<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::post('recover', 'AuthController@recover');
Route::get('password/reset', 'AuthController@reset');

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::get('logout', 'AuthController@logout');

    Route::resource('leaderboard', 'LeaderboardController')->except(['edit', 'create']);
    Route::get('leaderboard/{leaderboardId}/members', 'LeaderboardController@membersIndex');
    Route::put('leaderboard/{leaderboardid}/members', 'LeaderboardController@updateMembers');
});
