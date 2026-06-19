import Link from "next/link";

type MatchStatus =
  | "Completed"
  | "Live"
  | "Upcoming";

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
    <article
      className={`match-card match-card-${status.toLowerCase()}`}
    >
      <div className="match-card-header">
        <span className="match-card-match-no">
          Match {matchNo}
        </span>

        <span
          className={`match-card-status match-card-status-${status.toLowerCase()}`}
        >
          {status === "Live" && (
            <span className="match-card-live-dot" />
          )}

          {status}
        </span>
      </div>

      <div className="match-card-teams">
        <div className="match-card-team">
          <div className="match-card-team-logo-wrap">
            <img
              src={logoA}
              alt={teamA}
              className="match-card-team-logo"
            />
          </div>

          <span className="match-card-team-name">
            {teamA}
          </span>
        </div>

        <div className="match-card-vs">
          VS
        </div>

        <div className="match-card-team">
          <div className="match-card-team-logo-wrap">
            <img
              src={logoB}
              alt={teamB}
              className="match-card-team-logo"
            />
          </div>

          <span className="match-card-team-name">
            {teamB}
          </span>
        </div>
      </div>

      <div className="match-card-divider" />

      <dl className="match-card-details">
        <div className="match-card-detail">
          <dt className="match-card-detail-label">
            📍 Venue
          </dt>

          <dd className="match-card-detail-value">
            {venue}
          </dd>
        </div>
      </dl>

      <Link
        href={`/matches/${matchNo}`}
        className="match-card-btn"
      >
        {status === "Live" && "Watch Live →"}

        {status === "Upcoming" &&
          "Match Info →"}

        {status === "Completed" &&
          "View Result →"}
      </Link>
    </article>
  );
}