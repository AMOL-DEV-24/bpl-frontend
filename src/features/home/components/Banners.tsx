/* =========================================================
   BANNERS SECTION
   ---------------------------------------------------------
   Scope   : .banners-section
   Purpose : Team posters & promotional banners showcase
   Layout  : Responsive poster grid

   Structure:
   - banners-section
     - banners-section-heading
     - banners-section-grid
       - banners-section-card
========================================================= */

import Image from "next/image";
import bannersData from "@/data/home/banners/bannersData";

export default function Banners() {
  return (
    <section className="banners-section">
      <div className="container">

        <div className="banners-section-heading">
          <h2>Team Banners</h2>

          <p>
            Official promotional posters from the
            Bhalawani Premier League.
          </p>
        </div>

        <div className="banners-section-grid">

          {bannersData.map((banner) => (
            <article
              key={banner.id}
              className="banners-section-card"
            >
              <div className="banners-section-image">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="banners-section-img"
                />
              </div>

              <div className="banners-section-content">
                <h3>{banner.title}</h3>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}