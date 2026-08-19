import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import "./Hero.css";

function Hero({ onToggleGravity }) {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-grid">
        <HeroContent onToggleGravity={onToggleGravity} />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;