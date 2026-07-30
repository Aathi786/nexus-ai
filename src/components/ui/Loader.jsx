import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <h1 className="logo">NEXUS AI</h1>

      <p className="status">Initializing System...</p>

      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default Loader;