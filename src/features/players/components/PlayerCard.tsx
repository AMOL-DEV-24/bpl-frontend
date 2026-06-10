import { Player } from "../types";

interface Props {
  player: Player;
}

export default function PlayerCard({
  player,
}: Props) {
  return (
    <div className="player-card">
      <img
        src={player.image}
        alt={player.name}
      />

      <div className="player-content">
        <h3>{player.name}</h3>

        <span>{player.role}</span>
      </div>

      <div className="player-overlay">
        <h4>{player.name}</h4>

        <p>Runs: {player.runs}</p>

        <p>Wickets: {player.wickets}</p>

        <p>
          Strike Rate:
          {player.strikeRate}
        </p>

        <p>
          Matches:
          {player.matches}
        </p>

        <p>
          Village:
          {player.village}
        </p>
      </div>
    </div>
  );
}