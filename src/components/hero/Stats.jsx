import "./Stats.css";

function Stats() {
  const statsData = [
    { value: "3+", label: "Completed Projects", highlight: "Enterprise Systems" },
    { value: "8+", label: "Core Technologies", highlight: "Full Stack Matrix" },
    { value: "2025", label: "Graduate Engineer", highlight: "Tamil Nadu, India" },
  ];

  return (
    <div className="hero-stats-row">
      {statsData.map((stat, idx) => (
        <div key={idx} className="stat-card glass-panel">
          <span className="stat-number">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-sub">{stat.highlight}</span>
        </div>
      ))}
    </div>
  );
}

export default Stats;