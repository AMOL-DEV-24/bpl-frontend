/* =========================================================
   TOP BATTERS
   Purpose : Orange Cap leaderboard — top run scorers
             with rank, player name, and run tally.
   ========================================================= */

interface Batter {
  name: string;
  runs: number;
}

const batters: Batter[] = [
  { name: "Rahul",  runs: 286 },
  { name: "Amit",   runs: 254 },
  { name: "Rohit",  runs: 231 },
  { name: "Dev",    runs: 198 },
  { name: "Karan",  runs: 174 },
];

export default function TopBatters() {
  return (
    <article className="top-batters">

      {/* ── Card Header ── */}
      <div className="top-batters-header">
        <span className="top-batters-cap">🟠</span>
        <h2 className="top-batters-title">Orange Cap</h2>
      </div>

      {/* ── Column Labels ── */}
      <div className="top-batters-labels">
        <span className="top-batters-label">Batter</span>
        <span className="top-batters-label">Runs</span>
      </div>

      {/* ── Player List ── */}
      <ol className="top-batters-list">
        {batters.map((player, index) => (
          <li key={player.name} className="top-batters-item">
            <span className="top-batters-item-rank">{index + 1}</span>
            <span className="top-batters-item-name">{player.name}</span>
            <strong className="top-batters-item-runs">{player.runs}</strong>
          </li>
        ))}
      </ol>

    </article>
  );
}