import { useState } from "react";
import { FaSearch, FaDraftingCompass, FaCode, FaBug, FaPlug, FaRocket, FaArrowRight } from "react-icons/fa";
import "./ProblemSolving.css";

const SOLVING_STEPS = [
  {
    step: "01",
    id: "understand",
    title: "UNDERSTAND",
    subtitle: "Domain Requirements & Data Modeling",
    icon: <FaSearch />,
    focus: "Analyzing functional requirements, entity relationships, and access control boundaries before writing code.",
    realAreas: ["Entity relational & document schemas", "User roles & security permissions", "API payload contracts"],
  },
  {
    step: "02",
    id: "design",
    title: "DESIGN",
    subtitle: "REST Contracts & Layered Architecture",
    icon: <FaDraftingCompass />,
    focus: "Structuring clean MVC boundaries, Spring service abstractions, DTOs, and decoupled frontend component trees.",
    realAreas: ["RESTful endpoint routes & HTTP status codes", "Controller-Service-Repository separation", "Component hierarchy & state flow"],
  },
  {
    step: "03",
    id: "build",
    title: "BUILD",
    subtitle: "Core Logic, Security & Persistence",
    icon: <FaCode />,
    focus: "Developing robust backend endpoints, configuring Spring Security filters with JWT, and implementing reactive UI views.",
    realAreas: ["Spring Boot REST controllers", "Spring Security JWT filter chains", "MongoDB Atlas & Oracle JPA repositories"],
  },
  {
    step: "04",
    id: "debug",
    title: "DEBUG",
    subtitle: "API Verification & Diagnostics",
    icon: <FaBug />,
    focus: "Testing endpoints thoroughly using Postman, inspecting server logs, resolving CORS issues, and handling edge-case errors.",
    realAreas: ["Postman request/response verification", "CORS header & exception handling", "Token expiration & auth debugging"],
  },
  {
    step: "05",
    id: "integrate",
    title: "INTEGRATE",
    subtitle: "Client-Server State Synchronization",
    icon: <FaPlug />,
    focus: "Connecting React state and Axios interceptors with Spring Boot APIs, managing loading states, and handling responses cleanly.",
    realAreas: ["Axios Bearer token interceptors", "Dynamic client state updates", "Asynchronous data fetching & error toasts"],
  },
  {
    step: "06",
    id: "improve",
    title: "IMPROVE",
    subtitle: "Optimization & Deployment",
    icon: <FaRocket />,
    focus: "Optimizing database queries, indexing MongoDB collections, refining responsive UI layouts, and deploying to cloud infrastructure.",
    realAreas: ["Database query & index tuning", "Mobile responsive polish", "Vercel & cloud hosting deployment"],
  },
];

function ProblemSolving() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="problem-solving-section section-container" id="how-i-build">
      <div className="section-header">
        <span className="section-tag">ENGINEERING METHODOLOGY</span>
        <h2 className="section-title">
          HOW I <span>BUILD & SOLVE</span>
        </h2>
        <p className="section-subtitle">
          A systematic full-stack problem-solving lifecycle from conceptual design to secure cloud deployment.
        </p>
      </div>

      {/* Interactive Process Pipeline */}
      <div className="process-lifecycle-container gold-panel">
        <div className="process-nav-row">
          {SOLVING_STEPS.map((item, index) => (
            <button
              key={item.id}
              className={`process-step-btn ${activeStep === index ? "active" : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-btn-top">
                <span className="step-btn-num">{item.step}</span>
                <div className="step-btn-icon">{item.icon}</div>
              </div>
              <span className="step-btn-title">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Inspector Detail */}
        <div className="process-stage-detail glass-panel">
          <div className="stage-detail-header">
            <div className="stage-header-meta">
              <span className="stage-step-badge">PHASE {SOLVING_STEPS[activeStep].step}</span>
              <h3 className="stage-title">{SOLVING_STEPS[activeStep].title} — {SOLVING_STEPS[activeStep].subtitle}</h3>
            </div>
            <div className="stage-icon-large">{SOLVING_STEPS[activeStep].icon}</div>
          </div>

          <p className="stage-focus-text">
            {SOLVING_STEPS[activeStep].focus}
          </p>

          <div className="stage-practical-box">
            <span className="practical-label">APPLIED IN REAL PROJECTS:</span>
            <div className="practical-tags">
              {SOLVING_STEPS[activeStep].realAreas.map((area, idx) => (
                <div key={idx} className="practical-tag-item">
                  <span className="gold-bullet">◆</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step Navigation Controls */}
          <div className="stage-nav-footer">
            <button
              className="btn-gold-secondary stage-nav-btn"
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : SOLVING_STEPS.length - 1))}
            >
              ← Previous Phase
            </button>

            <span className="stage-counter">
              Phase {activeStep + 1} of {SOLVING_STEPS.length}
            </span>

            <button
              className="btn-gold-primary stage-nav-btn"
              onClick={() => setActiveStep((prev) => (prev < SOLVING_STEPS.length - 1 ? prev + 1 : 0))}
            >
              <span>Next Phase</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
