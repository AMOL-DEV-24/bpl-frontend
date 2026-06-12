/* =========================================================
   TEAMS GRID SECTION
   ---------------------------------------------------------
   Scope   : .teams-grid-section
   Purpose : Display tournament teams
   Layout  : Responsive card grid

   Structure:
   .teams-grid-section
   ├── .container
   │   ├── .teams-grid-section-heading
   │   │   ├── .teams-grid-section-title
   │   │   └── .teams-grid-section-subtitle
   │   └── .teams-grid-section-grid
========================================================= */

import TeamCard from "./TeamCard";

const teams = [
  {
    id: 1,
    name: "Linge Super Kings",
    image: "/assets/images/teams/Linge Super Kings 1.png",
    captain: "Rahul",
    players: 15,
  },
  {
    id: 2,
    name: "Dayavan 11",
    image: "/assets/images/teams/Dayavan 11 - 1.png",
    captain: "Amit",
    players: 15,
  },
  {
    id: 3,
    name: "Gajanan Riders",
    image: "/assets/images/teams/Gajanan Riders 2.png",
    captain: "Rohit",
    players: 15,
  },
  {
    id: 4,
    name: "Irfan Fighters",
    image: "/assets/images/teams/Irfan Fighters 2.png",
    captain: "Irfan",
    players: 15,
  },
  {
    id: 5,
    name: "Sadguru Lions",
    image: "/assets/images/teams/Sadguru Lions.png",
    captain: "Vikas",
    players: 15,
  },
  {
    id: 6,
    name: "Samrat Yodha",
    image: "/assets/images/teams/Samrat Yodha 1.png",
    captain: "Samrat",
    players: 15,
  },
  {
    id: 7,
    name: "Mahalaxmi Warriors",
    image: "/assets/images/teams/Mahalaxmi Warriors.png",
    captain: "Suresh",
    players: 15,
  },
];

export default function TeamGrid() {
  return (
    <section className="teams-grid-section">
      <div className="container">

        {/* ===================================================
            SECTION HEADING
        ==================================================== */}
        <div className="teams-grid-section-heading">
          <h2 className="teams-grid-section-title">
            Tournament Teams
          </h2>
          <p className="teams-grid-section-subtitle">
            Meet the squads competing for the BPL trophy
          </p>
        </div>

        {/* ===================================================
            TEAMS GRID
        ==================================================== */}
        <div className="teams-grid-section-grid">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              name={team.name}
              image={team.image}
              captain={team.captain}
              players={team.players}
            />
          ))}
        </div>

      </div>
    </section>
  );
}