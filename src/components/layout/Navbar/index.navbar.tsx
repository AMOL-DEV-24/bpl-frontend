"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./components/MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Teams", href: "/teams" },
  { label: "Matches", href: "/matches" },
  { label: "Points Table", href: "/pointsTable" },
  { label: "Players", href: "/players" },
  { label: "Register", href: "/registerPlayer" },
  { label: "Auction", href: "/auction" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="container navbar__container">

        {/* LOGO */}
        <Link href="/" className="navbar__logo">
          <span className="logoGlow" />
          BPL <span>Official</span>
        </Link>

        {/* NAV */}
        <nav className="navbar__menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="navbar__right">
          <Link href="/live" className="liveBtn">
            ● Live
          </Link>

          <MobileMenu />
        </div>

      </div>
    </header>
  );
}