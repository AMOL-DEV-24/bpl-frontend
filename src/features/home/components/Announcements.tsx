import announcementsData from "@/data/home/announcements/announcementsData";

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

          <p>Latest updates from Bhalawani Premier League</p>
        </div>

        {/* ===============================================
            ANNOUNCEMENT BAR
        =============================================== */}
        <div className="announcements-bar">
          {/* Badge */}
          <div className="announcements-badge">🔥 BPL OFFICIAL</div>

          {/* Marquee */}
          <div className="announcements-marquee">
            <div className="announcements-track">
              {announcementsData.map((announcement, index) => (
                <div key={index} className="announcements-track-item">
                  <span className="announcements-item">{announcement}</span>

                  {index !== announcementsData.length - 1 && (
                    <span className="announcements-separator">•</span>
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
