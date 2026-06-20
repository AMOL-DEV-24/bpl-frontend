/**
 * @file        championsData.ts
 * @description BPL Champions — Season records static data
 * @project     Bhokardan Premier League (BPL)
 */

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface ChampionStats {
  wins?: number;
  matches?: number;
  winPercentage?: number;
}

export interface Champion {
  id: number;
  season: number;
  year: number;
  teamName: string;
  captain: string;
  squadSize: number;
  championships: number;
  logo: string;
  description: string;
  runnerUp?: string;
  stats?: ChampionStats;
  gallery?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA — named lowercase export to match import in Champions.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const champions: Champion[] = [
  {
    id: 1,
    season: 1,
    year: 2026,
    teamName: "Sadguru Lions",
    captain: "Aamir Mujawar",
    squadSize: 13,
    championships: 1,
    logo: "/assets/images/teams/Sadguru Lions.png",
    description:
      "Sadguru Lions became the first-ever champions of the Bhokardan Premier League, establishing the foundation of BPL history under the leadership of captain Aamir Mujawar.",
  },
];