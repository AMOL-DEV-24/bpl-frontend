import TeamPurse from "./components/TeamPurse";
import AuctionList from "./components/AuctionList";

export default function AuctionPage() {
  return (
    <main className="auction-page">
      <section className="page-header">
        <div className="container">
          <h1>BPL Auction Center</h1>

          <p>
            View sold players, team purses and auction
            statistics.
          </p>
        </div>
      </section>

      <TeamPurse />

      <AuctionList />
    </main>
  );
}