/* =========================================================
   TOURNAMENT STATS COMPONENT
   ---------------------------------------------------------
   Scope    : .tournament-stats
   Purpose  : Display tournament overview statistics
   Location : Home Page
========================================================= */

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
    <section className="tournament-stats">

      <div className="container">

        {/* =================================================
            SECTION HEADING
        ================================================= */}
        <div className="tournament-stats-heading">
          <h2>Tournament Stats</h2>

          <p>
            Quick overview of the Bhalawani Premier League
          </p>
        </div>

        {/* =================================================
            STATS GRID
        ================================================= */}
        <div className="tournament-stats-grid">

          {stats.map((item) => (
            <article
              key={item.title}
              className="tournament-stats-card"
            >
              <h3>{item.value}</h3>

              <p>{item.title}</p>
            </article>
          ))}

        </div>

      </div>

    </section>
  );
}