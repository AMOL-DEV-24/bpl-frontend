/* =========================================================
   TEAM STATS SECTION
   ---------------------------------------------------------
   Scope   : .team-stats
   Purpose : Quick tournament statistics overview

   Structure:
   - team-stats
     - team-stats-grid
       - team-stats-card
========================================================= */

export default function TeamStats() {
  return (
    <section className="team-stats">

      <div className="container">

        <div className="team-stats-grid">

          <div className="team-stats-card">
            <h3>7</h3>
            <p>Total Teams</p>
          </div>

          <div className="team-stats-card">
            <h3>77</h3>
            <p>Total Players</p>
          </div>

          <div className="team-stats-card">
            <h3>21</h3>
            <p>League Matches</p>
          </div>

          <div className="team-stats-card">
            <h3>1</h3>
            <p>Champion Team</p>
          </div>

        </div>

      </div>

    </section>
  );
}