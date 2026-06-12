/* =========================================================
   TEAM CARD
   ---------------------------------------------------------
   Scope   : .team-card
   Purpose : Team showcase card for Teams page
   Layout  : Glassmorphism card with image, content and meta

   Structure:
   .team-card
   ├── .team-card-image
   │   ├── .team-card-img
   │   └── .team-card-image-overlay
   ├── .team-card-content
   ├── .team-card-title
   ├── .team-card-meta
   │   └── .team-card-meta-item
   └── .team-card-button
========================================================= */

import Image from "next/image";

interface TeamCardProps {
  name: string;
  image: string;
  captain: string;
  players: number;
}

export default function TeamCard({
  name,
  image,
  captain,
  players,
}: TeamCardProps) {
  return (
    <article className="team-card">

      {/* ===================================================
          TEAM LOGO / IMAGE
      ==================================================== */}
      <div className="team-card-image">

        <Image
          src={image}
          alt={name}
          fill
          className="team-card-img"
        />

        <div className="team-card-image-overlay" />

      </div>

      {/* ===================================================
          TEAM CONTENT
      ==================================================== */}
      <div className="team-card-content">

        <h3 className="team-card-title">
          {name}
        </h3>

        <div className="team-card-meta">

          <div className="team-card-meta-item">
            <span>Captain</span>
            <strong>{captain}</strong>
          </div>

          <div className="team-card-meta-item">
            <span>Players</span>
            <strong>{players}</strong>
          </div>

        </div>

        <button
          type="button"
          className="team-card-button"
        >
          View Squad
        </button>

      </div>

    </article>
  );
}