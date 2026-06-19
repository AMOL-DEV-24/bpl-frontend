/* =========================================================
   VIEW SQUAD HEADER
   ---------------------------------------------------------
   Premium Team Header
========================================================= */

import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

import { TeamSquad } from "../../../../../types/teams/viewSquad/viewSquad.types";

interface SquadHeaderProps {
  squad: TeamSquad;
}

export default function SquadHeader({
  squad,
}: SquadHeaderProps) {
  const {
    teamName,
    teamImage,
    captain,
    owner,
    coach,
    venue,
    achievement,
    players,
  } = squad;

  return (
    <section className="view-squad-header">

      {/* ===================================================
          TEAM DETAILS
      ==================================================== */}
      <div className="view-squad-header-team">

        {/* =================================================
            TEAM LOGO
        ================================================== */}
        <div className="view-squad-header-logo">
          <Image
            src={teamImage}
            alt={teamName}
            fill
            className="view-squad-header-logo-img"
          />
        </div>

        {/* =================================================
            INFO
        ================================================== */}
        <div className="view-squad-header-info">

          {/* =================================================
              ACHIEVEMENT BADGE
          ================================================== */}
          {achievement && (
            <div className="view-squad-header-achievement">

              <FaTrophy />

              <span>
                {achievement}
              </span>

            </div>
          )}

          <h1 className="view-squad-header-name">
            {teamName}
          </h1>

          <div className="view-squad-header-meta">

            {owner && (
              <div className="view-squad-header-meta-item">
                <span>Owner</span>
                <strong>{owner}</strong>
              </div>
            )}

            <div className="view-squad-header-meta-item">
              <span>Captain</span>
              <strong>{captain}</strong>
            </div>

            {coach && (
              <div className="view-squad-header-meta-item">
                <span>Coach</span>
                <strong>{coach}</strong>
              </div>
            )}

            {venue && (
              <div className="view-squad-header-meta-item">
                <span>Home Ground</span>
                <strong>{venue}</strong>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* ===================================================
          PLAYER COUNT
      ==================================================== */}
      <div className="view-squad-header-count">

        <strong>
          {players.length}
        </strong>

        <span>
          Players
        </span>

      </div>

    </section>
  );
}