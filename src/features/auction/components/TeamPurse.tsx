/* =========================================================
   TEAM PURSE
   Purpose : Displays remaining purse amount for each team.
   Scope   : Auction Module

   Features
   ---------------------------------------------------------
   - Team Logo
   - Team Name
   - Remaining Purse Amount
   - Section Header
   - Responsive Layout
   - Future-safe CSS namespace

   ========================================================= */

import Image from "next/image";
import teamPurseData from "@/data/auction/teamPurse/teamPurseData";

export default function TeamPurse() {
  return (
    <section className="auction-purse">
      <div className="auction-page-container">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}
        <div className="auction-purse-header">
          <h2 className="auction-purse-heading">
            Team Purse Status
          </h2>

          <p className="auction-purse-subheading">
            Available purse balance for all participating teams.
          </p>
        </div>

        {/* =====================================================
            TEAM PURSE GRID
            ===================================================== */}
        <div className="auction-purse-grid">
          {teamPurseData.map((team) => (
            <article
              key={team.team}
              className="auction-purse-card"
            >
              {/* =================================================
                  TEAM LOGO
                  ================================================= */}
              <div className="auction-purse-card-logo">
                <Image
                  src={team.image}
                  alt={team.team}
                  width={80}
                  height={80}
                />
              </div>

              {/* =================================================
                  TEAM NAME
                  ================================================= */}
              <h3 className="auction-purse-card-title">
                {team.team}
              </h3>

              {/* =================================================
                  PURSE AMOUNT
                  ================================================= */}
              <span className="auction-purse-card-amount">
                ₹ {team.amount}
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}