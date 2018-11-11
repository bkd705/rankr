<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MatchService;

class LeaderboardMatchesController extends Controller
{
    private $matchService;

    public function __construct(MatchService $matchService)
    {
        $this->matchService = $matchService;
    }

    public function matches($leaderboardId)
    {
        $matches = $this->matchService->findByLeaderboardId($leaderboardId);

        return response()->json($matches);
    }
}
