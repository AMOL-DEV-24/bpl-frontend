/* =========================================================
   MATCH HIGHLIGHTS COMPONENT
   ---------------------------------------------------------
   Scope    : .match-highlights
   Purpose  : Embedded YouTube match highlight videos
   Location : Gallery Page
   Notes    :
   - Flat naming convention
   - Component-scoped classes
   - No BEM nesting
   - Future-safe and maintainable
========================================================= */

/* ---------------------------------------------------------
   TYPES
--------------------------------------------------------- */
interface MatchHighlight {
  id: number;
  src: string;
  title: string;
  upcoming?: boolean;
}

/* ---------------------------------------------------------
   STATIC DATA
--------------------------------------------------------- */
const MATCH_HIGHLIGHTS: MatchHighlight[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/tT_A4hvEzqM",
    title: "BPL Live Match Day 1",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/yhDVqEItPvs",
    title: "BPL Live Match Day 2",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/9nep2oxT1DQ",
    title: "BPL Live Match Day 3",
  },

  /* Example upcoming video

  {
    id: 4,
    src: "",
    title: "BPL Final Highlights",
    upcoming: true,
  },

  */
];

/* =========================================================
   COMPONENT
========================================================= */
export default function MatchHighlights() {
  return (
    <section
      className="match-highlights"
      aria-label="Match Highlights"
    >
      <div className="container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="match-highlights-header">

          <span className="match-highlights-tag">
            🎬 Match Videos
          </span>

          <h2 className="match-highlights-title">
            Match Highlights
          </h2>

          <p className="match-highlights-subtitle">
            Watch official BPL live streams, match highlights,
            and memorable moments from the tournament.
          </p>

        </div>

        {/* =================================================
            VIDEO GRID
        ================================================= */}
        <div className="match-highlights-grid">

          {MATCH_HIGHLIGHTS.map((video) => (
            <article
              key={video.id}
              className={`match-highlights-card${
                video.upcoming
                  ? " match-highlights-card-upcoming"
                  : ""
              }`}
            >

              {/* ===========================================
                  UPCOMING BADGE
              =========================================== */}
              {video.upcoming && (
                <div className="match-highlights-badge">
                  🕐 Upcoming
                </div>
              )}

              {/* ===========================================
                  VIDEO WRAPPER
              =========================================== */}
              <div className="match-highlights-iframe-wrapper">

                {/* Coming Soon Overlay */}
                {video.upcoming && (
                  <div className="match-highlights-overlay">

                    <span className="match-highlights-overlay-text">
                      Coming Soon
                    </span>

                  </div>
                )}

                {!video.upcoming && (
                  <iframe
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allowFullScreen
                    allow="
                      accelerometer;
                      autoplay;
                      clipboard-write;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture;
                      web-share
                    "
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}

              </div>

              {/* ===========================================
                  VIDEO TITLE
              =========================================== */}
              <div className="match-highlights-content">

                <h3 className="match-highlights-card-title">
                  {video.title}
                </h3>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}