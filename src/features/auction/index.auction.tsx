import TeamPurse from "./components/TeamPurse";
import AuctionList from "./components/AuctionList";

/* =========================================================
   AUCTION PAGE
   Route   : /auction
   Purpose : Root page shell — renders page header,
             team purse cards and sold player auction list.
   ========================================================= */
export default function AuctionPage() {
  return (
    <main className="auction-page">

      {/* ── Page Header ── */}
      <section className="auction-page-header">
        <div className="auction-page-container">
          <h1 className="auction-page-title">BPL Auction Center</h1>
          <p className="auction-page-subtitle">
            View sold players, team purses and auction statistics.
          </p>
        </div>
      </section>

      {/* ── Team Purse Cards ── */}
      <TeamPurse />

      {/* ── Sold Players List ── */}
      <AuctionList />

    </main>
  );
}