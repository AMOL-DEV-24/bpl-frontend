const teams = [
  "Warriors",
  "Kings",
  "Titans",
  "Strikers",
];

export default function TeamsPreview() {
  return (
    <section className="teams-preview">
      <div className="container">

        <div className="section-heading">
          <h2>Participating Teams</h2>
        </div>

        <div className="teams-grid">

          {teams.map((team) => (
            <div
              key={team}
              className="team-card"
            >
              <div className="team-logo">
                🏏
              </div>

              <h3>{team}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}