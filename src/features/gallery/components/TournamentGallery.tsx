/* =========================================================
   TOURNAMENT GALLERY
   ---------------------------------------------------------
   Scope    : .tournament-gallery
   Purpose  : Display tournament photos including
              trophies, ground views and pitch images
   Location : Gallery Page
========================================================= */

import GalleryCard from "./GalleryCard";

/* ---------------------------------------------------------
   TYPES
--------------------------------------------------------- */
interface TournamentGalleryImage {
  id: number;
  image: string;
  title: string;
  featured?: boolean;
}

/* ---------------------------------------------------------
   STATIC GALLERY DATA
--------------------------------------------------------- */
const TOURNAMENT_GALLERY_IMAGES: TournamentGalleryImage[] = [
  {
    id: 1,
    image: "/assets/images/gallery/BPL Trophies.jpeg",
    title: "BPL 2026 Trophies",
    featured: true,
  },
  {
    id: 2,
    image: "/assets/images/gallery/Kazi Ground Pitch 1.jpeg",
    title: "Pitch View 1",
  },
  {
    id: 3,
    image: "/assets/images/gallery/Kazi Ground Pitch 2.jpeg",
    title: "Pitch View 2",
  },
  {
    id: 4,
    image: "/assets/images/gallery/Kazi Ground Pitch 3.jpeg",
    title: "Pitch View 3",
  },
  {
    id: 5,
    image: "/assets/images/gallery/Kazi Ground 1.jpeg",
    title: "Ground View 1",
  },
  {
    id: 6,
    image: "/assets/images/gallery/Kazi Ground 2.jpeg",
    title: "Ground View 2",
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function TournamentGallery() {
  return (
    <section
      className="tournament-gallery"
      aria-label="Tournament Gallery"
    >
      <div className="container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="tournament-gallery-header">

          <span className="tournament-gallery-tag">
            📸 Tournament Moments
          </span>

          <h2 className="tournament-gallery-title">
            Tournament Gallery
          </h2>

          <p className="tournament-gallery-subtitle">
            Explore ground views, pitch preparations,
            trophies and memorable moments from the
            Bhalawani Premier League 2026.
          </p>

        </div>

        {/* =================================================
            GALLERY GRID
        ================================================= */}
        <div className="tournament-gallery-grid">

          {TOURNAMENT_GALLERY_IMAGES.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              featured={item.featured}
            />
          ))}

        </div>

      </div>
    </section>
  );
}