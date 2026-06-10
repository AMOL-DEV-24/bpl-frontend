export default function LiveMatch() {
  return (
    <section className="live-match">

      <div className="container">

        {/* ================= SECTION TITLE ================= */}
        <div className="section-heading">
          <h2>Live Match</h2>
          <p className="section-subtitle">
            Watch real-time action from Bhalawani Premier League
          </p>
        </div>

        {/* ================= SCOREBOARD CARD ================= */}
        <div className="live-card">

          {/* LEFT TEAM */}
          <div className="team team--left">
            <h3>BPL Warriors</h3>

            <div className="score">
              128 <span>/ 4</span>
            </div>

            <small>Overs: 14.2</small>
          </div>

          {/* CENTER LIVE STATUS */}
          <div className="match-center">

            <div className="live-badge">
              <span className="dot" />
              LIVE
            </div>

            <div className="match-info">
              <p>1st Innings</p>
              <span>Stadium Ground, Pandharpur</span>
            </div>

          </div>

          {/* RIGHT TEAM */}
          <div className="team team--right">
            <h3>BPL Kings</h3>

            <div className="score">
              <span>Yet to Bat</span>
            </div>

            <small>Target: 129</small>
          </div>

        </div>

        {/* ================= EXTRA MATCH INFO ================= */}
        <div className="live-meta">

          <div className="meta-item">
            <span>Run Rate</span>
            <strong>9.1</strong>
          </div>

          <div className="meta-item">
            <span>Current Over</span>
            <strong>14.2</strong>
          </div>

          <div className="meta-item">
            <span>Match Status</span>
            <strong>Exciting Chase</strong>
          </div>

        </div>

      </div>

    </section>
  );
}