import Background from "../components/background/Background";
import MouseGlow from "../components/background/MouseGlow";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Dashboard from "../components/dashboard/Dashboard";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Terminal from "../components/terminal/Terminal";
import Contact from "../components/contact/Contact";

function Home() {
  return (
    <>
      <Background />
      
      <MouseGlow />
      <Navbar />
      <Hero />
      <Dashboard/>
      <Projects/>
      <Skills/>
      <Terminal/>
      <Contact/>
    </>
  );
}

export default Home;