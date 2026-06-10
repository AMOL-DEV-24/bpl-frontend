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
      <div className="topbar__inner">

        {/* LIVE indicator */}
        <div className="topbar__live">
          <span className="dot" />
          LIVE
        </div>

        {/* Animated message */}
        <div className="topbar__message">
          {messages[index]}
        </div>

        {/* Right badge */}
        <div className="topbar__badge">
          BPL 2026
        </div>

      </div>
    </div>
  );
}