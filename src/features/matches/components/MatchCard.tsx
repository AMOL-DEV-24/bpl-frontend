/* =========================================================
   MATCH CARD
   Purpose : Displays a single match fixture with team
             logos, names, venue, status badge, CTA.
========================================================= */

type MatchStatus = "Completed" | "Live" | "Upcoming";

interface MatchCardProps {
  matchNo: number;
  teamA: string;
  teamB: string;
  logoA: string;
  logoB: string;
  venue: string;
  status: MatchStatus;
}

export default function MatchCard({
  matchNo,
  teamA,
  teamB,
  logoA,
  logoB,
  venue,
  status,
}: MatchCardProps) {
  return (
    <article className={`match-card match-card--${status.toLowerCase()}`}>

      {/* ── Match Number + Status Badge ── */}
      <div className="match-card__header">
        <span className="match-card__match-no">Match {matchNo}</span>
        <span className={`match-card__status match-card__status--${status.toLowerCase()}`}>
          {status === "Live" && <span className="match-card__live-dot" />}
          {status}
        </span>
      </div>

      {/* ── Teams Block ── */}
      <div className="match-card__teams">

        {/* Team A */}
        <div className="match-card__team">
          <div className="match-card__team-logo-wrap">
            <img
              src={logoA}
              alt={teamA}
              className="match-card__team-logo"
            />
          </div>
          <span className="match-card__team-name">{teamA}</span>
        </div>

        {/* VS */}
        <div className="match-card__vs">
          <span>VS</span>
        </div>

        {/* Team B */}
        <div className="match-card__team">
          <div className="match-card__team-logo-wrap">
            <img
              src={logoB}
              alt={teamB}
              className="match-card__team-logo"
            />
          </div>
          <span className="match-card__team-name">{teamB}</span>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="match-card__divider" />

      {/* ── Match Details ── */}
      <dl className="match-card__details">
        <div className="match-card__detail">
          <dt className="match-card__detail-label">📍 Venue</dt>
          <dd className="match-card__detail-value">{venue}</dd>
        </div>
      </dl>

      {/* ── CTA Button ── */}
      <button className="match-card__btn" type="button">
        {status === "Live"      && "Watch Live →"}
        {status === "Upcoming"  && "Match Info →"}
        {status === "Completed" && "View Result →"}
      </button>

    </article>
  );
}