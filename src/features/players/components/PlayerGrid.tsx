import PlayerCard from "./PlayerCard";
import { Player } from "../types";

/* =========================================================
   PLAYER GRID
   Purpose : Responsive grid of PlayerCard components.
             Shows empty state when no players match filter.
   ========================================================= */

interface PlayerGridProps {
  players: Player[];
}

export default function PlayerGrid({ players }: PlayerGridProps) {

  /* ── Empty State ── */
  if (!players?.length) {
    return (
      <section className="player-grid-empty">
        <span className="player-grid-empty-icon" aria-hidden="true">🏏</span>
        <h3 className="player-grid-empty-title">No Players Found</h3>
        <p className="player-grid-empty-text">
          No players match the selected filter at the moment.
        </p>
      </section>
    );
  }

  return (
    <section className="player-grid">

      {/* ── Player Cards ── */}
      <ul className="player-grid-list">
        {players?.map((player) => (
          <li key={player?._id} className="player-grid-list-item">
            <PlayerCard player={player} />
          </li>
        ))}
      </ul>

    </section>
  );
}