/* =========================================================
   AUCTION PLAYER CARD
   Purpose : Single sold-player card shown inside AuctionList.
   ========================================================= */

interface AuctionPlayerCardProps {
  player: string;
  role:   string;
  team:   string;
  price:  string;
}

export default function AuctionPlayerCard({
  player,
  role,
  team,
  price,
}: AuctionPlayerCardProps) {
  return (
    <div className="auction-player-card">

      {/* ── Avatar ── */}
      <div className="auction-player-card__avatar">🏏</div>

      {/* ── Info ── */}
      <h3 className="auction-player-card__name">{player}</h3>
      <p  className="auction-player-card__role">{role}</p>
      <p  className="auction-player-card__team">
        <strong>Team:</strong> {team}
      </p>

      {/* ── Sold Price ── */}
      <div className="auction-player-card__price">₹ {price}</div>

    </div>
  );
}