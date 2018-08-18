<?php

namespace App\Listeners;

use App\Events\MatchCompleted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateLeaderboardPoints
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  MatchCompleted  $event
     * @return void
     */
    public function handle(MatchCompleted $event)
    {
        $leaderboard = $event->match->leaderboard;
        $winner = $leaderboard->members()->where('member_id', $event->match->winner_id)->first()->pivot;
        $loser = $leaderboard->members()->where('member_id', $event->match->loser_id)->first()->pivot;

        $winnerRank = $winner->getRank();
        $loserRank = $loser->getRank();

        $sorted = collect([$winnerRank, $loserRank])->sort()->values()->all();
        $diff = $sorted[1] - $sorted[0] || 0;

        $winner->increasePoints($diff * $leaderboard->win_multiplier);
        $loser->decreasePoints($diff * $leaderboard->loss_multiplier);
    }
}
