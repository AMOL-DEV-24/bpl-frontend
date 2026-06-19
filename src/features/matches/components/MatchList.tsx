import MatchCard from "./MatchCard";

/* =========================================================
   MATCH LIST
   Purpose : Renders the full grid of all BPL 2026 matches
             with correct fixtures from official schedule.
========================================================= */

import matchesData from "@/data/matches/matchesData";

/* ── Filter helpers ── */
const liveMatches      = matchesData.filter((m) => m.status === "Live");
const upcomingMatches  = matchesData.filter((m) => m.status === "Upcoming");
const completedMatches = matchesData.filter((m) => m.status === "Completed");

export default function MatchList() {
  return (
    <section className="match-list">
      <div className="match-list-container">

        {/* ── Section Heading ── */}
        <div className="match-list-header">
          <h2 className="match-list-title">Match Schedule</h2>
          <span className="match-list-count">{matchesData.length} Matches</span>
        </div>

        {/* ── Live ── */}
        {liveMatches.length > 0 && (
          <div className="match-list-group">
            <h3 className="match-list-group-title match-list-group-title--live">
              🔴 Live
            </h3>
            <ul className="match-list-grid">
              {liveMatches.map((match) => (
                <li key={match.matchNo} className="match-list-item">
                  <MatchCard {...match} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Upcoming ── */}
        {upcomingMatches.length > 0 && (
          <div className="match-list-group">
            <h3 className="match-list-group-title match-list-group-title--upcoming">
              🕐 Upcoming
            </h3>
            <ul className="match-list-grid">
              {upcomingMatches.map((match) => (
                <li key={match.matchNo} className="match-list-item">
                  <MatchCard {...match} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Completed ── */}
        {completedMatches.length > 0 && (
          <div className="match-list-group">
            <h3 className="match-list-group-title match-list-group-title--completed">
              ✅ Completed
            </h3>
            <ul className="match-list-grid">
              {completedMatches.map((match) => (
                <li key={match.matchNo} className="match-list-item">
                  <MatchCard {...match} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Footer note ── */}
        <p className="match-list-footer">
          Top 4 teams qualify for Semi-Finals · Total 21 Matches
        </p>

      </div>
    </section>
  );
}