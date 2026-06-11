import PlayerCard from "./PlayerCard";
import { Player } from "../types";

interface Props {
  players: Player[];
}

export default function PlayerGrid({
  players,
}: Props) {
  if (!players.length) {
    return (
      <div className="players-empty">
        <h3>No Players Found</h3>

        <p>
          No players match the selected
          filter at the moment.
        </p>
      </div>
    );
  }

  return (
    <section className="players-grid-section">
      <div className="players-grid">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </section>
  );
}