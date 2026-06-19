/* =========================================================
   GALLERY PAGE
   ---------------------------------------------------------
   Scope    : .gallery-page
   Purpose  : Photo gallery + video highlights page
   Route    : /gallery
========================================================= */
import GalleryGrid from "./components/TournamentGallery";
import VideosPage from "./components/TournamentVideos";
import VideoHighlights from "./components/MatchHighlights";

export default function GalleryPage() {
  return (
    /* Root scope boundary — all child SCSS anchors here */
    <main className="gallery-page">

      {/* Page header banner
          ⚠️  Was: .page-header — generic, sitewide collision
          ✅  Now: .gallery-page__header — scoped to this page */}
      <section
        className="gallery-page__header"
        aria-label="Gallery page header"
      >
        <div className="container">
          <h1 className="gallery-page__header-title">Gallery</h1>
          <p className="gallery-page__header-subtitle">
            Tournament moments, celebrations and highlights.
          </p>
        </div>
      </section>

      {/* Photo grid section */}
      <GalleryGrid />

      {/* Video Page */}
      <VideosPage/>

      {/* Video highlights section */}
      <VideoHighlights />

    </main>
  );
}