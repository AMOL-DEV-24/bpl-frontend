/* =========================================================
   VIEW SQUAD
   ---------------------------------------------------------
   Scope   : .view-squad-page
   Purpose : Full squad page for a single team

   Structure:
   .view-squad-page
   └── .view-squad-page-groups
========================================================= */

import { TeamSquad } from "../../../../types/teams/viewSquad.types";
import SquadHeader from "./components/ViewSquadHeader";
import SquadRoleGroup from "./components/ViewSquadSquadRoleGroup";

interface ViewSquadProps {
  squad: TeamSquad;
}

export default function ViewSquad({
  squad,
}: ViewSquadProps) {
  const batters = squad.players.filter(
    (player) =>
      player.role === "Batter" ||
      player.role === "WK-Batter"
  );

  const allRounders = squad.players.filter(
    (player) => player.role === "All-Rounder"
  );

  const bowlers = squad.players.filter(
    (player) => player.role === "Bowler"
  );

  return (
    <section className="view-squad-page">

      <SquadHeader squad={squad} />

      <div className="view-squad-page-groups">

        <SquadRoleGroup
          title="Batters"
          players={batters}
        />

        <SquadRoleGroup
          title="All-Rounders"
          players={allRounders}
        />

        <SquadRoleGroup
          title="Bowlers"
          players={bowlers}
        />

      </div>

    </section>
  );
}