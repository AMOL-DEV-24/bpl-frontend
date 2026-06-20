/**
 * @file        Champions.tsx
 * @description BPL Hall of Champions — Warp Gate Design
 * @project     Bhalawani Premier League (BPL) — Season 1, 2026
 *
 * Responsive Strategy
 * ─────────────────────────────────────────────────────────
 * xxs–sm : Single column. Logo centered at top of card.
 * md+    : Two column. Logo in right panel. Left = content.
 */

"use client";

import Image from "next/image";
import { champions, type Champion } from "@/data/home/champions/championsData";

// ─────────────────────────────────────────────────────────
// TROPHY ICON
// ─────────────────────────────────────────────────────────

function TrophyIcon() {
  return (
    <svg
      className="champions-trophy-svg"
      width="13"
      height="17"
      viewBox="0 0 44 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 4L34 4L31 25Q30 37 22 41Q14 37 13 25Z"
        className="champions-trophy-gold"
      />
      <path d="M14 6L18 6L17 22L14 22Z" fill="white" opacity={0.18} />
      <path
        d="M10 9Q2 9 2 17Q2 25 10 25"
        className="champions-trophy-stroke"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 9Q42 9 42 17Q42 25 34 25"
        className="champions-trophy-stroke"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="18" y="41" width="8"  height="8"   rx="1.5" className="champions-trophy-dark" />
      <rect x="11" y="48" width="22" height="4"   rx="2"   className="champions-trophy-gold" />
      <rect x="8"  y="51" width="28" height="3.5" rx="1.75" className="champions-trophy-dark" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────
// META ROW
// ─────────────────────────────────────────────────────────

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="champions-meta-row">
      <span className="champions-meta-dot" aria-hidden="true" />
      <span className="champions-meta-text">
        {label} — <strong>{value}</strong>
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// STAT CELL
// ─────────────────────────────────────────────────────────

function StatCell({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="champions-stat">
      <span className="champions-stat-value">{value}</span>
      <span className="champions-stat-label">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// LOGO FRAME — reused in both mobile + desktop slots
// ─────────────────────────────────────────────────────────

function LogoFrame({
  src,
  name,
  size,
}: {
  src: string;
  name: string;
  size: number;
}) {
  return (
    <div className="champions-logo-frame">
      <div className="champions-logo-neon-border" aria-hidden="true" />
      <Image
        src={src}
        alt={`${name} team logo`}
        width={size}
        height={size}
        priority
        className="champions-logo-image"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// CHAMPION CARD
// ─────────────────────────────────────────────────────────

function ChampionCard({ champion, rank }: { champion: Champion; rank: number }) {
  const rankLabel    = `#${String(rank).padStart(2, "0")}`;
  const captainShort = champion.captain
    .split(" ")
    .map((p: string, i: number) => (i === 0 ? p : `${p[0]}.`))
    .join(" ");

  const words = champion.teamName.split(" ");

  return (
    <article
      className="champions-card"
      aria-label={`${champion.teamName} — BPL Season ${champion.season} Champions`}
    >
      {/* Decorative layers */}
      <div className="champions-scanlines"    aria-hidden="true" />
      <div className="champions-neon-top"     aria-hidden="true" />
      <div className="champions-neon-bottom"  aria-hidden="true" />

      {/* ── MOBILE LOGO (xxs → sm) ── */}
      <div className="champions-mobile-logo-wrap">
        <div className="champions-mobile-logo-glow" aria-hidden="true" />
        <LogoFrame src={champion.logo} name={champion.teamName} size={160} />
      </div>

      {/* ── CARD BODY ── */}
      <div className="champions-card-body">

        {/* LEFT */}
        <div className="champions-card-left">

          <div className="champions-left-top">
            <p className="champions-eyebrow">
              Bhalawani Premier League · Hall of Champions
            </p>

            <h3 className="champions-team-name">
              {words.map((word: string, i: number) => (
                <span
                  key={i}
                  className={
                    i === words.length - 1
                      ? "champions-name-gold"
                      : "champions-name-white"
                  }
                >
                  {word}{i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </h3>

            <p className="champions-caption">{champion.description}</p>
          </div>

          <div className="champions-left-bottom">
            <MetaRow label="Captain" value={champion.captain} />
            <MetaRow label="Squad"   value={`${champion.squadSize} Players`} />
            <MetaRow
              label="Season"
              value={`${String(champion.season).padStart(2, "0")} · ${champion.year}`}
            />

            <div className="champions-badge">
              <TrophyIcon />
              <span>BPL Champions {champion.year}</span>
            </div>
          </div>

        </div>

        {/* RIGHT — desktop logo (md+) */}
        <div className="champions-card-right">
          <div className="champions-desktop-logo-glow" aria-hidden="true" />
          <LogoFrame src={champion.logo} name={champion.teamName} size={220} />
        </div>

      </div>

      {/* STAT STRIP */}
      <div className="champions-stat-strip">
        <StatCell value={captainShort}           label="Captain" />
        <StatCell value={champion.squadSize}      label="Squad"   />
        <StatCell value={`S${champion.season}`}   label="Season"  />
        <StatCell value={champion.year}           label="Year"    />
      </div>

    </article>
  );
}

// ─────────────────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────────────────

export default function Champions() {
  return (
    <section className="champions">
      <div className="champions-container">

        <header className="champions-header">
          <span className="champions-kicker">
            <span className="champions-kicker-dot" aria-hidden="true" />
            Hall of Champions
            <span className="champions-kicker-dot" aria-hidden="true" />
          </span>
          <h2 className="champions-title">Inaugural Champions</h2>
          <p className="champions-summary">
            Celebrating the first team to lift the BPL trophy and begin
            a legacy that future generations will chase.
          </p>
        </header>

        <div className="champions-grid">
          {champions.map((champion: Champion, index: number) => (
            <ChampionCard
              key={champion.id}
              champion={champion}
              rank={index + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}