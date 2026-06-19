export interface Batter {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
}

export interface Bowler {
  name: string;
  overs: number;
  runs: number;
  wickets: number;
}

export interface Innings {
  team: string;
  score: string;
  overs: string;

  batting: Batter[];
  bowling: Bowler[];
}

export interface Match {
  matchNo: number;

  teamA: string;
  teamB: string;

  logoA: string;
  logoB: string;

  venue: string;

  status: "Upcoming" | "Live" | "Completed";

  date?: string;
  time?: string;

  tossWinner?: string;
  electedTo?: string;

  umpire1?: string;
  umpire2?: string;
  referee?: string;

  playingXI?: {
    teamA: string[];
    teamB: string[];
  };

  scorecard?: {
    firstInnings: Innings;
    secondInnings?: Innings;
  };

  result?: {
    winner: string;
    winBy: string;
    playerOfTheMatch: string;
    summary: string;
  };
}