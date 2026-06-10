import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">

        <div className="hero__content">
          <span className="hero__badge">
            🏏 Bhalawani Premier League 2026
          </span>

          <h1 className="hero__title">
            BPL Official
          </h1>

          <p className="hero__description">
            Experience every match, every wicket, every boundary,
            and every championship moment live with Bhalawani
            Premier League.
          </p>

          <div className="hero__actions">
            <Link
              href="/matches"
              className="btn-primary"
            >
              Live Matches
            </Link>

            <Link
              href="/teams"
              className="btn-secondary"
            >
              View Teams
            </Link>
          </div>
        </div>

        <div className="hero__image">
          <Image
            src="/assets/images/hero/bpl-hero-3.png"
            alt="BPL Official"
            width={320}
            height={700}
            priority
          />
        </div>

      </div>
    </section>
  );
}