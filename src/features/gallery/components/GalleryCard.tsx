interface GalleryCardProps {
  image: string;
  title: string;
}

export default function GalleryCard({
  image,
  title,
}: GalleryCardProps) {
  return (
    <div className="gallery-card">
      <img
        src={image}
        alt={title}
      />

      <div className="gallery-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
}