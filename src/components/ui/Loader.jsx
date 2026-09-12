import "./Loader.css";

function Loader() {
  return (
    <div className="loader-screen" role="status" aria-label="Loading portfolio">
      <div className="loader-box">
        <div className="loader-logo-wrap">
          <span className="loader-symbol">◆</span>
          <h1 className="loader-logo">
            AATHITHYA <span className="gold-text">R</span>
          </h1>
        </div>

        <div className="loader-status-line">
          <span className="loader-live-dot"></span>
          <span>INITIALIZING FULL-STACK ARCHITECTURE...</span>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-fill"></div>
        </div>

        <div className="loader-sub-status">
          <span>Java Full Stack Developer</span>
          <span className="gold-text">React • Spring Boot • MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;