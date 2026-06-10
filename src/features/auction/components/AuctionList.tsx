import AuctionPlayerCard from "./AuctionPlayerCard";

const players = [
  {
    player: "Rahul",
    role: "Batsman",
    team: "Warriors",
    price: "50,000",
  },
  {
    player: "Amit",
    role: "All Rounder",
    team: "Kings",
    price: "70,000",
  },
  {
    player: "Rohit",
    role: "Bowler",
    team: "Titans",
    price: "40,000",
  },
  {
    player: "Sagar",
    role: "Wicket Keeper",
    team: "Strikers",
    price: "60,000",
  },
];

export default function AuctionList() {
  return (
    <section className="auction-list">
      <div className="container">

        <div className="auction-grid">
          {players.map((player) => (
            <AuctionPlayerCard
              key={player.player}
              {...player}
            />
          ))}
        </div>

      </div>
    </section>
  );
}