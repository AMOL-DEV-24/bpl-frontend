export type PlayerRole =
  | "BATSMAN"
  | "BOWLER"
  | "ALL_ROUNDER"
  | "WICKET_KEEPER";

export interface Player {
  id: number;
  name: string;
  image: string;
  role: PlayerRole;

  matches: number;

  runs: number;
  wickets: number;

  strikeRate: number;
  economy: number;

  village: string;
}