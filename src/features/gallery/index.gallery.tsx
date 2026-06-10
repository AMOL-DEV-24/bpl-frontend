import GalleryGrid from "./components/GalleryGrid";
import VideoHighlights from "./components/VideoHighlights";

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>
            Tournament moments, celebrations and highlights.
          </p>
        </div>
      </section>

      <GalleryGrid />

      <VideoHighlights />
    </main>
  );
}