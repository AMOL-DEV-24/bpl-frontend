import { useState, useMemo } from "react";
import { useGetPlayersQuery } from "./playerApi";
import type { Player, PlayerRole } from "@/features/players/types";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ActiveRole = PlayerRole | "ALL";

interface UsePlayersReturn {
  players: Player[];
  filteredPlayers: Player[];
  stats: {
    total: number;
    batsmen: number;
    bowlers: number;
    keepers: number;
    allRounders: number;
  };
  activeRole: ActiveRole;
  setActiveRole: (role: ActiveRole) => void;
  page: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  isLoading: boolean;
  isError: boolean;
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function usePlayers(): UsePlayersReturn {
  const [activeRole, setActiveRoleState] = useState<ActiveRole>("ALL");
  const [page, setPage] = useState(1);

  /* =====================================================
     FETCH
  ===================================================== */
  const { data, isLoading, isError } = useGetPlayersQuery({ page, limit: 50 });

  /* =====================================================
     STABLE PLAYERS ARRAY
     Memoized so downstream useMemo hooks don't re-run
     on every render due to a new array reference from
     the `data?.data ?? []` fallback expression.
  ===================================================== */
  const players = useMemo<Player[]>(
    () => (data?.data ?? []).filter((p) => p.status === "approved"),
    [data],
  );

  const totalPages = data?.meta?.totalPages ?? 1;

  /* =====================================================
     CLIENT-SIDE ROLE FILTER
  ===================================================== */
  const filteredPlayers = useMemo(() => {
    if (activeRole === "ALL") return players;
    return players?.filter((p) => p?.role === activeRole);
  }, [players, activeRole]);

  /* =====================================================
     STAT COUNTS — always from full unfiltered list
  ===================================================== */
  const stats = useMemo(
    () => ({
      total: players?.length,
      batsmen: players?.filter((p) => p?.role === "Batsman")?.length,
      bowlers: players?.filter((p) => p?.role === "Bowler")?.length,
      keepers: players?.filter((p) => p?.role === "Wicket Keeper")?.length,
      allRounders: players?.filter((p) => p?.role === "All Rounder")?.length,
    }),
    [players],
  );

  /* =====================================================
     HANDLERS
  ===================================================== */
  const setActiveRole = (role: ActiveRole) => {
    setActiveRoleState(role);
    setPage(1);
  };

  const goToNextPage = () => setPage((p) => Math?.min(p + 1, totalPages));
  const goToPrevPage = () => setPage((p) => Math?.max(p - 1, 1));

  return {
    players,
    filteredPlayers,
    stats,
    activeRole,
    setActiveRole,
    page,
    totalPages,
    goToNextPage,
    goToPrevPage,
    isLoading,
    isError,
  };
}
