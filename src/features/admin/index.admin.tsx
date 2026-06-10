import DashboardStats from "./components/DashboardStats";
import QuickActions from "./components/QuickActions";
import RecentMatches from "./components/RecentMatches";
import TeamsManagement from "./components/TeamsManagement";
import PlayersManagement from "./components/PlayersManagement";
import LiveScorePanel from "./components/LiveScorePanel";

export default function AdminPage() {
  return (
    <main className="admin-page">
      <section className="page-header">
        <div className="container">
          <h1>BPL Admin Dashboard</h1>
          <p>
            Manage teams, players, matches and live scores.
          </p>
        </div>
      </section>

      <DashboardStats />
      <QuickActions />
      <RecentMatches />
      <TeamsManagement />
      <PlayersManagement />
      <LiveScorePanel />
    </main>
  );
}