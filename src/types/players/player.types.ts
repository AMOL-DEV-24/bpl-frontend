/* =========================================================
   PLAYER TYPES
   Matches exact API response shape from /players endpoint.
   ========================================================= */

/* ── Role — matches API string values exactly ── */
export type PlayerRole =
  | "Batsman"
  | "Bowler"
  | "All Rounder"
  | "Wicket Keeper";

/* ── Player Status ── */
export type PlayerStatus = "approved" | "pending";

/* ── Nested stats object from API ── */
export interface PlayerStats {
  matches: number | null;
  runs: number | null;
  wickets: number | null;
  strikeRate: number | null;
  economy: number;
  catches: number;
}

/* ── Full Player shape matching API response ── */
export interface Player {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  village: string;
  age: number;
  jerseyNumber: string;
  role: PlayerRole;
  battingStyle: string;
  bowlingStyle: string;
  experience: string | null;
  about: string;
  imageUrl: string;
  paymentStatus: string;
  paymentId: string | null;
  orderId: string;
  status: PlayerStatus;
  stats: PlayerStats;
  createdAt: string;
  updatedAt: string;
}

/* ── API Meta (pagination) ── */
export interface PlayersMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/* ── Full API Response wrapper ── */
export interface PlayersApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  meta: PlayersMeta;
  data: Player[];
}