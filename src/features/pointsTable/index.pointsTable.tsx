import PointsTable from "./components/PointsTable";
import TopBatters from "./components/TopBatters";
import TopBowlers from "./components/TopBowlers";

export default function PointsTablePage() {
  return (
    <main className="points-page">
      <section className="page-header">
        <div className="container">
          <h1>Points Table</h1>
          <p>
            Team standings, top batters and top bowlers.
          </p>
        </div>
      </section>

      <PointsTable />

      <div className="container stats-wrapper">
        <TopBatters />
        <TopBowlers />
      </div>
    </main>
  );
}