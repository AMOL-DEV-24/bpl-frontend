"use client";

import { useEffect, useState } from "react";

/* ================= TYPES ================= */

type ThemeType = "dark" | "light";
type ColorType = "red" | "orange" | "green" | "blue" | "pink";

interface ThemeHook {
  theme: ThemeType;
  color: ColorType;
  setTheme: (t: ThemeType) => void;
  setColor: (c: ColorType) => void;
  resetTheme: () => void;
}

/* =========================================================
   HOOK
========================================================= */

export default function useTheme(): ThemeHook {

  // ✅ Default values only — no localStorage here (server safe)
  const [theme, setThemeState] = useState<ThemeType>("dark");
  const [color, setColorState] = useState<ColorType>("blue");

  /* ================= LOAD FROM LOCALSTORAGE (CLIENT ONLY) ================= */

  useEffect(() => {
    // This runs ONLY on client, never on server
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;
    const savedColor = localStorage.getItem("color") as ColorType | null;
    if (savedTheme) setThemeState(savedTheme);
    if (savedColor) setColorState(savedColor);
  }, []); // ← runs once on mount

  /* ================= SYNC DOM ON CHANGE ================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-skin", color);
  }, [color]);

  /* ================= FUNCTIONS ================= */

  const setTheme = (t: ThemeType) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
  };

  const setColor = (c: ColorType) => {
    setColorState(c);
    localStorage.setItem("color", c);
  };

  const resetTheme = () => {
    setThemeState("dark");
    setColorState("blue");
    localStorage.removeItem("theme");
    localStorage.removeItem("color");
  };

  return { theme, color, setTheme, setColor, resetTheme };
}