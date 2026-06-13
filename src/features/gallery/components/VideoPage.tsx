/* =========================================================
   VIDEOS PAGE
   ---------------------------------------------------------
   Scope    : .videos-page
   Purpose  : Local video showcase page
   Route    : /videos
========================================================= */

import VideoCard from "./VideoCard";

/* ---------------------------------------------------------
   Types
--------------------------------------------------------- */
interface Video {
  id: number;
  title: string;
  description: string;
  src: string;
  poster?: string;
}

/* ---------------------------------------------------------
   Static Data
   ---------------------------------------------------------
   src points to /assets/videos/ in public folder.
   Add poster image path for thumbnail before play.
   Both mp4 and mov supported via <source> tags.
--------------------------------------------------------- */
const VIDEOS: Video[] = [
  {
    id: 1,
    title: "BPL League Intro Video",
    description:
      "Official introduction to the Bhalawani Premier League 2026 season.",
    src: "/assets/videos/gallery/BPL 2026",
  },
  {
    id: 2,
    title: "BPL Ground Video",
    description:
      "A walkthrough of the official BPL match ground at Pandharpur.",
    src: "/assets/videos/gallery/Kazi Maidan Grond Overview",
  },
];

export default function VideosPage() {
  return (
    <main className="videos-page">

      {/* Page header */}
      <section
        className="videos-page__header"
        aria-label="Videos page header"
      >
        <div className="container">

          <span className="videos-page__header-tag">
            🎬 BPL Official
          </span>

          <h1 className="videos-page__header-title">
            Match Videos
          </h1>

          <p className="videos-page__header-subtitle">
            Official BPL intro, ground footage and
            match highlights from the 2026 season.
          </p>

        </div>
      </section>

      {/* Video grid */}
      <section
        className="videos-page__grid-section"
        aria-label="Video gallery"
      >
        <div className="container">

          <div className="videos-page__grid">
            {VIDEOS.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                src={video.src}
              />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}