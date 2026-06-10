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
  const [theme, setThemeState] = useState<ThemeType>(
    () => (localStorage.getItem("theme") as ThemeType | null) ?? "dark"
  );
  const [color, setColorState] = useState<ColorType>(
    () => (localStorage.getItem("color") as ColorType | null) ?? "blue"
  );

  /* ================= SYNC DOM ON MOUNT + CHANGE ================= */

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
    setTheme("dark");
    setColor("blue");
    localStorage.removeItem("theme");
    localStorage.removeItem("color");
  };

  return { theme, color, setTheme, setColor, resetTheme };
}