import Image from "next/image";
import { Player } from "../types";

/* =========================================================
   PLAYER CARD
   Purpose : Individual player tile — photo, role badge,
             name, village, and on-hover stats overlay.
             Premium glassmorphism IPL-style card.
             Fields match API shape exactly.
   ========================================================= */

interface PlayerCardProps {
  player: Player;
}

/* ── Role → display label ── */
function formatRole(role: string): string {
  return role; // API already returns human-readable: "All Rounder", "Wicket Keeper"
}

/* ── Role → BEM modifier class for accent colors ── */
function roleModifier(role: string): string {
  const map: Record<string, string> = {
    "Batsman":       "player-card--batsman",
    "Bowler":        "player-card--bowler",
    "All Rounder":   "player-card--allrounder",
    "Wicket Keeper": "player-card--keeper",
  };
  return map[role] ?? "";
}

/* ── Null-safe stat display ── */
function statValue(value: number | null): string {
  if (value === null || value === undefined) return "—";
  return String(value);
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <article className={`player-card ${roleModifier(player?.role)}`}>

      {/* ── Player Photo ── */}
      <div className="player-card-image">
        <Image
          src={player?.imageUrl}
          alt={`${player?.firstName} ${player?.lastName}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="player-card-image-photo"
        />

        {/* ── Role Badge overlaid on image ── */}
        <span className="player-card-role">{formatRole(player?.role)}</span>

        {/* ── Jersey Number Badge ── */}
        <span className="player-card-jersey">#{player?.jerseyNumber}</span>
      </div>

      {/* ── Player Info ── */}
      <div className="player-card-info">
        <h3 className="player-card-name">
          {player?.firstName} {player?.lastName}
        </h3>
        <p className="player-card-village">{player?.village}</p>
      </div>

      {/* ── Stats Overlay — revealed on hover ── */}
      <div className="player-card-overlay">

        <dl className="player-card-overlay-stats">

          <div className="player-card-overlay-stat">
            <dt className="player-card-overlay-stat-label">Runs</dt>
            <dd className="player-card-overlay-stat-value">
              {statValue(player?.stats?.runs)}
            </dd>
          </div>

          <div className="player-card-overlay-stat">
            <dt className="player-card-overlay-stat-label">Wkts</dt>
            <dd className="player-card-overlay-stat-value">
              {statValue(player?.stats?.wickets)}
            </dd>
          </div>

          <div className="player-card-overlay-stat">
            <dt className="player-card-overlay-stat-label">Mat</dt>
            <dd className="player-card-overlay-stat-value">
              {statValue(player?.stats?.matches)}
            </dd>
          </div>

          <div className="player-card-overlay-stat">
            <dt className="player-card-overlay-stat-label">SR</dt>
            <dd className="player-card-overlay-stat-value">
              {statValue(player?.stats?.strikeRate)}
            </dd>
          </div>

          {player?.stats?.economy > 0 && (
            <div className="player-card-overlay-stat">
              <dt className="player-card-overlay-stat-label">Eco</dt>
              <dd className="player-card-overlay-stat-value">
                {player?.stats?.economy}
              </dd>
            </div>
          )}

        </dl>

      </div>

    </article>
  );
}