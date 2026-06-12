/* =========================================================
   SPONSORS COMPONENT
   ---------------------------------------------------------
   Scope   : .sponsors-section
   Purpose : Display official tournament sponsors
   Layout  : Responsive sponsor card grid

   Structure:
   - sponsors-section
     - sponsors-section-heading
     - sponsors-section-grid
       - sponsors-section-card
========================================================= */

interface Sponsor {
  id: number;
  name: string;
}

const SPONSORS: Sponsor[] = [
  { id: 1, name: "Sponsor One" },
  { id: 2, name: "Sponsor Two" },
  { id: 3, name: "Sponsor Three" },
  { id: 4, name: "Sponsor Four" },
];

export default function Sponsors() {
  return (
    <section className="sponsors-section">
      <div className="container">

        <div className="sponsors-section-heading">
          <h2>Official Sponsors</h2>

          <p>
            Proud partners supporting the
            Bhalawani Premier League.
          </p>
        </div>

        <div className="sponsors-section-grid">

          {SPONSORS.map((sponsor) => (
            <article
              key={sponsor.id}
              className="sponsors-section-card"
            >
              <span>{sponsor.name}</span>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}