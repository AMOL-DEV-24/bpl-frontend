/* =========================================================
   VIDEO CARD COMPONENT
   ---------------------------------------------------------
   Scope    : .video-card
   Purpose  : Native HTML5 video player card
              Play, Pause, Mute and Fullscreen
              controls with custom UI.

   Naming   : Flat Component Convention
              No "__"
              No "--"
              Component Scoped
========================================================= */

"use client";

import { useRef, useState } from "react";

interface VideoCardProps {
  title: string;
  description: string;
  src: string;
}

export default function VideoCard({ title, description, src }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  /* =====================================================
     PLAY / PAUSE
  ===================================================== */
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

  /* =====================================================
     MUTE / UNMUTE
  ===================================================== */
  function handleMute() {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;

    setMuted(videoRef.current.muted);
  }

  /* =====================================================
     FULLSCREEN
  ===================================================== */
  function handleFullscreen() {
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }

  /* =====================================================
     VIDEO ENDED
  ===================================================== */
  function handleEnded() {
    setPlaying(false);
  }

  return (
    <article className="video-card">
      {/* =================================================
          VIDEO PLAYER
      ================================================= */}
      <div className="video-card-player-wrapper">
        <video
          ref={videoRef}
          className="video-card-video"
          onEnded={handleEnded}
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={`${src}.mp4`} type="video/mp4" />
          <source src={`${src}.mov`} type="video/quicktime" />
          Your browser does not support HTML5 video.
        </video>

        {/* =================================================
            PLAY OVERLAY
        ================================================= */}
        {!playing && (
          <div
            className="video-card-play-overlay"
            onClick={handlePlayPause}
            role="button"
            tabIndex={0}
            aria-label={`Play ${title}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handlePlayPause();
              }
            }}
          >
            <div className="video-card-play-button">
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

        {/* =================================================
            CONTROLS
        ================================================= */}
        <div className="video-card-controls">
          <button
            className="video-card-control-button"
            onClick={handlePlayPause}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <span className="video-card-control-title">{title}</span>

          <button
            className="video-card-control-button"
            onClick={handleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5 10.5 18H7v-5.5L3 8V4h4.5L12 8.5V4h3v4.5l4.5-4.5L21 5.5 16.5 10l4.5 4.5-1.5 1.5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 9v6h4l5 5V4L9 9H5z" />
              </svg>
            )}
          </button>

          <button
            className="video-card-control-button"
            onClick={handleFullscreen}
            aria-label="Fullscreen"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H5v5zm10 7h-3v2h5v-5h-2v3zm0-12V5h-5v2h3v3h2V5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* =================================================
          VIDEO INFORMATION
      ================================================= */}
      <div className="video-card-info">
        <h3 className="video-card-info-title">{title}</h3>

        <p className="video-card-info-description">{description}</p>
      </div>
    </article>
  );
}
