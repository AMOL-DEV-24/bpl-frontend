import LiveScoreCard from "./components/LiveScoreCard";
import MatchList from "./components/MatchList";

export default function MatchesPage() {
  return (
    <main className="matches-page">
      <section className="page-header">
        <div className="container">
          <h1>Matches</h1>
          <p>
            Follow live matches, upcoming fixtures,
            and completed results.
          </p>
        </div>
      </section>

      <LiveScoreCard />

      <MatchList />
    </main>
  );
}