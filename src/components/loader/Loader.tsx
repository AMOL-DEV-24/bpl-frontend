"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface LoaderProps {
  isLoading: boolean;
  message?: string;
}

const Loader = ({ isLoading, message = "Processing…" }: LoaderProps) => {
  const portalRoot = useRef<HTMLElement | null>(null);

  useEffect(() => {
    portalRoot.current = document.body;
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading || !portalRoot.current) return null;

  return createPortal(
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="loader-container">
        <div className="loader-ring" />
        <h3 className="loader-text">{message}</h3>
      </div>
    </div>,
    portalRoot.current
  );
};

export default Loader;