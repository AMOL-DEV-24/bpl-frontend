/* =========================================================
   TEAMS PREVIEW SECTION
   ---------------------------------------------------------
   Scope   : .teams-preview
   Purpose : Homepage participating teams showcase
   Layout  : Responsive team card grid

   Structure:
   - teams-preview
     - teams-preview-heading
     - teams-preview-grid
       - teams-preview-card
========================================================= */

import Image from "next/image";

import teamPreview from "@/data/home/teamPreview/teamPreviewData";

export default function TeamsPreview() {
  return (
    <section className="teams-preview">
      <div className="container">

        <div className="teams-preview-heading">
          <h2>Participating Teams</h2>

          <p>
            Official teams competing in the
            Bhalawani Premier League.
          </p>
        </div>

        <div className="teams-preview-grid">

          {teamPreview.map((team) => (
            <article
              key={team.id}
              className="teams-preview-card"
            >
              <div className="teams-preview-image">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  className="teams-preview-img"
                />
              </div>

              <div className="teams-preview-content">
                <h3>{team.name}</h3>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}