/* =========================================================
   MATCH DETAILS RESULT
   Purpose : Displays match result (Winner, Margin, POTM, Summary)
========================================================= */

import type { Match } from "@/types/matches/matchDetails/matchDetails.type";

interface MatchDetailsResultProps {
  match: Match;
}

export default function MatchDetailsResult({
  match,
}: MatchDetailsResultProps) {
  const defaultResult = {
    winner: "TBA",
    winBy: "-",
    playerOfTheMatch: "TBA",
    summary: "Match result will be updated soon.",
  };

  const result = match.result ?? defaultResult;

  return (
    <section className="match-details-result">

      {/* =====================================================
         HEADER
      ===================================================== */}
      <div className="match-details-result-header">
        <h3 className="match-details-result-title">
          Match Result
        </h3>
      </div>

      {/* =====================================================
         RESULT GRID
      ===================================================== */}
      <div className="match-details-result-grid">

        {/* ================= WINNER ================= */}
        <div className="match-details-result-card">
          <span className="match-details-result-label">
            Winner
          </span>

          <span className="match-details-result-value">
            🏆 {result.winner}
          </span>
        </div>

        {/* ================= WIN MARGIN ================= */}
        <div className="match-details-result-card">
          <span className="match-details-result-label">
            Won By
          </span>

          <span className="match-details-result-value">
            {result.winBy}
          </span>
        </div>

        {/* ================= POTM ================= */}
        <div className="match-details-result-card">
          <span className="match-details-result-label">
            Player Of The Match
          </span>

          <span className="match-details-result-value">
            ⭐ {result.playerOfTheMatch}
          </span>
        </div>

      </div>

      {/* =====================================================
         SUMMARY
      ===================================================== */}
      <div className="match-details-result-summary">
        <h4 className="match-details-result-summary-title">
          Match Summary
        </h4>

        <p className="match-details-result-summary-text">
          {result.summary}
        </p>
      </div>

    </section>
  );
}