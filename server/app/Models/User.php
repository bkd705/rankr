<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['gravatar'];

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getGravatarAttribute()
    {
        $hash = md5(strtolower($this->email));

        return 'https://gravatar.com/avatar/' . $hash . '.jpg?d=retro';
    }

    public function leaderboards()
    {
        return $this->belongsToMany(\App\Models\Leaderboard::class, 'leaderboards_player', 'player_id', 'leaderboard_id')->using(Player::class)->withPivot('points');
    }

    public function matches()
    {
        $this->hasMany(Match::class);
    }
}
