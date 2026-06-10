const stats = [
  {
    title: "Teams",
    value: "8",
  },
  {
    title: "Players",
    value: "120",
  },
  {
    title: "Matches",
    value: "32",
  },
  {
    title: "Sponsors",
    value: "15",
  },
];

export default function TournamentStats() {
  return (
    <section className="stats">
      <div className="container">

        <div className="section-heading">
          <h2>Tournament Stats</h2>
        </div>

        <div className="stats-grid">

          {stats.map((item) => (
            <div
              className="stat-card"
              key={item.title}
            >
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}