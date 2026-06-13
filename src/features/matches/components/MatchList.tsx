import MatchCard from "./MatchCard";

/* =========================================================
   MATCH LIST
   Purpose : Renders the full grid of all BPL 2026 matches
             with correct fixtures from official schedule.
========================================================= */

type MatchStatus = "Completed" | "Live" | "Upcoming";

interface Match {
  matchNo: number;
  teamA: string;
  teamB: string;
  logoA: string;
  logoB: string;
  venue: string;
  status: MatchStatus;
}

const matches: Match[] = [
  {
    matchNo: 1,
    teamA: "Gajanan Riders",
    teamB: "Mahalaxmi Warriors",
    logoA: "/assets/images/teams/Gajanan Rider 1.png",
    logoB: "/assets/images/teams/Mahalaxmi Warriors.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 2,
    teamA: "Samrat Yodha",
    teamB: "Sadguru Lions",
    logoA: "/assets/images/teams/Samrat Yodha 1.png",
    logoB: "/assets/images/teams/Sadguru Lions.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 3,
    teamA: "Dayavan Eleven",
    teamB: "Linge Super Kings",
    logoA: "/assets/images/teams/Dayavan 11 - 1.png",
    logoB: "/assets/images/teams/Linge Super Kings 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 4,
    teamA: "Irfan Fighters",
    teamB: "Gajanan Riders",
    logoA: "/assets/images/teams/Irfan Fighters 1.png",
    logoB: "/assets/images/teams/Gajanan Rider 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 5,
    teamA: "Mahalaxmi Warriors",
    teamB: "Samrat Yodha",
    logoA: "/assets/images/teams/Mahalaxmi Warriors.png",
    logoB: "/assets/images/teams/Samrat Yodha 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 6,
    teamA: "Sadguru Lions",
    teamB: "Dayavan Eleven",
    logoA: "/assets/images/teams/Sadguru Lions.png",
    logoB: "/assets/images/teams/Dayavan 11 - 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 7,
    teamA: "Linge Super Kings",
    teamB: "Irfan Fighters",
    logoA: "/assets/images/teams/Linge Super Kings 1.png",
    logoB: "/assets/images/teams/Irfan Fighters 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 8,
    teamA: "Gajanan Riders",
    teamB: "Samrat Yodha",
    logoA: "/assets/images/teams/Gajanan Rider 1.png",
    logoB: "/assets/images/teams/Samrat Yodha 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 9,
    teamA: "Dayavan Eleven",
    teamB: "Irfan Fighters",
    logoA: "/assets/images/teams/Dayavan 11 - 1.png",
    logoB: "/assets/images/teams/Irfan Fighters 1.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 10,
    teamA: "Mahalaxmi Warriors",
    teamB: "Sadguru Lions",
    logoA: "/assets/images/teams/Mahalaxmi Warriors.png",
    logoB: "/assets/images/teams/Sadguru Lions.png",
    venue: "Bhalawani Ground",
    status: "Completed",
  },
  {
    matchNo: 11,
    teamA: "Gajanan Riders",
    teamB: "Linge Super Kings",
    logoA: "/assets/images/teams/Gajanan Rider 1.png",
    logoB: "/assets/images/teams/Linge Super Kings 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 12,
    teamA: "Samrat Yodha",
    teamB: "Dayavan Eleven",
    logoA: "/assets/images/teams/Samrat Yodha 1.png",
    logoB: "/assets/images/teams/Dayavan 11 - 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 13,
    teamA: "Sadguru Lions",
    teamB: "Irfan Fighters",
    logoA: "/assets/images/teams/Sadguru Lions.png",
    logoB: "/assets/images/teams/Irfan Fighters 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 14,
    teamA: "Mahalaxmi Warriors",
    teamB: "Linge Super Kings",
    logoA: "/assets/images/teams/Mahalaxmi Warriors.png",
    logoB: "/assets/images/teams/Linge Super Kings 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 15,
    teamA: "Gajanan Riders",
    teamB: "Dayavan Eleven",
    logoA: "/assets/images/teams/Gajanan Rider 1.png",
    logoB: "/assets/images/teams/Dayavan 11 - 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 16,
    teamA: "Samrat Yodha",
    teamB: "Irfan Fighters",
    logoA: "/assets/images/teams/Samrat Yodha 1.png",
    logoB: "/assets/images/teams/Irfan Fighters 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 17,
    teamA: "Sadguru Lions",
    teamB: "Linge Super Kings",
    logoA: "/assets/images/teams/Sadguru Lions.png",
    logoB: "/assets/images/teams/Linge Super Kings 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 18,
    teamA: "Mahalaxmi Warriors",
    teamB: "Dayavan Eleven",
    logoA: "/assets/images/teams/Mahalaxmi Warriors.png",
    logoB: "/assets/images/teams/Dayavan 11 - 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 19,
    teamA: "Samrat Yodha",
    teamB: "Linge Super Kings",
    logoA: "/assets/images/teams/Samrat Yodha 1.png",
    logoB: "/assets/images/teams/Linge Super Kings 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 20,
    teamA: "Gajanan Riders",
    teamB: "Sadguru Lions",
    logoA: "/assets/images/teams/Gajanan Rider 1.png",
    logoB: "/assets/images/teams/Sadguru Lions.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
  {
    matchNo: 21,
    teamA: "Mahalaxmi Warriors",
    teamB: "Irfan Fighters",
    logoA: "/assets/images/teams/Mahalaxmi Warriors.png",
    logoB: "/assets/images/teams/Irfan Fighters 1.png",
    venue: "Bhalawani Ground",
    status: "Upcoming",
  },
];

/* ── Filter helpers ── */
const liveMatches      = matches.filter((m) => m.status === "Live");
const upcomingMatches  = matches.filter((m) => m.status === "Upcoming");
const completedMatches = matches.filter((m) => m.status === "Completed");

export default function MatchList() {
  return (
    <section className="match-list">
      <div className="match-list-container">

        {/* ── Section Heading ── */}
        <div className="match-list-header">
          <h2 className="match-list-title">Match Schedule</h2>
          <span className="match-list-count">{matches.length} Matches</span>
        </div>

        {/* ── Live ── */}
        {liveMatches.length > 0 && (
          <div className="match-list-group">
            <h3 className="match-list-group-title match-list-group-title--live">
              🔴 Live
            </h3>
            <ul className="match-list-grid">
              {liveMatches.map((match) => (
                <li key={match.matchNo} className="match-list-item">
                  <MatchCard {...match} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Upcoming ── */}
        {upcomingMatches.length > 0 && (
          <div className="match-list-group">
            <h3 className="match-list-group-title match-list-group-title--upcoming">
              🕐 Upcoming
            </h3>
            <ul className="match-list-grid">
              {upcomingMatches.map((match) => (
                <li key={match.matchNo} className="match-list-item">
                  <MatchCard {...match} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Completed ── */}
        {completedMatches.length > 0 && (
          <div className="match-list-group">
            <h3 className="match-list-group-title match-list-group-title--completed">
              ✅ Completed
            </h3>
            <ul className="match-list-grid">
              {completedMatches.map((match) => (
                <li key={match.matchNo} className="match-list-item">
                  <MatchCard {...match} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Footer note ── */}
        <p className="match-list-footer">
          Top 4 teams qualify for Semi-Finals · Total 21 Matches
        </p>

      </div>
    </section>
  );
}