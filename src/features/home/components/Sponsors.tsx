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
import sponsorsData from "@/data/home/sponsors/sponsorsData";

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

          {sponsorsData.map((sponsor) => (
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