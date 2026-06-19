"use client";

import { useEffect, useState } from "react";

import { usePlayers } from "@/redux/modules/player/usePlayers";

import Loader from "@/components/loader/Loader";

import PlayerStats from "./components/PlayerStats";
import PlayerFilters from "./components/PlayerFilters";
import PlayerGrid from "./components/PlayerGrid";
import PlayerRegistrationButton from "./components/PlayerRegistrationButton";

/* =========================================================
   PLAYERS PAGE
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

  /* =======================================================
     LOADER DELAY
  ======================================================= */

  const [loaderFinished, setLoaderFinished] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderFinished(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* =======================================================
     ERROR STATE
  ======================================================= */

  if (isError) {
    return (
      <main className="players-page">
        <div className="players-page-container">
          <div className="players-page-error">
            Failed to load players. Please try again.
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     SHOW LOADER
  ======================================================= */

  if (isLoading || !loaderFinished) {
    return (
      <Loader
        isLoading={true}
        message="Loading Players..."
      />
    );
  }

  /* =======================================================
     PAGE CONTENT
  ======================================================= */

  return (
    <main className="players-page">

      {/* =================================================
         PAGE HEADER
      ================================================= */}

      <section className="players-page-header">
        <div className="players-page-container">

          <h1 className="players-page-title">
            Players
          </h1>

          <p className="players-page-subtitle">
            BPL Official Players Directory
          </p>

        </div>
      </section>

      {/* =================================================
         PAGE BODY
      ================================================= */}

      <div className="players-page-container">

        <PlayerStats
          total={stats?.total}
          batsmen={stats?.batsmen}
          bowlers={stats?.bowlers}
          keepers={stats?.keepers}
          allRounders={stats?.allRounders}
        />

        <PlayerFilters
          active={activeRole}
          onChange={setActiveRole}
        />

        <PlayerRegistrationButton />

        <PlayerGrid
          players={filteredPlayers}
        />

        {totalPages > 1 && (
          <nav className="players-page-pagination">

            <button
              type="button"
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
              type="button"
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