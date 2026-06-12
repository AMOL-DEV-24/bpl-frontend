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

const teams = [
  {
    id: 1,
    name: "Linge Super Kings",
    image: "/assets/images/teams/Linge Super Kings 1.png",
  },
  {
    id: 2,
    name: "Dayavan 11",
    image: "/assets/images/teams/Dayavan 11 - 1.png",
  },
  {
    id: 3,
    name: "Gajanan Riders",
    image: "/assets/images/teams/Gajanan Riders 2.png",
  },
  {
    id: 4,
    name: "Irfan Fighters",
    image: "/assets/images/teams/Irfan Fighters 2.png",
  },
  {
    id: 5,
    name: "Sadguru Lions",
    image: "/assets/images/teams/Sadguru Lions.png",
  },
  {
    id: 6,
    name: "Samrat Yodha",
    image: "/assets/images/teams/Samrat Yodha 1.png",
  },
  {
    id: 7,
    name: "Mahalaxmi Warriors",
    image: "/assets/images/teams/Mahalaxmi Warriors.png",
  },
];

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

          {teams.map((team) => (
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