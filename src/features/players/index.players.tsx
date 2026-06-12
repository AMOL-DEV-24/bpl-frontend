"use client";

import { usePlayers } from "@/redux/modules/player/usePlayers";

import PlayerStats              from "./components/PlayerStats";
import PlayerFilters            from "./components/PlayerFilters";
import PlayerGrid               from "./components/PlayerGrid";
import PlayerRegistrationButton from "./components/PlayerRegistrationButton";

/* =========================================================
   PLAYERS PAGE
   Route   : /players
   Purpose : Root page shell — stats summary, role filters,
             registration CTA, and full player grid.
             Data fetched via usePlayers() RTK Query hook.
   ========================================================= */

export default function PlayersPage() {
  const {
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
  } = usePlayers();

  /* ── Loading State ── */
  if (isLoading) {
    return (
      <main className="players-page">
        <div className="players-page-container">
          <div className="players-page-loader">Loading players...</div>
        </div>
      </main>
    );
  }

  /* ── Error State ── */
  if (isError) {
    return (
      <main className="players-page">
        <div className="players-page-container">
          <div className="players-page-error">Failed to load players. Please try again.</div>
        </div>
      </main>
    );
  }

  return (
    <main className="players-page">

      {/* ── Page Header ── */}
      <section className="players-page-header">
        <div className="players-page-container">
          <h1 className="players-page-title">Players</h1>
          <p className="players-page-subtitle">BPL Official Players Directory</p>
        </div>
      </section>

      {/* ── Page Body ── */}
      <div className="players-page-container">

        {/* ── Role Stats Summary ── */}
        <PlayerStats
          total={stats?.total}
          batsmen={stats?.batsmen}
          bowlers={stats?.bowlers}
          keepers={stats?.keepers}
          allRounders={stats?.allRounders}
        />

        {/* ── Role Filter Tabs ── */}
        <PlayerFilters active={activeRole} onChange={setActiveRole} />

        {/* ── Registration CTA ── */}
        <PlayerRegistrationButton />

        {/* ── Player Grid ── */}
        <PlayerGrid players={filteredPlayers} />

        {/* ── Pagination (only when more than one page exists) ── */}
        {totalPages > 1 && (
          <nav className="players-page-pagination">
            <button
              className="players-page-pagination-btn"
              disabled={page === 1}
              onClick={goToPrevPage}
            >
              Prev
            </button>

            <span className="players-page-pagination-info">
              {page} / {totalPages}
            </span>

            <button
              className="players-page-pagination-btn"
              disabled={page === totalPages}
              onClick={goToNextPage}
            >
              Next
            </button>
          </nav>
        )}

      </div>

    </main>
  );
}