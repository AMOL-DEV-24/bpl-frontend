const purses = [
  {
    team: "Warriors",
    amount: "2,50,000",
  },
  {
    team: "Kings",
    amount: "1,80,000",
  },
  {
    team: "Titans",
    amount: "3,20,000",
  },
  {
    team: "Strikers",
    amount: "2,10,000",
  },
];

export default function TeamPurse() {
  return (
    <section className="team-purse">
      <div className="container">

        <div className="purse-grid">

          {purses.map((team) => (
            <div
              key={team.team}
              className="purse-card"
            >
              <h3>{team.team}</h3>

              <span>
                ₹ {team.amount}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}