<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    protected $fillable = [
        'title', 'description', 'creator_id'
    ];

    public static function boot()
    {
        parent::boot();

        static::addGlobalScope('memberCount', function ($builder) {
            $builder->withCount('members');
        });
    }

    public function creator()
    {
        return $this->belongsTo(User::class);
    }

    public function members()
    {
        return $this->belongsToMany(User::class, 'leaderboards_member', 'leaderboard_id', 'member_id')->withPivot('points');
    }

    public function addMembers($members = [])
    {
        collect($members)->map(function ($member) {
            $this->members()->attach($member, [ 'points' => 0 ]);
        });

        $this->save();
    }

    public function removeMembers($members = [])
    {
        collect($members)->map(function ($member) {
            $this->members()->detach($member);
        });

        $this->save();
    }
}