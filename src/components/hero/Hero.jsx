import "./Hero.css";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section className="hero" id="home">

      <HeroContent />

      <HeroImage />

    </section>
  );
}

export default Hero;