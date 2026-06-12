import MatchCard from "./MatchCard";

/* =========================================================
   MATCH LIST
   Purpose : Renders the full grid of upcoming, live,
             and completed match cards.
   ========================================================= */

interface Match {
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  status: string;
}

const matches: Match[] = [
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
      <div className="match-list-container">

        {/* ── Section Heading ── */}
        <div className="match-list-header">
          <h2 className="match-list-title">Upcoming Fixtures</h2>
          <span className="match-list-count">{matches.length} Matches</span>
        </div>

        {/* ── Match Grid ── */}
        <ul className="match-list-grid">
          {matches.map((match, index) => (
            <li key={index} className="match-list-item">
              <MatchCard {...match} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}