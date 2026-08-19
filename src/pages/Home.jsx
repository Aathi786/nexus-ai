import { useState } from "react";
import Background from "../components/background/Background";
import MouseGlow from "../components/background/MouseGlow";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Dashboard from "../components/dashboard/Dashboard";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Terminal from "../components/terminal/Terminal";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import GravityMode from "../components/gravity/GravityMode";

function Home() {
  const [gravityActive, setGravityActive] = useState(false);

  const toggleGravity = () => {
    setGravityActive((prev) => !prev);
  };

  return (
    <>
      {/* 3D Constellation & Grid Background */}
      <Background />

      {/* Fluid Hardware-Accelerated Mouse Glow */}
      <MouseGlow />

      {/* Floating Island Navigation */}
      <Navbar onToggleGravity={toggleGravity} />

      <main>
        {/* Hero Section with 3D Cyber Core */}
        <Hero onToggleGravity={toggleGravity} />

        {/* Control Panel Telemetry */}
        <Dashboard />

        {/* Project Vault */}
        <Projects />

        {/* Skill Matrix */}
        <Skills />

        {/* Interactive Direct Communication Terminal (EmailJS) */}
        <Terminal />

        {/* Direct Contact Channels */}
        <Contact />
      </main>

      {/* Cyberpunk Minimal Footer */}
      <Footer />

      {/* Interactive Google Gravity Physics Mode Sandbox */}
      {gravityActive && <GravityMode onClose={() => setGravityActive(false)} />}
    </>
  );
}

export default Home;