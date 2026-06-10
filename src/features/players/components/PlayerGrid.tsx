import PlayerCard from "./PlayerCard";
import { Player } from "../types";

interface Props {
  players: Player[];
}

export default function PlayerGrid({
  players,
}: Props) {
  return (
    <div className="players-grid">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
        />
      ))}
    </div>
  );
}