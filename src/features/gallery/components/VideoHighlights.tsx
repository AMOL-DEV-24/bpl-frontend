export default function VideoHighlights() {
  return (
    <section className="video-highlights">
      <div className="container">

        <h2>Match Highlights</h2>

        <div className="video-grid">

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Highlight 1"
              allowFullScreen
            />
          </div>

          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Highlight 2"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
}