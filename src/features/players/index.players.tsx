"use client";

import { useMemo, useState } from "react";

import PlayerStats from "./components/PlayerStats";
import PlayerFilters from "./components/PlayerFilters";
import PlayerGrid from "./components/PlayerGrid";
import PlayerRegistrationButton from "./components/PlayerRegistrationButton";

const players = [
  {
    id: 1,
    name: "Amol Pawar",
    image: "/players/player-1.jpg",
    role: "BATSMAN",
    matches: 12,
    runs: 356,
    wickets: 0,
    strikeRate: 148.5,
    economy: 0,
    village: "Bhalawani",
  },
  {
    id: 2,
    name: "Rohit",
    image: "/players/player-2.jpg",
    role: "BOWLER",
    matches: 10,
    runs: 50,
    wickets: 15,
    strikeRate: 110,
    economy: 6.2,
    village: "Bhalawani",
  },
  {
    id: 3,
    name: "Sagar",
    image: "/players/player-3.jpg",
    role: "ALL_ROUNDER",
    matches: 11,
    runs: 210,
    wickets: 9,
    strikeRate: 142,
    economy: 7.1,
    village: "Bhalawani",
  },
];

export default function PlayersPage() {
  const [activeRole, setActiveRole] =
    useState("ALL");

  const filteredPlayers =
    useMemo(() => {
      if (activeRole === "ALL") {
        return players;
      }

      return players.filter(
        (player) =>
          player.role === activeRole
      );
    }, [activeRole]);

  return (
    <main className="players-page">

      <section className="page-header">
        <div className="container">
          <h1>Players</h1>

          <p>
            BPL Official Players Directory
          </p>
        </div>
      </section>

      <div className="container">

        <PlayerStats
          total={players.length}
          batsmen={
            players.filter(
              (p) =>
                p.role === "BATSMAN"
            ).length
          }
          bowlers={
            players.filter(
              (p) =>
                p.role === "BOWLER"
            ).length
          }
          keepers={
            players.filter(
              (p) =>
                p.role ===
                "WICKET_KEEPER"
            ).length
          }
          allRounders={
            players.filter(
              (p) =>
                p.role ===
                "ALL_ROUNDER"
            ).length
          }
        />

        <PlayerFilters
          active={activeRole}
          onChange={setActiveRole}
        />

        <PlayerRegistrationButton />

        <PlayerGrid
          players={filteredPlayers}
        />

      </div>

    </main>
  );
}