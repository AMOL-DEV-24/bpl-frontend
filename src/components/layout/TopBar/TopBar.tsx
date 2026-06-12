"use client";

import { useEffect, useState } from "react";

const messages = [
  "🏏 Welcome to BPL Official",
  "🔥 Bhalawani Premier League 2026 Season",
  "🏆 Play • Compete • Dominate",
  "📺 Live Matches Coming Soon",
  "⚡ Experience Village Cricket Like Never Before",
];

export default function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar">

      <div className="container">

        <div className="topbar-inner">

          {/* Live Status */}
          <div className="topbar-live">
            <span className="topbar-live-dot" />
            <span>LIVE</span>
          </div>

          {/* Rotating Message */}
          <div className="topbar-message">
            {messages[index]}
          </div>

          {/* Season Badge */}
          <div className="topbar-badge">
            Season 2026
          </div>

        </div>

      </div>

    </div>
  );
}