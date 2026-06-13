/* =========================================================
   VIDEO CARD COMPONENT
   ---------------------------------------------------------
   Scope    : .video-card
   Purpose  : Native HTML5 video player card
              Click to play, fullscreen button, title label
========================================================= */

"use client";

import { useRef, useState } from "react";

interface VideoCardProps {
  title: string;
  description: string;
  src: string;
}

export default function VideoCard({
  title,
  description,
  src,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  /* ---------------------------------------------------
     Toggle play / pause on click
  --------------------------------------------------- */
  function handlePlayPause() {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }

  /* ---------------------------------------------------
     Toggle mute
  --------------------------------------------------- */
  function handleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  /* ---------------------------------------------------
     Native fullscreen API
  --------------------------------------------------- */
  function handleFullscreen() {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }

  /* ---------------------------------------------------
     Sync state when video ends naturally
  --------------------------------------------------- */
  function handleEnded() {
    setPlaying(false);
  }

  return (
    <div className="video-card">

      {/* ================================================
          VIDEO PLAYER WRAPPER
          Aspect ratio 16:9 — standard video dimensions
      ================================================ */}
      <div className="video-card__player-wrapper">

        {/* Native HTML5 video — supports mp4 + mov */}
        <video
          ref={videoRef}
          className="video-card__video"
          onEnded={handleEnded}
          playsInline
          preload="metadata"
          aria-label={title}
        >
          {/* mp4 first — best browser support */}
          <source src={`${src}.mp4`}  type="video/mp4" />
          {/* mov fallback — Safari / local recordings */}
          <source src={`${src}.mov`}  type="video/quicktime" />
          Your browser does not support HTML5 video.
        </video>

        {/* =============================================
            PLAY OVERLAY
            Shows when video is paused.
            Click anywhere on overlay to play.
        ============================================= */}
        {!playing && (
          <div
            className="video-card__play-overlay"
            onClick={handlePlayPause}
            role="button"
            tabIndex={0}
            aria-label={`Play ${title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handlePlayPause();
              }
            }}
          >
            {/* Big play button circle */}
            <div className="video-card__play-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* =============================================
            VIDEO CONTROLS BAR
            Always visible at bottom of video.
        ============================================= */}
        <div className="video-card__controls">

          {/* Play / Pause */}
          <button
            className="video-card__control-btn"
            onClick={handlePlayPause}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              /* Pause icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              /* Play icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Video title in controls */}
          <span className="video-card__control-title">
            {title}
          </span>

          {/* Mute / Unmute */}
          <button
            className="video-card__control-btn"
            onClick={handleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              /* Muted icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              /* Sound icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>

          {/* Fullscreen */}
          <button
            className="video-card__control-btn"
            onClick={handleFullscreen}
            aria-label="Fullscreen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          </button>

        </div>
      </div>

      {/* ================================================
          CARD INFO BELOW VIDEO
      ================================================ */}
      <div className="video-card__info">
        <h3 className="video-card__info-title">{title}</h3>
        <p className="video-card__info-description">{description}</p>
      </div>

    </div>
  );
}