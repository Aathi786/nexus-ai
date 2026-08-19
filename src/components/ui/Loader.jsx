import "./Loader.css";

function Loader() {
  return (
    <div className="loader-screen" role="status" aria-label="Loading system assets">
      <div className="loader-box">
        <div className="loader-logo-wrap">
          <span className="loader-pulse-ring"></span>
          <h1 className="loader-logo">NEXUS<span className="cyan-text">AI</span></h1>
        </div>

        <div className="loader-status-line">
          <span className="loader-live-dot"></span>
          <span>INITIALIZING QUANTUM TELEMETRY & 3D ASSETS...</span>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-fill"></div>
        </div>

        <div className="loader-sub-status">
          <span>Aathithya • Full Stack Portfolio</span>
          <span className="cyan-text">v2026.4</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;