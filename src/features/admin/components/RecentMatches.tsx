const matches = [
  "Warriors vs Kings",
  "Titans vs Strikers",
  "Royals vs Challengers",
];

export default function RecentMatches() {
  return (
    <section className="recent-matches">
      <div className="container">

        <h2>Recent Matches</h2>

        <div className="match-list">
          {matches.map((match) => (
            <div
              key={match}
              className="match-item"
            >
              {match}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}