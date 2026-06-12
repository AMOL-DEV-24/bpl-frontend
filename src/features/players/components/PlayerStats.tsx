/* =========================================================
   PLAYER STATS
   Purpose : Summary bar — total players and per-role counts.
             Five stat pills displayed in a horizontal row.
   ========================================================= */

interface PlayerStatsProps {
  total: number;
  batsmen: number;
  bowlers: number;
  keepers: number;
  allRounders: number;
}

interface StatItem {
  value: number;
  label: string;
  accent?: boolean;
}

export default function PlayerStats({
  total,
  batsmen,
  bowlers,
  keepers,
  allRounders,
}: PlayerStatsProps) {
  const stats: StatItem[] = [
    { value: total,       label: "Total Players", accent: true },
    { value: batsmen,     label: "Batsmen"                      },
    { value: bowlers,     label: "Bowlers"                      },
    { value: keepers,     label: "Keepers"                      },
    { value: allRounders, label: "All Rounders"                 },
  ];

  return (
    <section className="player-stats">

      {/* ── Stat Pills ── */}
      <ul className="player-stats-list">
        {stats?.map((stat) => (
          <li
            key={stat?.label}
            className={`player-stats-item${stat?.accent ? " player-stats-item--accent" : ""}`}
          >
            <strong className="player-stats-item-value">{stat?.value}</strong>
            <span className="player-stats-item-label">{stat?.label}</span>
          </li>
        ))}
      </ul>

    </section>
  );
}