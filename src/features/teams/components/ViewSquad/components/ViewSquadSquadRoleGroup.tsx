/* =========================================================
   VIEW SQUAD ROLE GROUP
   ---------------------------------------------------------
   Scope   : .view-squad-role-group
   Purpose : Groups players by role inside View Squad page

   Examples:
   - Batters
   - All-Rounders
   - Bowlers

   Structure:
   .view-squad-role-group
   ├── .view-squad-role-group-heading
   │   └── .view-squad-role-group-count
   └── .view-squad-role-group-grid
       └── ViewSquadPlayerCard
========================================================= */

import { Player } from "../../../../../types/teams/viewSquad.types";
import PlayerCard from "./ViewSquadPlayerCard";

interface SquadRoleGroupProps {
  title: string;
  players: Player[];
}

export default function SquadRoleGroup({
  title,
  players,
}: SquadRoleGroupProps) {
  /* =======================================================
     DO NOT RENDER EMPTY GROUPS
  ======================================================= */
  if (players.length === 0) {
    return null;
  }

  return (
    <section className="view-squad-role-group">

      {/* ===================================================
          ROLE TITLE
      ==================================================== */}
      <h3 className="view-squad-role-group-heading">

        {title}

        <span className="view-squad-role-group-count">
          {players.length}
        </span>

      </h3>

      {/* ===================================================
          PLAYERS GRID
      ==================================================== */}
      <div className="view-squad-role-group-grid">

        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}

      </div>

    </section>
  );
}