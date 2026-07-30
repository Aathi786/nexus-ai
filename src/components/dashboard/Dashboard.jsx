import "./Dashboard.css";
import StatusCard from "./StatusCard";
import SkillCard from "./SkillCard";

function Dashboard() {
  return (
    <section className="dashboard" id="about">

      <h2 className="dashboard-title">
        NEXUS AI CONTROL PANEL
      </h2>

      <div className="dashboard-grid">

        <StatusCard />

        <SkillCard />

      </div>

    </section>
  );
}

export default Dashboard;