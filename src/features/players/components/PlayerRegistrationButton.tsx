import Link from "next/link";

/* =========================================================
   PLAYER REGISTRATION BUTTON
   Purpose : CTA strip linking to the player registration
             form. Displayed between filters and player grid.
   ========================================================= */
export default function PlayerRegistrationButton() {
  return (
    <div className="player-registration">

      {/* ── Registration Info ── */}
      <div className="player-registration-text">
        <p className="player-registration-label">Want to play in BPL?</p>
        <p className="player-registration-sub">Register yourself and join the league.</p>
      </div>

      {/* ── CTA Link ── */}
      <Link href="/registerPlayer" className="player-registration-btn">
        Register as Player
      </Link>

    </div>
  );
}