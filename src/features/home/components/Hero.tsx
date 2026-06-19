/* =========================================================
   HERO COMPONENT
   ---------------------------------------------------------
   Scope    : .hero-section
   Purpose  : Above-the-fold tournament banner
========================================================= */

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-section"
      aria-label="Bhalawani Premier League Hero Banner"
    >
      <div className="hero-section-container">

        {/* Content */}
        <div className="hero-section-content">

          <div className="hero-section-badge">
            <span aria-hidden="true">🏏</span>
            Bhalawani Premier League 2026
          </div>

          <h1 className="hero-section-title">
            BPL Official
          </h1>

          <p className="hero-section-description">
            Experience every match, every wicket,
            every boundary and every championship
            moment live with Bhalawani Premier League.
          </p>

          <div className="hero-section-actions">

            <Link
              href="/matches"
              className="
                hero-section-button
                hero-section-button-primary
              "
            >
              Live Matches
            </Link>

            <Link
              href="/teams"
              className="
                hero-section-button
                hero-section-button-secondary
              "
            >
              View Teams
            </Link>

          </div>

        </div>

        {/* Image */}
        <div className="hero-section-image-wrapper">

          <Image
            src="/assets/images/hero/bpl-hero-3.png"
            alt="BPL Official tournament hero visual"
            width={320}
            height={700}
            priority
            sizes="
              (max-width: 576px) 80vw,
              (max-width: 992px) 40vw,
              320px
            "
            className="hero-section-image"
          />

        </div>

      </div>
    </section>
  );
}