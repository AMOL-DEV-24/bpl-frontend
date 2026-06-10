const batters = [
  {
    name: "Rahul",
    runs: 286,
  },
  {
    name: "Amit",
    runs: 254,
  },
  {
    name: "Rohit",
    runs: 231,
  },
];

export default function TopBatters() {
  return (
    <div className="leaderboard-card">
      <h2>Orange Cap</h2>

      {batters.map((player) => (
        <div
          key={player.name}
          className="leaderboard-item"
        >
          <span>{player.name}</span>
          <strong>{player.runs}</strong>
        </div>
      ))}
    </div>
  );
}