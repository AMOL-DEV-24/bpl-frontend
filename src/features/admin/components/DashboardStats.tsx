const stats = [
  { title: "Teams", value: 8 },
  { title: "Players", value: 120 },
  { title: "Matches", value: 32 },
  { title: "Sponsors", value: 15 },
];

export default function DashboardStats() {
  return (
    <section className="dashboard-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <div
              key={item.title}
              className="stat-card"
            >
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}