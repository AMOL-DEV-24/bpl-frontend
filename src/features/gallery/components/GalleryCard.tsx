/* =========================================================
   GALLERY CARD COMPONENT
   ---------------------------------------------------------
   Scope    : .gallery-card
   Purpose  : Modern photo card with overlay + featured mode
========================================================= */
import Image from "next/image";

interface GalleryCardProps {
  image: string;
  title: string;
  featured?: boolean;
}

export default function GalleryCard({
  image,
  title,
  featured = false,
}: GalleryCardProps) {
  return (
    <div
      className={`gallery-card${featured ? " gallery-card--featured" : ""}`}
    >
      {/* Featured tag — only on featured card */}
      {featured && (
        <div className="gallery-card__featured-tag">
          ⭐ Featured
        </div>
      )}

      {/* Image wrapper */}
      <div className="gallery-card__image-wrapper">
        <Image
          src={image}
          alt={title}
          fill
          className="gallery-card__img"
          sizes="(max-width: 576px) 100vw,
                 (max-width: 992px) 50vw,
                 33vw"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="gallery-card__overlay">
          <div className="gallery-card__overlay-content">

            {/* View icon */}
            <div className="gallery-card__view-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>

            {/* Title */}
            <h3 className="gallery-card__title">{title}</h3>

          </div>
        </div>
      </div>
    </div>
  );
}