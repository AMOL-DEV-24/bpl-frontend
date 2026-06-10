import TeamCard from "./TeamCard";

const teams = [
  {
    name: "BPL Warriors",
    captain: "Rahul",
    players: 15,
  },
  {
    name: "BPL Kings",
    captain: "Amit",
    players: 15,
  },
  {
    name: "BPL Titans",
    captain: "Rohit",
    players: 15,
  },
  {
    name: "BPL Strikers",
    captain: "Vikas",
    players: 15,
  },
];

export default function TeamGrid() {
  return (
    <section className="teams-grid-section">
      <div className="container">
        <div className="teams-grid">
          {teams.map((team) => (
            <TeamCard
              key={team.name}
              {...team}
            />
          ))}
        </div>
      </div>
    </section>
  );
}