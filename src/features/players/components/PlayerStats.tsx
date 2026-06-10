interface Props {
  total: number;
  batsmen: number;
  bowlers: number;
  keepers: number;
  allRounders: number;
}

export default function PlayerStats({
  total,
  batsmen,
  bowlers,
  keepers,
  allRounders,
}: Props) {
  return (
    <div className="player-stats">

      <div className="stat-card">
        <h2>{total}</h2>
        <p>Total Players</p>
      </div>

      <div className="stat-card">
        <h2>{batsmen}</h2>
        <p>Batsmen</p>
      </div>

      <div className="stat-card">
        <h2>{bowlers}</h2>
        <p>Bowlers</p>
      </div>

      <div className="stat-card">
        <h2>{keepers}</h2>
        <p>Wicket Keepers</p>
      </div>

      <div className="stat-card">
        <h2>{allRounders}</h2>
        <p>All Rounders</p>
      </div>

    </div>
  );
}