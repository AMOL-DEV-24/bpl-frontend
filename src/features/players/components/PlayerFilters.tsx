interface Props {
  active: string;
  onChange: (role: string) => void;
}

const roles = [
  {
    value: "ALL",
    label: "All",
  },
  {
    value: "BATSMAN",
    label: "Batsmen",
  },
  {
    value: "BOWLER",
    label: "Bowlers",
  },
  {
    value: "ALL_ROUNDER",
    label: "All Rounders",
  },
  {
    value: "WICKET_KEEPER",
    label: "Keepers",
  },
];

export default function PlayerFilters({
  active,
  onChange,
}: Props) {
  return (
    <section className="player-filters">
      {roles.map((role) => (
        <button
          key={role.value}
          onClick={() =>
            onChange(role.value)
          }
          className={
            active === role.value
              ? "active"
              : ""
          }
        >
          {role.label}
        </button>
      ))}
    </section>
  );
}