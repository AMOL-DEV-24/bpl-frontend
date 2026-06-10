import Link from "next/link";

export default function PlayerRegistrationButton() {
  return (
    <div className="player-registration">
      <Link
        href="/registerPlayer"
        className="btn-primary"
      >
        Register As Player
      </Link>
    </div>
  );
}