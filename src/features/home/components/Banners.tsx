import Image from "next/image";

const banners = [
  {
    id: 1,
    title: "BPL OFFICIAL POSTER",
    image: "/assets/images/banners/BPL Offical Poster.jpeg",
  },
  {
    id: 2,
    title: "Team 1",
    image: "/assets/images/banners/Dayavan 11 Team Poster.jpeg",
  },
  {
    id: 3,
    title: "Team 2",
    image: "/assets/images/banners/Gajanan Riders Poster 1.jpeg",
  },
  {
    id: 4,
    title: "Team 3",
    image: "/assets/images/banners/Irfan Fighters Poster.jpeg",
  },
  {
    id: 4,
    title: "Team 5",
    image: "/assets/images/banners/Linge Super kings Poster.jpeg",
  },
  {
    id: 5,
    title: "Team 6",
    image: "/assets/images/banners/Sadguru Lions.png",
  },
  {
    id: 3,
    title: "Team 7",
    image: "/assets/images/banners/Samrat Yodha Poster.jpeg",
  },
];

export default function Banners() {
  return (
    <section className="banners-section">
      <div className="container">
        <div className="section-title">
          <h2>Teams Banners</h2>

          <p>Stay updated with upcoming fixtures and tournament events.</p>
        </div>

        <div className="banners-grid">
          {banners.map((banner) => (
            <article key={banner.id} className="banner-card">
              <div className="banner-image">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="banner-img"
                />
              </div>

              <div className="banner-content">
                <h3>{banner.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
