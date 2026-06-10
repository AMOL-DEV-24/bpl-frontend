const teams = [
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
];

export default function PointsTable() {
  return (
    <section className="points-table-section">
      <div className="container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>L</th>
                <th>Pts</th>
                <th>NRR</th>
              </tr>
            </thead>

            <tbody>
              {teams.map((team, index) => (
                <tr key={team.team}>
                  <td>{index + 1}</td>
                  <td>{team.team}</td>
                  <td>{team.played}</td>
                  <td>{team.won}</td>
                  <td>{team.lost}</td>
                  <td>{team.points}</td>
                  <td>{team.nrr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}