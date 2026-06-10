export default function LiveScoreCard() {
  return (
    <section className="live-score">
      <div className="container">
        <div className="live-score-card">

          <div className="live-badge">
            LIVE
          </div>

          <div className="team-block">
            <h3>BPL Warriors</h3>
            <span>164/5 (18.2)</span>
          </div>

          <div className="vs">
            VS
          </div>

          <div className="team-block">
            <h3>BPL Kings</h3>
            <span>Yet To Bat</span>
          </div>

        </div>
      </div>
    </section>
  );
}