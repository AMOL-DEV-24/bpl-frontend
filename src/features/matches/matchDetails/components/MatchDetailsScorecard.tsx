import type {
  Match,
  Innings,
} from "@/types/matches/matchDetails/matchDetails.type";

interface MatchDetailsScorecardProps {
  match: Match;
}

export default function MatchDetailsScorecard({
  match,
}: MatchDetailsScorecardProps) {
  const emptyInnings: Innings = {
    team: "TBA",
    score: "0/0",
    overs: "0.0",
    batting: [],
    bowling: [],
  };

  const inningsList: Innings[] = [
    match.scorecard?.firstInnings ?? emptyInnings,
    ...(match.scorecard?.secondInnings
      ? [match.scorecard.secondInnings]
      : []),
  ];

  return (
    <section className="match-details-scorecard">
      {/* HEADER */}
      <div className="match-details-scorecard-header">
        <h3 className="match-details-scorecard-title">
          Full Scorecard
        </h3>
      </div>

      {/* INNINGS */}
      {inningsList.map((innings, index) => (
        <div
          key={`${innings.team}-${index}`}
          className="match-details-scorecard-innings"
        >
          {/* INNINGS HEADER */}
          <div className="match-details-scorecard-innings-header">
            <h4 className="match-details-scorecard-team-name">
              {innings.team}
            </h4>

            <span className="match-details-scorecard-team-score">
              {innings.score} ({innings.overs})
            </span>
          </div>

          {/* BATTING */}
          <div className="match-details-scorecard-section">
            <h5 className="match-details-scorecard-section-title">
              Batting
            </h5>

            <table className="match-details-scorecard-table">
              <thead>
                <tr>
                  <th>Batter</th>
                  <th>R</th>
                  <th>B</th>
                  <th>4s</th>
                  <th>6s</th>
                </tr>
              </thead>

              <tbody>
                {innings.batting.length > 0 ? (
                  innings.batting.map((player, idx) => (
                    <tr key={`${player.name}-${idx}`}>
                      <td>{player.name}</td>
                      <td>{player.runs}</td>
                      <td>{player.balls}</td>
                      <td>{player.fours}</td>
                      <td>{player.sixes}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}>No batting data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* BOWLING */}
          <div className="match-details-scorecard-section">
            <h5 className="match-details-scorecard-section-title">
              Bowling
            </h5>

            <table className="match-details-scorecard-table">
              <thead>
                <tr>
                  <th>Bowler</th>
                  <th>O</th>
                  <th>R</th>
                  <th>W</th>
                </tr>
              </thead>

              <tbody>
                {innings.bowling.length > 0 ? (
                  innings.bowling.map((player, idx) => (
                    <tr key={`${player.name}-${idx}`}>
                      <td>{player.name}</td>
                      <td>{player.overs}</td>
                      <td>{player.runs}</td>
                      <td>{player.wickets}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No bowling data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}