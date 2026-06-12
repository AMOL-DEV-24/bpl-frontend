/* =========================================================
   LIVE MATCH SECTION
   ---------------------------------------------------------
   Component : LiveMatch
   Scope     : .live-match

   Contains:
   - Section Heading
   - Scoreboard Card
   - Live Badge
   - Match Information
   - Match Meta Stats

   Notes:
   - All class names are prefixed with live-match-
   - No generic classes
   - Future-safe architecture
========================================================= */

export default function LiveMatch() {
  return (
    <section className="live-match">

      <div className="container">

        {/* ===================================================
            SECTION HEADING
        =================================================== */}
        <div className="live-match-heading">
          <h2>Live Match</h2>

          <p className="live-match-subtitle">
            Watch real-time action from Bhalawani Premier League
          </p>
        </div>

        {/* ===================================================
            SCOREBOARD CARD
        =================================================== */}
        <div className="live-match-card">

          {/* LEFT TEAM */}
          <div className="live-match-team live-match-team-left">

            <h3>BPL Warriors</h3>

            <div className="live-match-score">
              128 <span>/ 4</span>
            </div>

            <small>Overs: 14.2</small>

          </div>

          {/* CENTER */}
          <div className="live-match-center">

            <div className="live-match-badge">
              <span className="live-match-badge-dot" />
              LIVE
            </div>

            <div className="live-match-info">
              <p>1st Innings</p>
              <span>Stadium Ground, Pandharpur</span>
            </div>

          </div>

          {/* RIGHT TEAM */}
          <div className="live-match-team live-match-team-right">

            <h3>BPL Kings</h3>

            <div className="live-match-score">
              <span>Yet to Bat</span>
            </div>

            <small>Target: 129</small>

          </div>

        </div>

        {/* ===================================================
            MATCH META
        =================================================== */}
        <div className="live-match-meta">

          <div className="live-match-meta-card">
            <span>Run Rate</span>
            <strong>9.1</strong>
          </div>

          <div className="live-match-meta-card">
            <span>Current Over</span>
            <strong>14.2</strong>
          </div>

          <div className="live-match-meta-card">
            <span>Match Status</span>
            <strong>Exciting Chase</strong>
          </div>

        </div>

      </div>

    </section>
  );
}