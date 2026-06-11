import Hero from "./components/Hero";
import Announcements from "./components/Announcements";
import LiveMatch from "./components/LiveMatch";
import TournamentStats from "./components/TournamentsStats";
import TeamsPreview from "./components/TeamPreview";
import Sponsors from "./components/Sponsors";
import Posters from "./components/Banners";

export default function HomePage() {
  return (
    <>
    <main className="home-page">
      <Hero />
      <Announcements/>
      <LiveMatch />
      <TournamentStats />
      <TeamsPreview />
      <Posters/>
      <Sponsors />
    </main>
    </>
  );
}