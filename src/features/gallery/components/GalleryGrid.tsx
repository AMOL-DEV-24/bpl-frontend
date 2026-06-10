import GalleryCard from "./GalleryCard";

const images = [
  {
    image: "/gallery/gallery-1.jpg",
    title: "Opening Ceremony",
  },
  {
    image: "/gallery/gallery-2.jpg",
    title: "Match Day",
  },
  {
    image: "/gallery/gallery-3.jpg",
    title: "Winning Moment",
  },
  {
    image: "/gallery/gallery-4.jpg",
    title: "Award Ceremony",
  },
  {
    image: "/gallery/gallery-5.jpg",
    title: "Team Celebration",
  },
  {
    image: "/gallery/gallery-6.jpg",
    title: "Crowd Support",
  },
];

export default function GalleryGrid() {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-grid">
          {images.map((item) => (
            <GalleryCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}