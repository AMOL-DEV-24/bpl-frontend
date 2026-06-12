"use client";

/* =========================================================
   PLAYER FILTERS
   Purpose : Role-based filter tab strip.
             Active tab highlighted with accent color.
             Role values match API strings exactly.
   ========================================================= */

import type { ActiveRole } from "@/redux/modules/player/usePlayers";

interface PlayerFiltersProps {
  active: ActiveRole;
  onChange: (role: ActiveRole) => void;
}

interface RoleOption {
  value: ActiveRole;
  label: string;
}

const roles: RoleOption[] = [
  { value: "ALL",           label: "All"          },
  { value: "Batsman",       label: "Batsmen"       },
  { value: "Bowler",        label: "Bowlers"       },
  { value: "All Rounder",   label: "All Rounders"  },
  { value: "Wicket Keeper", label: "Keepers"       },
];

export default function PlayerFilters({ active, onChange }: PlayerFiltersProps) {
  return (
    <nav className="player-filters" aria-label="Filter players by role">

      {/* ── Filter Tabs ── */}
      <ul className="player-filters-list">
        {roles?.map((role) => (
          <li key={role?.value} className="player-filters-item">
            <button
              type="button"
              onClick={() => onChange(role?.value)}
              className={`player-filters-btn${active === role?.value ? " player-filters-btn--active" : ""}`}
              aria-pressed={active === role?.value}
            >
              {role?.label}
            </button>
          </li>
        ))}
      </ul>

    </nav>
  );
}