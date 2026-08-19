import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import confetti from "canvas-confetti";
import { FaTimes, FaRedo, FaAtom, FaGithub, FaJava, FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import "./GravityMode.css";

const GRAVITY_ELEMENTS = [
  {
    id: "proj-1",
    type: "project",
    title: "Course Registration System",
    tech: "Spring Boot • Security • Oracle",
    github: "https://github.com/Aathi786/Course_Registration_System",
    width: 280,
    height: 140,
  },
  {
    id: "proj-2",
    type: "project",
    title: "Employee Management System",
    tech: "Java • JSP • Servlet • Oracle",
    github: "https://github.com/Aathi786/Employee-Management-System",
    width: 280,
    height: 140,
  },
  {
    id: "proj-3",
    type: "project",
    title: "Quiz Management System",
    tech: "Java • JSP • Servlet • Oracle",
    github: "https://github.com/Aathi786/Quizz_Game",
    width: 280,
    height: 140,
  },
  { id: "skill-1", type: "skill", title: "Java 21", icon: <FaJava />, width: 130, height: 55 },
  { id: "skill-2", type: "skill", title: "Spring Boot", icon: <FaShieldAlt />, width: 150, height: 55 },
  { id: "skill-3", type: "skill", title: "React 19", icon: <FaReact />, width: 130, height: 55 },
  { id: "skill-4", type: "skill", title: "Oracle SQL", icon: <FaDatabase />, width: 140, height: 55 },
  { id: "skill-5", type: "skill", title: "REST APIs", icon: <FaAtom />, width: 130, height: 55 },
  { id: "stat-1", type: "stat", title: "3+ Projects", sub: "Production Repos", width: 150, height: 75 },
  { id: "stat-2", type: "stat", title: "8+ Core Tech", sub: "Full-Stack Stack", width: 150, height: 75 },
  { id: "stat-3", type: "stat", title: "2025 Graduate", sub: "Software Engineer", width: 150, height: 75 },
  { id: "chip-1", type: "chip", title: "Aathithya R", width: 130, height: 42 },
  { id: "chip-2", type: "chip", title: "Full-Stack Dev", width: 140, height: 42 },
  { id: "chip-3", type: "chip", title: "Matter.js 2D Physics", width: 160, height: 42 },
];

function GravityMode({ onClose }) {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const bodiesRef = useRef(new Map());
  const [positions, setPositions] = useState({});

  useEffect(() => {
    try {
      confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#00E5FF", "#7C3AED", "#10B981"],
      });
    } catch {
      // Safe fallback
    }

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.8, scale: 0.001 },
    });
    engineRef.current = engine;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const floor = Bodies.rectangle(width / 2, height + 30, width * 2, 60, { isStatic: true });
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -150, width * 2, 60, { isStatic: true });

    Composite.add(engine.world, [floor, leftWall, rightWall, ceiling]);

    const newBodiesMap = new Map();

    GRAVITY_ELEMENTS.forEach((item, index) => {
      const startX = Math.random() * (width - 240) + 120;
      const startY = -60 - index * 60;

      const body = Bodies.rectangle(startX, startY, item.width, item.height, {
        chamfer: { radius: 12 },
        restitution: 0.7,
        friction: 0.1,
        frictionAir: 0.02,
        density: 0.002,
        label: item.id,
      });

      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08);

      newBodiesMap.set(item.id, body);
      Composite.add(engine.world, body);
    });

    bodiesRef.current = newBodiesMap;

    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);

    Events.on(engine, "afterUpdate", () => {
      const newPos = {};
      newBodiesMap.forEach((body, id) => {
        newPos[id] = {
          x: body.position.x,
          y: body.position.y,
          angle: body.angle,
        };
      });
      setPositions(newPos);
    });

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const handleResize = () => {
      Matter.Body.setPosition(floor, { x: window.innerWidth / 2, y: window.innerHeight + 30 });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth + 30, y: window.innerHeight / 2 });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  const handleReset = () => {
    if (!engineRef.current || !bodiesRef.current) return;
    const width = window.innerWidth;
    let idx = 0;
    bodiesRef.current.forEach((body) => {
      Matter.Body.setPosition(body, {
        x: Math.random() * (width - 240) + 120,
        y: -50 - idx * 50,
      });
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 4, y: Math.random() * 2 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
      idx++;
    });
  };

  return (
    <div className="gravity-overlay" ref={sceneRef}>
      {/* Top HUD Control Bar */}
      <header className="gravity-hud">
        <div className="hud-title-box">
          <span className="hud-pulse"></span>
          <div>
            <h2 className="hud-title">INTERACTIVE ZERO-G PHYSICS SANDBOX</h2>
            <p className="hud-sub">Drag, toss, and collide portfolio elements with 2D rigid-body physics</p>
          </div>
        </div>

        <div className="hud-actions">
          <button className="hud-btn reset-btn" onClick={handleReset} title="Reset physics objects">
            <FaRedo /> Reset
          </button>
          <button className="hud-btn exit-btn" onClick={onClose} title="Exit Gravity Mode">
            <FaTimes /> EXIT GRAVITY
          </button>
        </div>
      </header>

      {/* Physics Interactive Bodies */}
      {GRAVITY_ELEMENTS.map((item) => {
        const pos = positions[item.id] || { x: -999, y: -999, angle: 0 };
        return (
          <div
            key={item.id}
            className={`gravity-card type-${item.type}`}
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              transform: `translate(${pos.x - item.width / 2}px, ${pos.y - item.height / 2}px) rotate(${pos.angle}rad)`,
            }}
          >
            {item.type === "project" && (
              <div className="gravity-project-content">
                <span className="gravity-badge">● PROJECT</span>
                <h4>{item.title}</h4>
                <p>{item.tech}</p>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="gravity-link"
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            )}

            {item.type === "skill" && (
              <div className="gravity-skill-content">
                <span className="g-icon">{item.icon}</span>
                <span>{item.title}</span>
              </div>
            )}

            {item.type === "stat" && (
              <div className="gravity-stat-content">
                <strong>{item.title}</strong>
                <span>{item.sub}</span>
              </div>
            )}

            {item.type === "chip" && (
              <div className="gravity-chip-content">
                <span>{item.title}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GravityMode;
