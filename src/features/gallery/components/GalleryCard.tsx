/* =========================================================
   GALLERY CARD COMPONENT
   ---------------------------------------------------------
   Scope    : .gallery-card
   Purpose  : Modern photo card with hover overlay
              and featured mode support.
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
    <article
      className={`gallery-card ${
        featured ? "gallery-card-featured" : ""
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="gallery-card-featured-tag">
          ⭐ Featured
        </div>
      )}

      {/* Image wrapper */}
      <div className="gallery-card-image-wrapper">

        <Image
          src={image}
          alt={title}
          fill
          className="gallery-card-image"
          sizes="
            (max-width: 576px) 100vw,
            (max-width: 992px) 50vw,
            33vw
          "
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="gallery-card-overlay">

          <div className="gallery-card-overlay-content">

            {/* View icon */}
            <div className="gallery-card-view-icon">
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            {/* Image title */}
            <h3 className="gallery-card-title">
              {title}
            </h3>

          </div>

        </div>

      </div>
    </article>
  );
}