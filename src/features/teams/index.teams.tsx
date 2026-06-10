import TeamGrid from "./components/TeamGrid";
import TeamStats from "./components/TeamStats";

export default function TeamsPage() {
  return (
    <main className="teams-page">
      <section className="page-header">
        <div className="container">
          <h1>Teams</h1>
          <p>
            Explore all participating teams of the
            Bhalawani Premier League.
          </p>
        </div>
      </section>

      <TeamStats />
      <TeamGrid />
    </main>
  );
}