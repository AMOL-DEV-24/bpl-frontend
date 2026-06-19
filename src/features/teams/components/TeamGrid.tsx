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

import teamGridData from "@/data/teams/TeamGrid/teamGridData";


export default function TeamGrid() {
  return (
    <section className="teams-grid-section">
      <div className="container">
        {/* ===================================================
            SECTION HEADING
        ==================================================== */}
        <div className="teams-grid-section-heading">
          <h2 className="teams-grid-section-title">Tournament Teams</h2>
          <p className="teams-grid-section-subtitle">
            Meet the squads competing for the BPL trophy
          </p>
        </div>

        {/* ===================================================
            TEAMS GRID
        ==================================================== */}
        <div className="teams-grid-section-grid">
          {teamGridData.map((team) => (
            <TeamCard
              key={team?.id}
              id={team?.id}
              name={team?.name}
              image={team?.image}
              captain={team?.captain}
              players={team?.players}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
