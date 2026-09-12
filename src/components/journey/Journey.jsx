import { FaGraduationCap, FaJava, FaServer, FaShieldAlt, FaReact, FaLayerGroup, FaBullseye } from "react-icons/fa";
import { SiSpringboot, SiMongodb } from "react-icons/si";
import "./Journey.css";

const JOURNEY_MILESTONES = [
  {
    step: "01",
    title: "B.Sc. Computer Science Foundation",
    focus: "Core Computer Science Fundamentals",
    icon: <FaGraduationCap />,
    desc: "Acquired strong foundations in object-oriented programming principles, algorithms, data structures, and relational database concepts.",
    tags: ["Computer Science", "Algorithms", "OOP Concepts", "Relational Logic"],
  },
  {
    step: "02",
    title: "Core Java Engineering",
    focus: "Object-Oriented & Concurrent Java",
    icon: <FaJava />,
    desc: "Mastered Java syntax, multithreading, exception management, collections framework, and clean modular code architecture.",
    tags: ["Java Core", "Collections Framework", "Multithreading", "OOP"],
  },
  {
    step: "03",
    title: "Advanced Java & Web Persistence",
    focus: "JSP, Servlets, JDBC & Oracle Database",
    icon: <FaServer />,
    desc: "Built dynamic Java EE applications utilizing Servlets as controllers, JSP for dynamic views, and JDBC connection pools communicating with Oracle SQL.",
    tags: ["Servlets", "JSP", "JDBC", "Oracle SQL", "MVC Pattern"],
  },
  {
    step: "04",
    title: "Spring Framework & Spring Boot",
    focus: "Enterprise RESTful Microservices",
    icon: <SiSpringboot />,
    desc: "Advanced into Spring Boot ecosystem, dependency injection, Spring Data JPA repositories, Hibernate ORM, and scalable REST API architectures.",
    tags: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs"],
  },
  {
    step: "05",
    title: "Security & Stateless Auth Engineering",
    focus: "Spring Security & JWT Filter Chains",
    icon: <FaShieldAlt />,
    desc: "Engineered robust application security incorporating JWT token validation, custom security filters, CORS policies, and role-based access control.",
    tags: ["Spring Security", "JWT Authentication", "Role-Based Access", "CORS"],
  },
  {
    step: "06",
    title: "Modern Reactive Frontend",
    focus: "React Component Architecture",
    icon: <FaReact />,
    desc: "Built interactive single-page web applications with React, managing client-side state, lifecycle hooks, and Axios API integrations.",
    tags: ["React", "JavaScript ES6+", "Component State", "Axios Interceptors"],
  },
  {
    step: "07",
    title: "Cloud NoSQL Persistence",
    focus: "MongoDB & MongoDB Atlas",
    icon: <SiMongodb />,
    desc: "Engineered scalable document persistence architectures with MongoDB Atlas cloud clusters, indexing, and schema modeling for dynamic social data.",
    tags: ["MongoDB", "MongoDB Atlas", "NoSQL Document Modeling", "Cloud DB"],
  },
  {
    step: "08",
    title: "Full-Stack Application Deployment",
    focus: "End-to-End Social Media & Enterprise Systems",
    icon: <FaLayerGroup />,
    desc: "Successfully built and deployed end-to-end applications including the featured full-stack Instagram social platform, Course Registration System, and Employee Management System.",
    tags: ["Full-Stack Integration", "Cloud Deployment", "API Synchronization"],
  },
  {
    step: "09",
    title: "Current Goal & Next Milestone",
    focus: "Software Developer / Full Stack Engineer",
    icon: <FaBullseye />,
    desc: "Fresher seeking software engineering opportunities to contribute high-impact Java full-stack code, solve complex technical challenges, and build reliable software.",
    tags: ["Software Engineer", "Full Stack Developer", "Ready for Opportunities"],
    highlight: true,
  },
];

function Journey() {
  return (
    <section className="journey-section section-container" id="journey">
      <div className="section-header">
        <span className="section-tag">PROGRESSION PATHWAY</span>
        <h2 className="section-title">
          DEVELOPMENT <span>JOURNEY</span>
        </h2>
        <p className="section-subtitle">
          From computer science fundamentals to building complete enterprise Java full-stack applications.
        </p>
      </div>

      <div className="journey-timeline">
        <div className="timeline-central-spine"></div>

        {JOURNEY_MILESTONES.map((item, index) => (
          <div
            key={item.step}
            className={`journey-milestone-item ${index % 2 === 0 ? "left" : "right"} ${item.highlight ? "highlight-target" : ""}`}
          >
            {/* Timeline Center Node */}
            <div className="milestone-spine-node">
              <div className="spine-icon-wrap">{item.icon}</div>
              <span className="spine-step-num">{item.step}</span>
            </div>

            {/* Content Card */}
            <div className={`milestone-content-card ${item.highlight ? "gold-panel" : "glass-panel"}`}>
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
        ))}
      </div>
    </section>
  );
}

export default Journey;
