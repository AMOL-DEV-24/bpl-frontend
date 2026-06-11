import Link from "next/link";

export default function PlayerRegistrationButton() {
  return (
    <div className="player-registration">
      <Link
        href="/registerPlayer"
        className="register-btn"
      >
        Register as Player
      </Link>
    </div>
  );
}