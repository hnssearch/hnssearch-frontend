import StatTile from "../components/StatTile";
import stats from "../assets/files/stats.json";

// Implementation of stats currently with static file and import; will be changed to fetch at a later point.
function StatsPage() {
  return (
    <div className="flex flex-col justify-center py-8 px-4 bg-neutral-100 h-screen dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatTile title="Pages" value={stats.n_entries} />
        <StatTile title="Different Sites" value={stats.n_domains} />
        <StatTile title="Unique TLDs" value={stats.n_tlds} />
      </div>
    </div>
  );
}

export default StatsPage;
