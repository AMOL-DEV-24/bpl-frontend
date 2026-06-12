import LiveScoreCard from "./components/LiveScoreCard";
import MatchList from "./components/MatchList";

/* =========================================================
   MATCHES PAGE
   Route   : /matches
   Purpose : Root page shell — renders header, live score,
             and match list sections.
   ========================================================= */
export default function MatchesPage() {
  return (
    <main className="matches-page">

      {/* ── Page Header ── */}
      <section className="matches-page-header">
        <div className="matches-page-container">
          <h1 className="matches-page-title">Matches</h1>
          <p className="matches-page-subtitle">
            Follow live matches, upcoming fixtures, and completed results.
          </p>
        </div>
      </section>

      {/* ── Live Score Strip ── */}
      <LiveScoreCard />

      {/* ── Match Listing ── */}
      <MatchList />

    </main>
  );
}