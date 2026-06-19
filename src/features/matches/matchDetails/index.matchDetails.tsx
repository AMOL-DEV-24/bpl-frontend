/* =========================================================
   MATCH DETAILS FEATURE
   Purpose : Root page for a single match details view
========================================================= */

import matchDetails from "@/data/matches/matchDetails/matchDetailsData";
import type { Match } from "@/types/matches/matchDetails/matchDetails.type";

import MatchDetailsHeader from "./components/MatchDetailsHeader";
import MatchDetailsInfo from "./components/MatchDetailsInfo";
import MatchDetailsPlayingXI from "./components/MatchDetailsPlayingXI";
import MatchDetailsScorecard from "./components/MatchDetailsScorecard";
import MatchDetailsResult from "./components/MatchDetailsResult";

interface MatchDetailsPageProps {
  matchNo: number;
}

export default function MatchDetailsPage({
  matchNo,
}: MatchDetailsPageProps) {

    console.log("matchNo:", matchNo);
console.log("matchDetails:", matchDetails);
console.log(
  "found match:",
  matchDetails.find((item) => item.matchNo === matchNo)
);

  // ✅ Explicit type prevents TS mismatch issues
  const match: Match | undefined = matchDetails.find(
    (item) => item.matchNo === matchNo
  );

  if (!match) {
    return (
      <section className="match-details-page">
        <div className="match-details-page-container">
          <h2 className="match-details-page-not-found">
            Match Not Found
          </h2>
        </div>
      </section>
    );
  }

  return (
    <main className="match-details-page">
      <div className="match-details-page-container">

        <MatchDetailsHeader match={match} />

        <MatchDetailsInfo match={match} />

        {match.status === "Upcoming" && (
          <MatchDetailsPlayingXI match={match} />
        )}

        {match.status === "Completed" && (
          <>
            <MatchDetailsScorecard match={match} />
            <MatchDetailsResult match={match} />
          </>
        )}

      </div>
    </main>
  );
}