/* =========================================================
   VIEW SQUAD - TYPES
   ---------------------------------------------------------
   Purpose : Shared shape for squad data. Used by mock data
             now, and by the API response later — keep this
             in sync with whatever the API returns.
========================================================= */

export type PlayerRole = "Batter" | "WK-Batter" | "All-Rounder" | "Bowler";

export interface Player {
  id: number;
  name: string;
  role: PlayerRole;
  jerseyNumber?: number;
  isCaptain?: boolean;
  photo?: string; // leave empty until real player photos exist
}

export interface TeamSquad {
  teamId: number;
  teamName: string;
  teamImage: string;

  captain: string;

  owner?: string;

  achievement?: string;

  coach?: string;

  venue?: string;

  players: Player[];
}