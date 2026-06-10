"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Teams", href: "/teams" },
  { label: "Matches", href: "/matches" },
  { label: "Points Table", href: "/pointsTable" },
  { label: "Players", href: "/players" },
  { label: "Register", href: "/registerPlayer" },
  { label: "Auction", href: "/auction" },
  { label: "Gallery", href: "/gallery" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="mobile-menu__btn"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`mobile-menu__overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div className={`mobile-menu__drawer ${open ? "open" : ""}`}>

        <div className="mobile-menu__header">
          <h3>BPL Menu</h3>

          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="mobile-menu__nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </>
  );
}