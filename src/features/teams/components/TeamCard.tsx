interface TeamCardProps {
  name: string;
  captain: string;
  players: number;
}

export default function TeamCard({
  name,
  captain,
  players,
}: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-card__logo">
        🏏
      </div>

      <h3>{name}</h3>

      <p>
        <strong>Captain:</strong> {captain}
      </p>

      <p>
        <strong>Players:</strong> {players}
      </p>

      <button className="btn-primary">
        View Squad
      </button>
    </div>
  );
}