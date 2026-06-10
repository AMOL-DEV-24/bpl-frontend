interface AuctionPlayerCardProps {
  player: string;
  role: string;
  team: string;
  price: string;
}

export default function AuctionPlayerCard({
  player,
  role,
  team,
  price,
}: AuctionPlayerCardProps) {
  return (
    <div className="auction-player-card">
      <div className="player-avatar">
        🏏
      </div>

      <h3>{player}</h3>

      <p>{role}</p>

      <p>
        <strong>Team:</strong> {team}
      </p>

      <div className="sold-price">
        ₹ {price}
      </div>
    </div>
  );
}