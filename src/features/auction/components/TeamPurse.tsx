/* =========================================================
   TEAM PURSE
   Purpose : Displays remaining purse amount for each team.
   ========================================================= */

const purses = [
  { team: "Warriors", amount: "2,50,000" },
  { team: "Kings",    amount: "1,80,000" },
  { team: "Titans",   amount: "3,20,000" },
  { team: "Strikers", amount: "2,10,000" },
];

export default function TeamPurse() {
  return (
    <section className="team-purse">
      <div className="auction-page-container">

        <div className="team-purse-grid">
          {purses.map((item) => (
            <div key={item.team} className="team-purse-card">
              <h3 className="team-purse-card__name">{item.team}</h3>
              <span className="team-purse-card__amount">₹ {item.amount}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}