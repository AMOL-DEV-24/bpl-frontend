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

  // ✅ Read localStorage only if window exists (client only)
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window === "undefined") return "dark";
    return (localStorage.getItem("theme") as ThemeType) ?? "dark";
  });

  const [color, setColorState] = useState<ColorType>(() => {
    if (typeof window === "undefined") return "blue";
    return (localStorage.getItem("color") as ColorType) ?? "blue";
  });

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