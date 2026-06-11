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
  const stats = [
    {
      value: total,
      label: "Total Players",
    },
    {
      value: batsmen,
      label: "Batsmen",
    },
    {
      value: bowlers,
      label: "Bowlers",
    },
    {
      value: keepers,
      label: "Keepers",
    },
    {
      value: allRounders,
      label: "All Rounders",
    },
  ];

  return (
    <section className="player-stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card"
          >
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}