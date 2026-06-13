/* =========================================================
   GALLERY GRID COMPONENT
   ---------------------------------------------------------
   Scope    : .gallery-grid-section
   Purpose  : Modern premium photo gallery grid
   Layout   : Featured first image + masonry-style grid
   Location : Gallery page — section 1
========================================================= */
import GalleryCard from "./GalleryCard";

/* ---------------------------------------------------------
   Types
--------------------------------------------------------- */
interface GalleryImage {
  id: number;
  image: string;
  title: string;
  /* featured card spans more columns/rows */
  featured?: boolean;
}

/* ---------------------------------------------------------
   Static Data
   ---------------------------------------------------------
   First item marked featured — renders larger in grid
   giving a modern editorial magazine layout feel.
--------------------------------------------------------- */
const GALLERY_IMAGES: GalleryImage[] = [
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

export default function GalleryGrid() {
  return (
    <section
      className="gallery-grid-section"
      aria-label="Photo Gallery"
    >
      <div className="container">

        {/* Section heading */}
        <div className="gallery-grid-section__heading">
          <span className="gallery-grid-section__heading-tag">
            📸 Tournament Moments
          </span>
          <h2>Photo Gallery</h2>
          <p>Ground, trophies and match moments from BPL 2026</p>
        </div>

        {/* Modern editorial grid */}
        <div className="gallery-grid-section__grid">
          {GALLERY_IMAGES.map((item) => (
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