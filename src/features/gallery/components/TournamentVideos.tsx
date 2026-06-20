/* =========================================================
   TOURNAMENT VIDEOS
   ---------------------------------------------------------
   Scope    : .tournament-videos
   Purpose  : Local BPL showcase videos
   Location : Gallery Page
========================================================= */

import VideoCard from "./VideoCard";

/* ---------------------------------------------------------
   TYPES
--------------------------------------------------------- */
interface TournamentVideos {
  id: number;
  title: string;
  description: string;
  src: string;
  poster?: string;
}

/* ---------------------------------------------------------
   STATIC DATA
--------------------------------------------------------- */
const TournamentVideosData: TournamentVideos[] = [
  {
    id: 1,
    title: "BPL League Intro Video 1",
    description:
      "Official introduction to the Bhalawani Premier League 2026 season.",
    src: "https://res.cloudinary.com/dlvxltdgu/video/upload/v1781942344/u5m8vudip7yegqtmwxin.mp4",
  },
  {
    id: 2,
    title: "BPL League Intro Video 2",
    description:
      "Official introduction to the Bhalawani Premier League 2026 season.",
    src: "https://res.cloudinary.com/dlvxltdgu/video/upload/v1781942328/lboguaimlbgnbgvadtum.mp4",
  },
  {
    id: 3,
    title: "BPL Ground Video",
    description:
      "A walkthrough of the official BPL match ground at Pandharpur.",
    src: "https://res.cloudinary.com/dlvxltdgu/video/upload/v1781942289/rwet3tshyoxkjuvmumas.mp4",
  },
];

/* =========================================================
   COMPONENT
========================================================= */
export default function TournamentVideos() {
  return (
    <section className="tournament-videos" aria-label="Tournament Videos">
      <div className="container">
        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="tournament-videos-header">
          <span className="tournament-videos-tag">🎬 BPL Official</span>

          <h2 className="tournament-videos-title">Tournament Videos</h2>

          <p className="tournament-videos-subtitle">
            Watch the official BPL introduction and ground overview videos from
            the 2026 tournament season.
          </p>
        </div>

        {/* =================================================
            VIDEO GRID
        ================================================= */}
        <div className="tournament-videos-grid">
          {TournamentVideosData.map((video) => (
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
  );
}