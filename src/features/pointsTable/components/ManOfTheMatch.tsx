/* =========================================================
   MAN OF THE MATCH
   Purpose : BPL 2026 Match-wise Best Performer List
   Layout  : Responsive Card Grid
========================================================= */

import Image from "next/image";

import manOfTheMatchData from "@/data/pointsTable/components/manOfTheMatchData";

export default function ManOfTheMatch() {
  return (
    <section className="man-of-the-match">
      <div className="man-of-the-match-container">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="man-of-the-match-header">
          <span className="man-of-the-match-tag">BPL 2026</span>

          <h2 className="man-of-the-match-title">★ Man Of The Match ★</h2>

          <p className="man-of-the-match-subtitle">
            Outstanding performers from each completed match
          </p>
        </div>

        {/* =====================================================
            GRID
        ===================================================== */}
        <div className="man-of-the-match-grid">
          {manOfTheMatchData.map((manOfTheMatch) => (
            <article
              key={manOfTheMatch?.matchNo}
              className="man-of-the-match-card"
            >
              {/* =================================================
                  CARD TOP
              ================================================= */}
              <div className="man-of-the-match-card-top">
                <span className="man-of-the-match-match-no">
                  #{manOfTheMatch.matchNo}
                </span>

                <span className="man-of-the-match-trophy" aria-hidden="true">
                  🏆
                </span>

                <div className="man-of-the-match-avatar">
                  {manOfTheMatch.photo ? (
                    <Image
                      src={manOfTheMatch.photo}
                      alt={manOfTheMatch.playerName}
                      fill
                      sizes="300px"
                      className="man-of-the-match-avatar-image"
                    />
                  ) : (
                    <div className="man-of-the-match-avatar-fallback">👤</div>
                  )}
                </div>

                <Image
                  src={manOfTheMatch.logo}
                  alt={manOfTheMatch.team}
                  width={44}
                  height={44}
                  className="man-of-the-match-team-logo"
                />
              </div>

              {/* =================================================
                  CARD BODY
              ================================================= */}
              <div className="man-of-the-match-card-body">
                <h3 className="man-of-the-match-player-name">
                  {manOfTheMatch?.playerName}
                </h3>

                <p className="man-of-the-match-team-name">
                  {manOfTheMatch?.team}
                </p>

                <div className="man-of-the-match-stats">
                  {manOfTheMatch?.stats.map((stat) => (
                    <span key={stat} className="man-of-the-match-stat">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <div className="man-of-the-match-footer">
          ★ Congratulations to all outstanding players! ★
        </div>
      </div>
    </section>
  );
}
