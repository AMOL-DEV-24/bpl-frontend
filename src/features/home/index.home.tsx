import Hero from "./components/Hero";
import LiveMatch from "./components/LiveMatch";
import TournamentStats from "./components/TournamentsStats";
import TeamsPreview from "./components/TeamPreview";
import Sponsors from "./components/Sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveMatch />
      <TournamentStats />
      <TeamsPreview />
      <Sponsors />
    </>
  );
}