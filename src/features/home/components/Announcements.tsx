/* =========================================================
   ANNOUNCEMENTS DATA
   ---------------------------------------------------------
   Static announcements list
   Later this can come from API/CMS
========================================================= */

const announcements = [
  "📢 Player Registration Closes on 13 June 2026",
  "🚧 This Website Is Currently Under Development",
  "🏏 Bhalawani Premier League Season 2026 Coming Soon",
  "💰 Official Auction Date Will Be Announced Shortly",
  "👥 Team Owners & Management Meeting Updates Available Soon",
  "🎯 Register Now Before Registration Closes",
];

/* =========================================================
   ANNOUNCEMENTS COMPONENT
========================================================= */

export default function Announcements() {
  return (
    <section className="announcements">

      <div className="container">

        {/* ===============================================
            SECTION HEADING
        =============================================== */}
        <div className="announcements-heading">
          <h2>Announcements</h2>

          <p>
            Latest updates from Bhalawani Premier League
          </p>
        </div>

        {/* ===============================================
            ANNOUNCEMENT BAR
        =============================================== */}
        <div className="announcements-bar">

          {/* Badge */}
          <div className="announcements-badge">
            🔥 BPL OFFICIAL
          </div>

          {/* Marquee */}
          <div className="announcements-marquee">

            <div className="announcements-track">

              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="announcements-track-item"
                >
                  <span className="announcements-item">
                    {announcement}
                  </span>

                  {index !== announcements.length - 1 && (
                    <span className="announcements-separator">
                      •
                    </span>
                  )}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}