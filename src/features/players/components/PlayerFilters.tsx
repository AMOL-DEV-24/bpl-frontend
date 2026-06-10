interface Props {
  active: string;
  onChange: (role: string) => void;
}

export default function PlayerFilters({
  active,
  onChange,
}: Props) {
  const roles = [
    "ALL",
    "BATSMAN",
    "BOWLER",
    "ALL ROUNDER",
    "WICKET KEEPER",
  ];

  return (
    <div className="player-filters">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onChange(role)}
          className={
            active === role
              ? "active"
              : ""
          }
        >
          {role}
        </button>
      ))}
    </div>
  );
}