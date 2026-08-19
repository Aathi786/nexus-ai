import { FaUserCheck, FaMapMarkerAlt, FaGraduationCap, FaCode, FaCheckCircle } from "react-icons/fa";

function StatusCard() {
  const profileDetails = [
    { label: "Name", value: "Aathithya R", icon: <FaUserCheck /> },
    { label: "Specialization", value: "Full-Stack Java Developer", icon: <FaCode /> },
    { label: "Education", value: "2025 Graduate", icon: <FaGraduationCap /> },
    { label: "Location", value: "Tamil Nadu, India", icon: <FaMapMarkerAlt /> },
    { label: "Availability", value: "Ready for Full-Time Roles", icon: <FaCheckCircle />, isOnline: true },
  ];

  return (
    <div className="glass-panel telemetry-card">
      <div className="telemetry-header">
        <h3>Developer Overview</h3>
        <span className="online-badge">
          <span className="online-dot"></span> AVAILABLE
        </span>
      </div>

      <div className="telemetry-list">
        {profileDetails.map((item, index) => (
          <div key={index} className="telemetry-row">
            <div className="telemetry-label">
              <span className="icon-wrap">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <div className={`telemetry-val ${item.isOnline ? "val-online" : ""}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="diagnostic-strip">
        <div className="diag-item">
          <span>EXPERTISE</span>
          <strong>Java & Spring</strong>
        </div>
        <div className="diag-item">
          <span>FRONTEND</span>
          <strong>React & Vite</strong>
        </div>
        <div className="diag-item">
          <span>DATABASE</span>
          <strong>Oracle SQL</strong>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;