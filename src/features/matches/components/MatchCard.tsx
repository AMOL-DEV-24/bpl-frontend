interface MatchCardProps {
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  status: string;
}

export default function MatchCard({
  teamA,
  teamB,
  date,
  venue,
  status,
}: MatchCardProps) {
  return (
    <div className="match-card">
      <div className="match-status">
        {status}
      </div>

      <h3>
        {teamA} vs {teamB}
      </h3>

      <p>{date}</p>

      <p>{venue}</p>

      <button className="btn-primary">
        Match Center
      </button>
    </div>
  );
}