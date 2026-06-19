import Image from "next/image";
import type { Match } from "@/types/matches/matchDetails/matchDetails.type";

interface MatchDetailsHeaderProps {
  match: Match;
}

export default function MatchDetailsHeader({
  match,
}: MatchDetailsHeaderProps) {
  const statusClass = match.status.toLowerCase();

  return (
    <section className="match-details-header">

      {/* MATCH META */}
      <div className="match-details-header-meta">
        <span className="match-details-header-match-no">
          Match {match.matchNo}
        </span>

        <span
          className={`match-details-header-status match-details-header-status--${statusClass}`}
        >
          {match.status}
        </span>
      </div>

      {/* TEAMS */}
      <div className="match-details-header-teams">

        {/* TEAM A */}
        <div className="match-details-header-team">
          <div className="match-details-header-team-logo-wrapper">
            <Image
              src={match.logoA}
              alt={match.teamA}
              width={80}
              height={80}
              className="match-details-header-team-logo"
              priority
            />
          </div>

          <h2 className="match-details-header-team-name">
            {match.teamA}
          </h2>
        </div>

        {/* VS */}
        <div className="match-details-header-vs">VS</div>

        {/* TEAM B */}
        <div className="match-details-header-team">
          <div className="match-details-header-team-logo-wrapper">
            <Image
              src={match.logoB}
              alt={match.teamB}
              width={80}
              height={80}
              className="match-details-header-team-logo"
            />
          </div>

          <h2 className="match-details-header-team-name">
            {match.teamB}
          </h2>
        </div>

      </div>

      {/* VENUE */}
      <div className="match-details-header-venue">
        📍 {match.venue}
      </div>

    </section>
  );
}