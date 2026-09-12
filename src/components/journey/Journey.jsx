import { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaJava,
  FaServer,
  FaShieldAlt,
  FaReact,
  FaLayerGroup,
  FaBullseye,
  FaCode,
} from "react-icons/fa";
import { SiSpringboot, SiSpring, SiMongodb } from "react-icons/si";
import "./Journey.css";

const JOURNEY_MILESTONES = [
  {
    step: "01",
    title: "B.Sc. Computer Science Foundation",
    focus: "Core CS & Algorithmic Logic",
    icon: <FaGraduationCap />,
    desc: "Acquired strong foundations in object-oriented programming principles, algorithms, data structures, and relational logic.",
    tags: ["Computer Science", "Algorithms", "Data Structures", "Relational Logic"],
  },
  {
    step: "02",
    title: "C Programming",
    focus: "Low-Level Foundations & Memory Logic",
    icon: <FaCode />,
    desc: "Mastered fundamental structured programming, pointers, memory allocation, and hardware-level computing paradigms.",
    tags: ["C", "Memory Management", "Pointers", "Structured Programming"],
  },
  {
    step: "03",
    title: "C++ Programming",
    focus: "Object-Oriented System Engineering",
    icon: <FaCode />,
    desc: "Engineered object-oriented systems with classes, inheritance, polymorphism, templates, and abstract data types.",
    tags: ["C++", "OOP Principles", "Polymorphism", "Templates"],
  },
  {
    step: "04",
    title: "Java Full Stack Development",
    focus: "Object-Oriented & Concurrent Java",
    icon: <FaJava />,
    desc: "Mastered core Java syntax, multithreading, exception management, collections framework, and clean modular code architecture.",
    tags: ["Java Core", "Collections Framework", "Multithreading", "OOP"],
  },
  {
    step: "05",
    title: "Advanced Java & Web Persistence",
    focus: "JSP, Servlets, JDBC & Oracle Database",
    icon: <FaServer />,
    desc: "Built dynamic Java EE applications utilizing Servlets as controllers, JSP for dynamic views, and JDBC connection pools with Oracle SQL.",
    tags: ["Servlets", "JSP", "JDBC", "Oracle Database", "MVC Architecture"],
  },
  {
    step: "06",
    title: "Spring Framework",
    focus: "IoC & Dependency Injection Architecture",
    icon: <SiSpring />,
    desc: "Gained comprehensive expertise in Spring Core, Inversion of Control (IoC), Dependency Injection (DI), and modular bean lifecycle management.",
    tags: ["Spring Core", "IoC Container", "Dependency Injection", "Spring MVC"],
  },
  {
    step: "07",
    title: "Spring Boot",
    focus: "Enterprise RESTful Microservices",
    icon: <SiSpringboot />,
    desc: "Developed modern microservices using Spring Boot auto-configuration, Spring Data JPA repositories, Hibernate ORM, and REST APIs.",
    tags: ["Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs"],
  },
  {
    step: "08",
    title: "Spring Security & JWT",
    focus: "Security & Stateless Auth Engineering",
    icon: <FaShieldAlt />,
    desc: "Engineered end-to-end application security incorporating JWT token validation, custom security filters, CORS policies, and role-based access control.",
    tags: ["Spring Security", "JWT Authentication", "Role-Based Access", "CORS"],
  },
  {
    step: "09",
    title: "React",
    focus: "Modern Reactive Frontend Architecture",
    icon: <FaReact />,
    desc: "Built interactive single-page web applications with React, managing client-side state, lifecycle hooks, and Axios API integrations.",
    tags: ["React", "JavaScript ES6+", "Component State", "Axios Interceptors"],
  },
  {
    step: "10",
    title: "MongoDB & MongoDB Atlas",
    focus: "Cloud NoSQL Document Persistence",
    icon: <SiMongodb />,
    desc: "Engineered scalable document persistence architectures with MongoDB Atlas cloud clusters, indexing, and schema modeling.",
    tags: ["MongoDB", "MongoDB Atlas", "NoSQL Document Modeling", "Cloud DB"],
  },
  {
    step: "11",
    title: "Full-Stack Application Development",
    focus: "End-to-End Social Media & Enterprise Systems",
    icon: <FaLayerGroup />,
    desc: "Built and deployed end-to-end applications including the featured full-stack Instagram social platform, Course Registration System, and Employee Management System.",
    tags: ["Full-Stack Integration", "Cloud Deployment", "API Synchronization"],
  },
  {
    step: "12",
    title: "Current Goal & Next Milestone",
    focus: "Software Developer / Full Stack Engineer",
    icon: <FaBullseye />,
    desc: "Fresher seeking software engineering opportunities to contribute high-impact Java full-stack code, solve technical challenges, and build reliable software.",
    tags: ["Software Engineer", "Full Stack Developer", "Ready for Opportunities"],
    highlight: true,
  },
];

function Journey() {
  const [activeStep, setActiveStep] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Automatic scroll-based activation using IntersectionObserver centered on viewport focal area
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0.1, 0.4, 0.7],
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-step-index"));
          if (!isNaN(index)) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="journey-section section-container" id="journey">
      <div className="section-header">
        <span className="section-tag">PROGRESSION PATHWAY</span>
        <h2 className="section-title">
          DEVELOPMENT <span>JOURNEY</span>
        </h2>
        <p className="section-subtitle">
          From computer science fundamentals, C, C++, and enterprise Spring to complete full-stack web applications.
        </p>
      </div>

      <div className="journey-timeline">
        <div className="timeline-central-spine"></div>

        {JOURNEY_MILESTONES.map((item, index) => {
          const isActive = activeStep === index;

          return (
            <div
              key={item.step}
              ref={(el) => (itemRefs.current[index] = el)}
              data-step-index={index}
              className={`journey-milestone-item ${index % 2 === 0 ? "left" : "right"} ${
                isActive ? "active-scrolled" : ""
              } ${item.highlight ? "highlight-target" : ""}`}
            >
              {/* Timeline Center Node */}
              <div className="milestone-spine-node">
                <div className={`spine-icon-wrap ${isActive ? "node-active-glow" : ""}`}>
                  {item.icon}
                </div>
                <span className="spine-step-num">{item.step}</span>
              </div>

              {/* Content Card */}
              <div
                className={`milestone-content-card ${
                  isActive ? "card-active-glow" : item.highlight ? "gold-panel" : "glass-panel"
                }`}
              >
                <div className="milestone-card-top">
                  <span className="milestone-focus">{item.focus}</span>
                  <span className="milestone-step-pill">STAGE {item.step}</span>
                </div>

                <h3 className="milestone-title">{item.title}</h3>
                <p className="milestone-desc">{item.desc}</p>

                <div className="milestone-tags-row">
                  {item.tags.map((t, i) => (
                    <span key={i} className="milestone-tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Journey;
