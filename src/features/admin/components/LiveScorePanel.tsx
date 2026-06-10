export default function LiveScorePanel() {
  return (
    <section className="live-score-panel">
      <div className="container">

        <h2>Live Score Control</h2>

        <div className="score-actions">
          <button>+1 Run</button>
          <button>+4 Runs</button>
          <button>+6 Runs</button>
          <button>Wicket</button>
          <button>Undo</button>
        </div>

      </div>
    </section>
  );
}