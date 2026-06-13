import ManOfTheMatch from "./components/ManOfTheMatch";
import PointsTable from "./components/PointsTable";
import TopBatters from "./components/TopBatters";
import TopBowlers from "./components/TopBowlers";

/* =========================================================
   POINTS TABLE PAGE
   Route   : /points-table
   Purpose : Root page shell — renders page header,
             standings table, and top performers leaderboards.
   ========================================================= */
export default function PointsTablePage() {
  return (
    <main className="points-page">

      {/* ── Page Header ── */}
      <section className="points-page-header">
        <div className="points-page-container">
          <h1 className="points-page-title">Points Table</h1>
          <p className="points-page-subtitle">
            Team standings, top batters and top bowlers.
          </p>
        </div>
      </section>

      {/* ── Standings Table ── */}
      <PointsTable />

      {/* ── Leaderboards Row ── */}
      <section className="points-page-stats">
        <div className="points-page-container">
          <div className="points-page-stats-grid">
            <TopBatters />
            <TopBowlers />
          </div>
        </div>
      </section>

      <ManOfTheMatch/>

    </main>
  );
}