const bowlers = [
  {
    name: "Vikas",
    wickets: 12,
  },
  {
    name: "Sagar",
    wickets: 10,
  },
  {
    name: "Akash",
    wickets: 9,
  },
];

export default function TopBowlers() {
  return (
    <div className="leaderboard-card">
      <h2>Purple Cap</h2>

      {bowlers.map((player) => (
        <div
          key={player.name}
          className="leaderboard-item"
        >
          <span>{player.name}</span>
          <strong>{player.wickets}</strong>
        </div>
      ))}
    </div>
  );
}