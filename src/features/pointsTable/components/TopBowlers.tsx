/* =========================================================
   TOP BOWLERS
   Purpose : Purple Cap leaderboard — top wicket takers
             with rank, player name, and wicket count.
   ========================================================= */

interface Bowler {
  name: string;
  wickets: number;
}

const bowlers: Bowler[] = [
  { name: "Vikas",  wickets: 12 },
  { name: "Sagar",  wickets: 10 },
  { name: "Akash",  wickets: 9  },
  { name: "Preet",  wickets: 8  },
  { name: "Manav",  wickets: 7  },
];

export default function TopBowlers() {
  return (
    <article className="top-bowlers">

      {/* ── Card Header ── */}
      <div className="top-bowlers-header">
        <span className="top-bowlers-cap">🟣</span>
        <h2 className="top-bowlers-title">Purple Cap</h2>
      </div>

      {/* ── Column Labels ── */}
      <div className="top-bowlers-labels">
        <span className="top-bowlers-label">Bowler</span>
        <span className="top-bowlers-label">Wickets</span>
      </div>

      {/* ── Player List ── */}
      <ol className="top-bowlers-list">
        {bowlers.map((player, index) => (
          <li key={player.name} className="top-bowlers-item">
            <span className="top-bowlers-item-rank">{index + 1}</span>
            <span className="top-bowlers-item-name">{player.name}</span>
            <strong className="top-bowlers-item-wickets">{player.wickets}</strong>
          </li>
        ))}
      </ol>

    </article>
  );
}