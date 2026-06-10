import MatchCard from "./MatchCard";

const matches = [
  {
    teamA: "BPL Warriors",
    teamB: "BPL Kings",
    date: "10 June 2026",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    teamA: "BPL Titans",
    teamB: "BPL Strikers",
    date: "11 June 2026",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    teamA: "BPL Royals",
    teamB: "BPL Challengers",
    date: "12 June 2026",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
];

export default function MatchList() {
  return (
    <section className="match-list">
      <div className="container">

        <div className="match-grid">
          {matches.map((match, index) => (
            <MatchCard
              key={index}
              {...match}
            />
          ))}
        </div>

      </div>
    </section>
  );
}