import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },

    fpsLimit: 120,

    particles: {
      number: {
        value: 120,
      },

      color: {
        value: "#00E5FF",
      },

      links: {
        enable: true,
        color: "#00E5FF",
        distance: 150,
        opacity: 0.2,
      },

      move: {
        enable: true,
        speed: 1,
      },

      size: {
        value: {
          min: 1,
          max: 3,
        },
      },

      opacity: {
        value: 0.5,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
    },
  }), []);

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}

export default ParticlesBackground;