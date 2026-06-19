"use client";

import { createPortal } from "react-dom";

/* =========================================================
   PROPS
========================================================= */

interface LoaderProps {
  isLoading: boolean;
  message?: string;
}

/* =========================================================
   LOADER
========================================================= */

export default function Loader({
  isLoading,
  message = "Processing...",
}: LoaderProps) {
  /* =======================================================
     HIDE LOADER
  ======================================================= */

  if (
    typeof window === "undefined" ||
    !isLoading
  ) {
    return null;
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return createPortal(
    <div
      className="loader-overlay"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loader-container">

        <div className="loader-ring" />

        <h3 className="loader-text">
          {message}
        </h3>

      </div>
    </div>,
    document.body
  );
}