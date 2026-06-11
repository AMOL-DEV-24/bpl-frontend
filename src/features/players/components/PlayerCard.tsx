import { Player } from "../types";

interface Props {
  player: Player;
}

export default function PlayerCard({
  player,
}: Props) {
  return (
    <article className="player-card">

      <div className="player-image">
        <img
          src={player.image}
          alt={player.name}
        />
      </div>

      <div className="player-content">

        <span className="player-role">
          {player.role.replace("_", " ")}
        </span>

        <h3>{player.name}</h3>

        <p>{player.village}</p>

      </div>

      <div className="player-overlay">

        <div>
          <strong>{player.runs}</strong>
          <span>Runs</span>
        </div>

        <div>
          <strong>{player.wickets}</strong>
          <span>Wickets</span>
        </div>

        <div>
          <strong>{player.matches}</strong>
          <span>Matches</span>
        </div>

      </div>

    </article>
  );
}