/* =========================================================
   VIEW SQUAD PLAYER CARD
   ---------------------------------------------------------
   Scope   : .view-squad-player-card
   Purpose : Premium squad player card

   Features:
   ✅ Large player image
   ✅ Captain badge
   ✅ Role icon
   ✅ Future API safe
   ✅ Fully scoped
========================================================= */

import Image from "next/image";

import {
  GiCricketBat,
  GiGoalKeeper,
} from "react-icons/gi";

import { FaBaseballBall } from "react-icons/fa";

import { Player } from "../../../../../types/teams/viewSquad.types";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({
  player,
}: PlayerCardProps) {
  const {
    name,
    role,
    isCaptain,
    photo,
  } = player;

  /* =======================================================
     ROLE ICON
  ======================================================= */
  const getRoleIcon = () => {
    switch (role) {
      case "Batter":
        return <GiCricketBat />;

      case "WK-Batter":
        return <GiGoalKeeper />;

      case "Bowler":
        return <FaBaseballBall />;

      case "All-Rounder":
        return (
          <div className="view-squad-player-card-role-icon-group">
            <GiCricketBat />
            <FaBaseballBall />
          </div>
        );

      default:
        return <GiCricketBat />;
    }
  };

  return (
    <article className="view-squad-player-card">

      {/* ===================================================
          PLAYER IMAGE AREA
      ==================================================== */}
      <div className="view-squad-player-card-image">

        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="view-squad-player-card-image-img"
          />
        ) : (
          <div className="view-squad-player-card-image-fallback">
            👤
          </div>
        )}

        {/* ===================================================
            CAPTAIN BADGE
        ==================================================== */}
        {isCaptain && (
          <span className="view-squad-player-card-captain-badge">
            C
          </span>
        )}

        {/* ===================================================
            ROLE ICON
        ==================================================== */}
        <div className="view-squad-player-card-role-icon">
          {getRoleIcon()}
        </div>

      </div>

      {/* ===================================================
          PLAYER CONTENT
      ==================================================== */}
      <div className="view-squad-player-card-content">

        {/* PLAYER NAME */}
        <h4 className="view-squad-player-card-name">
          {name}
        </h4>

        {/* PLAYER ROLE */}
        <span className="view-squad-player-card-role">
          {role}
        </span>

      </div>

    </article>
  );
}