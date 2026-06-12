/* =========================================================
   LIVE SCORE CARD
   Purpose : Displays the current live match scoreboard
             in IPL broadcast style with team scores.
   ========================================================= */
export default function LiveScoreCard() {
  return (
    <section className="live-score">
      <div className="live-score-container">

        <article className="live-score-card">

          {/* ── Live Badge ── */}
          <span className="live-score-badge">● LIVE</span>

          {/* ── Team A ── */}
          <div className="live-score-team">
            <h3 className="live-score-team-name">BPL Warriors</h3>
            <span className="live-score-team-runs">164/5</span>
            <span className="live-score-team-overs">(18.2 ov)</span>
          </div>

          {/* ── VS Divider ── */}
          <span className="live-score-vs">VS</span>

          {/* ── Team B ── */}
          <div className="live-score-team">
            <h3 className="live-score-team-name">BPL Kings</h3>
            <span className="live-score-team-runs">Yet To Bat</span>
            <span className="live-score-team-overs">—</span>
          </div>

        </article>

      </div>
    </section>
  );
}