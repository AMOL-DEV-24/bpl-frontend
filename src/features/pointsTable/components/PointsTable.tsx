/* =========================================================
   POINTS TABLE
   Purpose : Full standings table — team rank, played,
             won, lost, points, NRR. IPL broadcast style.
   ========================================================= */

interface TeamStanding {
  team: string;
  played: number;
  won: number;
  lost: number;
  points: number;
  nrr: string;
}

const teams: TeamStanding[] = [
  {
    team: "BPL Warriors",
    played: 5,
    won: 4,
    lost: 1,
    points: 8,
    nrr: "+1.42",
  },
  {
    team: "BPL Kings",
    played: 5,
    won: 3,
    lost: 2,
    points: 6,
    nrr: "+0.65",
  },
  {
    team: "BPL Titans",
    played: 5,
    won: 2,
    lost: 3,
    points: 4,
    nrr: "-0.25",
  },
  {
    team: "BPL Strikers",
    played: 5,
    won: 2,
    lost: 3,
    points: 4,
    nrr: "-0.88",
  },
  {
    team: "BPL Royals",
    played: 5,
    won: 1,
    lost: 4,
    points: 2,
    nrr: "-1.10",
  },
  {
    team: "BPL Challengers",
    played: 5,
    won: 1,
    lost: 4,
    points: 2,
    nrr: "-1.34",
  },
];

export default function PointsTable() {
  return (
    <section className="points-table-section">
      <div className="points-table-container">

        {/* ── Section Heading ── */}
        <div className="points-table-heading">
          <h2 className="points-table-heading-title">Standings</h2>
          <span className="points-table-heading-badge">{teams.length} Teams</span>
        </div>

        {/* ── Scrollable Table Wrapper ── */}
        <div className="points-table-wrapper">
          <table className="points-table">

            <thead className="points-table-head">
              <tr className="points-table-head-row">
                <th className="points-table-head-cell points-table-head-cell--rank">#</th>
                <th className="points-table-head-cell points-table-head-cell--team">Team</th>
                <th className="points-table-head-cell">P</th>
                <th className="points-table-head-cell">W</th>
                <th className="points-table-head-cell">L</th>
                <th className="points-table-head-cell points-table-head-cell--pts">Pts</th>
                <th className="points-table-head-cell">NRR</th>
              </tr>
            </thead>

            <tbody className="points-table-body">
              {teams.map((team, index) => (
                <tr
                  key={team.team}
                  className={`points-table-row ${index < 4 ? "points-table-row--qualifier" : ""}`}
                >
                  <td className="points-table-cell points-table-cell--rank">
                    <span className="points-table-rank">{index + 1}</span>
                  </td>
                  <td className="points-table-cell points-table-cell--team">
                    <span className="points-table-team-name">{team.team}</span>
                    {index < 4 && (
                      <span className="points-table-qualifier-dot" aria-label="Qualifier spot" />
                    )}
                  </td>
                  <td className="points-table-cell">{team.played}</td>
                  <td className="points-table-cell points-table-cell--won">{team.won}</td>
                  <td className="points-table-cell points-table-cell--lost">{team.lost}</td>
                  <td className="points-table-cell points-table-cell--pts">{team.points}</td>
                  <td className={`points-table-cell points-table-cell--nrr ${team.nrr.startsWith("+") ? "points-table-cell--nrr-pos" : "points-table-cell--nrr-neg"}`}>
                    {team.nrr}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* ── Qualifier Legend ── */}
        <div className="points-table-legend">
          <span className="points-table-legend-dot" />
          <span className="points-table-legend-text">Qualifier spot</span>
        </div>

      </div>
    </section>
  );
}