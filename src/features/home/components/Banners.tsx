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

const banners = [
  {
    id: 1,
    title: "BPL OFFICIAL POSTER",
    image: "/assets/images/banners/BPL Offical Poster.jpeg",
  },
  {
    id: 2,
    title: "Dayavan 11",
    image: "/assets/images/banners/Dayavan 11 Team Poster.jpeg",
  },
  {
    id: 3,
    title: "Gajanan Riders",
    image: "/assets/images/banners/Gajanan Riders Poster.jpeg",
  },
  {
    id: 4,
    title: "Irfan Fighters",
    image: "/assets/images/banners/Irfan Fighters Poster.jpeg",
  },
  {
    id: 5,
    title: "Linge Super Kings",
    image: "/assets/images/banners/Linge Super kings Poster.jpeg",
  },
  {
    id: 6,
    title: "Sadguru Lions",
    image: "/assets/images/banners/Sadguru Lions.png",
  },
  {
    id: 7,
    title: "Samrat Yodha",
    image: "/assets/images/banners/Samrat Yodha Poster.jpeg",
  },
];

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

          {banners.map((banner) => (
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