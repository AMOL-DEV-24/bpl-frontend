/* =========================================================
   TOURNAMENT STATS COMPONENT
   ---------------------------------------------------------
   Scope    : .tournament-stats
   Purpose  : Display tournament overview statistics
   Location : Home Page
========================================================= */

import tournamentsStatsData from "@/data/home/tournamentsStats/tournamentsStatsData";

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

          {tournamentsStatsData.map((item) => (
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