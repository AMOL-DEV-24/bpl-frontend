/* =========================================================
   HOME PAGE
   ---------------------------------------------------------
   Route   : / (root)
   Scope   : .home-page  ← all SCSS must nest inside this
   Layout  : Vertical stack of full-width sections
   
   Component Order:
   1. Hero            — above-the-fold banner
   2. Announcements   — latest club news
   3. LiveMatch       — real-time match widget
   4. TournamentStats — standings / stats table
   5. TeamsPreview    — squad cards grid
   6. Banners         — promotional poster strips
   7. Sponsors        — partner logo row
========================================================= */

import Hero from "./components/Hero";
import Announcements from "./components/Announcements";
import LiveMatch from "./components/LiveMatch";

/* ✅ Rename import alias to match file AND domain concept  */
/* Recommended: also rename the file from               */
/* "TournamentsStats.tsx" → "TournamentStats.tsx"       */
import TournamentStats from "./components/TournamentsStats";

import TeamsPreview from "./components/TeamPreview";

/* ✅ Import alias now matches file name and domain concept */
/* Recommended: keep the component name as "Banners"    */
import Banners from "./components/Banners";

import Sponsors from "./components/Sponsors";

/* ---------------------------------------------------------
   Page Component
   ---------------------------------------------------------
   <main> carries the .home-page scope class.
   This is the ONLY element that anchors all SCSS scoping.
   Do NOT remove className="home-page" from <main>.
--------------------------------------------------------- */
export default function HomePage() {
  return (
    <main className="home-page">

      {/* 1 — Hero: full-width above-the-fold section */}
      <Hero />

      {/* 2 — Announcements: latest news & updates */}
      <Announcements />

      {/* 3 — Live Match: real-time score widget */}
      <LiveMatch />

      {/* 4 — Tournament Stats: standings table */}
      <TournamentStats />

      {/* 5 — Teams Preview: squad card grid */}
      <TeamsPreview />

      {/* 6 — Banners: promotional poster strips */}
      <Banners />

      {/* 7 — Sponsors: partner logos */}
      <Sponsors />

    </main>
  );
}