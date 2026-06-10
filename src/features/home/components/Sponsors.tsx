const sponsors = [
  "Sponsor One",
  "Sponsor Two",
  "Sponsor Three",
  "Sponsor Four",
];

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="container">

        <div className="section-heading">
          <h2>Official Sponsors</h2>
        </div>

        <div className="sponsor-grid">

          {sponsors.map((sponsor) => (
            <div
              key={sponsor}
              className="sponsor-card"
            >
              {sponsor}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}