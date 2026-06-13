/* =========================================================
   VIDEO HIGHLIGHTS COMPONENT
   ---------------------------------------------------------
   Scope    : .video-highlights-section
   Purpose  : Embedded YouTube match highlight reels
   Location : Gallery page — section 2
========================================================= */

/* ---------------------------------------------------------
   Types
--------------------------------------------------------- */
interface VideoHighlight {
  id: number;
  src: string;
  title: string;
  upcoming?: boolean;
}

/* ---------------------------------------------------------
   Static Data
--------------------------------------------------------- */
const VIDEO_HIGHLIGHTS: VideoHighlight[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/tT_A4hvEzqM",
    title: "BPL Live Match",
  },
  {
    id: 2,
    src: "",
    title: "Match Highlight 1",
    upcoming: true,                                     // ← upcoming
  }
];

export default function VideoHighlights() {
  return (
    <section
      className="video-highlights-section"
      aria-label="Match Video Highlights"
    >
      <div className="container">

        {/* Section heading */}
        <div className="video-highlights-section__heading">
          <h2>Match Highlights</h2>
        </div>

        {/* Video grid */}
        <div className="video-highlights-section__grid">

          {VIDEO_HIGHLIGHTS.map((video) => (
            <div
              key={video.id}
              className={`video-highlights-section__card${
                video.upcoming ? " video-highlights-section__card--upcoming" : ""
              }`}
            >

              {/* Upcoming badge */}
              {video.upcoming && (
                <div className="video-highlights-section__badge">
                  🕐 Upcoming
                </div>
              )}

              {/* Aspect ratio wrapper */}
              <div className="video-highlights-section__iframe-wrapper">

                {/* Overlay blocks interaction for upcoming videos */}
                {video.upcoming && (
                  <div className="video-highlights-section__upcoming-overlay">
                    <span>Coming Soon</span>
                  </div>
                )}

                <iframe
                  src={video.src}
                  title={video.title}
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; autoplay;
                         clipboard-write; encrypted-media;
                         gyroscope; picture-in-picture"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}