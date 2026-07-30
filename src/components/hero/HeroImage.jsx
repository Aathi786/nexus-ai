import "./HeroImage.css";

function HeroImage() {
  return (
    <div className="hero-image">

      <div className="scan-ring ring1"></div>
      <div className="scan-ring ring2"></div>
      <div className="scan-ring ring3"></div>

      <div className="scan-line"></div>

      <div className="avatar">
        <img src="/avatar.png" alt="Aathithya" />
      </div>

      <div className="hud top">ONLINE</div>
      <div className="hud left">JAVA</div>
      <div className="hud right">SPRING</div>
      <div className="hud bottom">REACT</div>

    </div>
  );
}

export default HeroImage;