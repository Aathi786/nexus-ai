import CyberBackground3D from "../3d/CyberBackground3D";
import "./Background.css";

function Background() {
  return (
    <>
      <CyberBackground3D />
      <div className="bg-grid-overlay" aria-hidden="true" />
      <div className="bg-ambient-glow" aria-hidden="true" />
    </>
  );
}

export default Background;