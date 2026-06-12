/* =========================================================
   MATCH CARD
   Purpose : Displays a single match fixture with teams,
             date, venue, status badge, and CTA button.
   ========================================================= */

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
    <article className="match-card">

      {/* ── Status Badge ── */}
      <span className="match-card-status">{status}</span>

      {/* ── Teams Block ── */}
      <div className="match-card-teams">
        <span className="match-card-team">{teamA}</span>
        <span className="match-card-vs">VS</span>
        <span className="match-card-team">{teamB}</span>
      </div>

      {/* ── Match Details ── */}
      <dl className="match-card-details">
        <div className="match-card-detail">
          <dt className="match-card-detail-label">Date</dt>
          <dd className="match-card-detail-value">{date}</dd>
        </div>
        <div className="match-card-detail">
          <dt className="match-card-detail-label">Venue</dt>
          <dd className="match-card-detail-value">{venue}</dd>
        </div>
      </dl>

      {/* ── CTA Button ── */}
      <button className="match-card-button" type="button">
        Match Center
      </button>

    </article>
  );
}