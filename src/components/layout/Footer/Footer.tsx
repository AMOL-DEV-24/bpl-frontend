/* =========================================================
   FOOTER
   ---------------------------------------------------------
   Scope   : .footer
   Purpose : Site footer, quick links & developer credits

   Structure:
   - footer
     - footer-content
       - footer-brand
       - footer-links
     - footer-dev
     - footer-bottom
========================================================= */

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* ===================================================
           FOOTER CONTENT
        =================================================== */}
        <div className="footer-content">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-brand-logo">
              <Image
                src="/assets/images/hero/bpl-hero-1.png"
                alt="BPL Logo"
                width={70}
                height={70}
              />
            </div>

            <h3>BPL Official</h3>

            <p>
              Official website of Bhalawani Premier League.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">

            <h4>Quick Links</h4>

            <ul>
              <li>Teams</li>
              <li>Matches</li>
              <li>Auction</li>
              <li>Gallery</li>
            </ul>

          </div>

        </div>

        {/* ===================================================
           DEVELOPER CREDIT
        =================================================== */}
        <div className="footer-dev">

          Developed by{" "}

          <Link
            href="https://amolpawar.netlify.app/"
            target="_blank"
            className="footer-dev-link"
          >
            Amol Pawar
          </Link>

        </div>

        {/* ===================================================
           COPYRIGHT
        =================================================== */}
        <div className="footer-bottom">
          © 2026 BPL Official. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}