import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__content">

          {/* Logo + Brand */}
          <div className="footer__brand">
            <Image
              src="/assets/images/hero/bpl-hero-1.png"
              alt="BPL Logo"
              width={50}
              height={50}
            />

            <h3>BPL Official</h3>

            <p>
              Official website of Bhalawani Premier League.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4>Quick Links</h4>

            <ul>
              <li>Teams</li>
              <li>Matches</li>
              <li>Auction</li>
              <li>Gallery</li>
            </ul>
          </div>

        </div>

        {/* =========================================================
           DEVELOPER CREDIT SECTION
        ========================================================= */}
        <div className="footer__dev">
          Developed by{" "}
          <Link
            href="https://amolpawar.netlify.app/"
            target="_blank"
            className="footer__devLink"
          >
            Amol Pawar
          </Link>
        </div>

        <div className="footer__bottom">
          © 2026 BPL Official
        </div>

      </div>
    </footer>
  );
}