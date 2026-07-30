import "./HeroContent.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Stats from "./Stats";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function HeroContent() {
  const typed = useRef();

  useEffect(() => {
    const type = new Typed(typed.current, {
      strings: [
        "Java Full Stack Developer",
        "Spring Boot Developer",
        "React Developer",
        "Backend Developer",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });

    return () => type.destroy();
  }, []);

  return (
    <div className="hero-content">
      <p className="welcome">HELLO I'M</p>

      <h1>AATHITHYA</h1>

      <h2>
        <span ref={typed}></span>
      </h2>

      <p className="about">
        Building scalable backend systems and modern web applications.
      </p>

     

      <div className="social">
        <Stats />

        <a
          href="https://github.com/Aathi786"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aathi77"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default HeroContent;