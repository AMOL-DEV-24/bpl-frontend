/* =========================================================
   MATCH DETAILS INFO
   Purpose : Displays match meta information (venue, officials, timing)
========================================================= */

import type { Match } from "@/types/matches/matchDetails/matchDetails.type";

interface MatchDetailsInfoProps {
  match: Match;
}

const DEFAULT_TEXT = {
  comingSoon: "Coming Soon",
  notAvailable: "Not Available",
  tba: "TBA",
};

export default function MatchDetailsInfo({
  match,
}: MatchDetailsInfoProps) {
  return (
    <section className="match-details-info">

      {/* =====================================================
         HEADER
      ===================================================== */}
      <div className="match-details-info-header">
        <h3 className="match-details-info-title">
          Match Information
        </h3>
      </div>

      {/* =====================================================
         INFO GRID
      ===================================================== */}
      <div className="match-details-info-grid">

        {/* ================= DATE ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">Date</span>
          <span className="match-details-info-value">
            {match.date ?? DEFAULT_TEXT.comingSoon}
          </span>
        </div>

        {/* ================= TIME ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">Time</span>
          <span className="match-details-info-value">
            {match.time ?? DEFAULT_TEXT.comingSoon}
          </span>
        </div>

        {/* ================= VENUE ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">Venue</span>
          <span className="match-details-info-value">
            {match.venue}
          </span>
        </div>

        {/* ================= TOSS ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">
            Toss Winner
          </span>
          <span className="match-details-info-value">
            {match.tossWinner ?? DEFAULT_TEXT.notAvailable}
          </span>
        </div>

        {/* ================= ELECTION ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">
            Elected To
          </span>
          <span className="match-details-info-value">
            {match.electedTo ?? DEFAULT_TEXT.notAvailable}
          </span>
        </div>

        {/* ================= UMPIRE 1 ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">
            Umpire 1
          </span>
          <span className="match-details-info-value">
            {match.umpire1 ?? DEFAULT_TEXT.tba}
          </span>
        </div>

        {/* ================= UMPIRE 2 ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">
            Umpire 2
          </span>
          <span className="match-details-info-value">
            {match.umpire2 ?? DEFAULT_TEXT.tba}
          </span>
        </div>

        {/* ================= REFEREE ================= */}
        <div className="match-details-info-item">
          <span className="match-details-info-label">
            Match Referee
          </span>
          <span className="match-details-info-value">
            {match.referee ?? DEFAULT_TEXT.tba}
          </span>
        </div>

      </div>

    </section>
  );
}