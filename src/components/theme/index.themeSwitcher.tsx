"use client";

import { useState } from "react";
import useTheme from "@/hooks/useTheme";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);

  const { setTheme, setColor, resetTheme } = useTheme();

  return (
    <div className="theme-switcher">

      <button
        className="theme-switcher__btn"
        onClick={() => setOpen(!open)}
      >
        🎨 Theme
      </button>

      {open && (
        <div className="theme-switcher__panel">

          <div className="theme-switcher__group">
            <p>Mode</p>
            <button onClick={() => setTheme("dark")}>🌙 Dark</button>
            <button onClick={() => setTheme("light")}>☀ Light</button>
          </div>

          <div className="theme-switcher__group">
            <p>Colors</p>
            <button onClick={() => setColor("red")}>🔴 Red</button>
            <button onClick={() => setColor("orange")}>🟠 Orange</button>
            <button onClick={() => setColor("green")}>🟢 Green</button>
            <button onClick={() => setColor("blue")}>🔵 Blue</button>
            <button onClick={() => setColor("pink")}>🌸 Pink</button>
          </div>

          <div className="theme-switcher__group">
            <button onClick={resetTheme}>♻ Reset</button>
          </div>

        </div>
      )}
    </div>
  );
}