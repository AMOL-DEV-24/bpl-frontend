/* =========================================================
   TEAMS PAGE
   ---------------------------------------------------------
   Route   : /teams
   Scope   : .teams-page
   Layout  : Teams overview page

   Component Order:
   1. Page Header
   2. Team Stats
   3. Team Grid
========================================================= */

import TeamGrid from "./components/TeamGrid";
import TeamStats from "./components/TeamStats";

/* ---------------------------------------------------------
   Page Component
--------------------------------------------------------- */
export default function TeamsPage() {
  return (
    <main className="teams-page">

      {/* ===================================================
         PAGE HEADER
      =================================================== */}
      <section className="teams-page-header">
        <div className="container">

          <div className="teams-page-header-content">
            <h1>Teams</h1>

            <p>
              Explore all participating teams of the
              Bhalawani Premier League.
            </p>
          </div>

        </div>
      </section>

      {/* ===================================================
         TEAM STATS
      =================================================== */}
      <TeamStats />

      {/* ===================================================
         TEAM GRID
      =================================================== */}
      <TeamGrid />

    </main>
  );
}