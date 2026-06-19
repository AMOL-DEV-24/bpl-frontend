/* =========================================================
   MATCH DETAILS PLAYING XI
   Purpose : Displays Playing XI for both teams
========================================================= */

import type { Match } from "@/types/matches/matchDetails/matchDetails.type";

interface MatchDetailsPlayingXIProps {
  match: Match;
}

const DEFAULT_PLAYING_XI = Array.from(
  { length: 11 },
  (_, i) => `Player ${i + 1}`
);

export default function MatchDetailsPlayingXI({
  match,
}: MatchDetailsPlayingXIProps) {
  const teamAPlayers =
    match.playingXI?.teamA ?? DEFAULT_PLAYING_XI;

  const teamBPlayers =
    match.playingXI?.teamB ?? DEFAULT_PLAYING_XI;

  return (
    <section className="match-details-playing-xi">

      {/* =====================================================
         HEADER
      ===================================================== */}
      <div className="match-details-playing-xi-header">
        <h3 className="match-details-playing-xi-title">
          Playing XI
        </h3>
      </div>

      {/* =====================================================
         TEAMS GRID
      ===================================================== */}
      <div className="match-details-playing-xi-grid">

        {/* ================= TEAM A ================= */}
        <div className="match-details-playing-xi-team">

          <h4 className="match-details-playing-xi-team-name">
            {match.teamA}
          </h4>

          <ol className="match-details-playing-xi-list">
            {teamAPlayers.map((player, index) => (
              <li
                key={`${player}-${index}`}
                className="match-details-playing-xi-player"
              >
                {player}
              </li>
            ))}
          </ol>

        </div>

        {/* ================= TEAM B ================= */}
        <div className="match-details-playing-xi-team">

          <h4 className="match-details-playing-xi-team-name">
            {match.teamB}
          </h4>

          <ol className="match-details-playing-xi-list">
            {teamBPlayers.map((player, index) => (
              <li
                key={`${player}-${index}`}
                className="match-details-playing-xi-player"
              >
                {player}
              </li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  );
}