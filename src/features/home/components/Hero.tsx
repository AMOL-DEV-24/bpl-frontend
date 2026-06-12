/* =========================================================
   HERO COMPONENT
   ---------------------------------------------------------
   Scope    : .hero-section
   Purpose  : Above-the-fold full-width tournament banner
   Location : Home page — section 1 (first visible section)
========================================================= */
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    /* =====================================================
       Root element — SCSS scope boundary
       className MUST stay "hero-section"
       aria-label gives screen readers landmark context
    ===================================================== */
    <section
      className="hero-section"
      aria-label="Bhalawani Premier League Hero Banner"
    >
      <div className="hero-section__container">

        {/* Left — text content column */}
        <div className="hero-section__content">

          {/* Tournament badge / pill */}
          <div className="hero-section__badge">
            {/* aria-hidden prevents screen reader
                announcing the cricket emoji as text  */}
            <span aria-hidden="true">🏏</span>
            Bhalawani Premier League 2026
          </div>

          {/* Primary heading */}
          <h1 className="hero-section__title">
            BPL Official
          </h1>

          {/* Subtitle description */}
          <p className="hero-section__description">
            Experience every match, every wicket, every boundary,
            and every championship moment live with Bhalawani
            Premier League.
          </p>

          {/* CTA buttons */}
          <div className="hero-section__actions">

            <Link
              href="/matches"
              className="hero-section__btn hero-section__btn--primary"
            >
              Live Matches
            </Link>

            <Link
              href="/teams"
              className="hero-section__btn hero-section__btn--secondary"
            >
              View Teams
            </Link>

          </div>
        </div>

        {/* Right — hero image column */}
        <div className="hero-section__image-wrapper">
          <Image
            src="/assets/images/hero/bpl-hero-3.png"
            alt="BPL Official tournament hero visual"
            width={320}
            height={700}
            priority
            /* sizes tells Next.js what width to serve
               at each viewport — prevents oversized images */
            sizes="(max-width: 576px) 80vw,
                   (max-width: 992px) 40vw,
                   320px"
            className="hero-section__image"
          />
        </div>

      </div>
    </section>
  );
}