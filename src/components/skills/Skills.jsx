import { useState, useRef, useEffect } from "react";
import { FaJava, FaReact, FaDatabase, FaTools, FaServer, FaShieldAlt, FaKey, FaLayerGroup, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCode } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPostman, SiHibernate } from "react-icons/si";
import * as THREE from "three";
import "./Skills.css";

const SKILLS_DATA = [
  {
    category: "languages",
    categoryLabel: "PROGRAMMING LANGUAGES",
    tagline: "Core compiled and interpreted programming languages for robust system engineering",
    skills: [
      { name: "Java", role: "OOP, Multithreading & Collections", icon: <FaJava /> },
      { name: "C", role: "Low-Level Foundations & Memory Logic", icon: <FaCode /> },
      { name: "C++", role: "OOP Principles & System Concepts", icon: <FaCode /> },
      { name: "JavaScript", role: "ES6+, Async/Await & DOM Architecture", icon: <FaJs /> },
    ],
  },
  {
    category: "backend",
    categoryLabel: "BACKEND & ENTERPRISE JAVA",
    tagline: "Enterprise Java ecosystem, Spring Boot microservices, and security filter chains",
    skills: [
      { name: "Spring Boot", role: "Microservices & REST Controllers", icon: <SiSpringboot /> },
      { name: "Spring MVC", role: "Model-View-Controller Abstraction", icon: <FaServer /> },
      { name: "REST APIs", role: "Contract Design & HTTP Verbs", icon: <FaLayerGroup /> },
      { name: "Spring Security", role: "Filter Chains & RBAC Security", icon: <FaShieldAlt /> },
      { name: "JWT", role: "Stateless Token Authorization", icon: <FaKey /> },
      { name: "Servlets", role: "HTTP Request & Session Control", icon: <FaServer /> },
      { name: "JSP", role: "Dynamic Server-Side Pages", icon: <FaServer /> },
      { name: "JDBC", role: "Database Connectivity & Transactions", icon: <FaDatabase /> },
    ],
  },
  {
    category: "frontend",
    categoryLabel: "FRONTEND & REACT",
    tagline: "Component-driven, responsive user interfaces with modern client-side state management",
    skills: [
      { name: "React", role: "Component Architecture & Hooks", icon: <FaReact /> },
      { name: "HTML5", role: "Semantic Structure & Accessibility", icon: <FaHtml5 /> },
      { name: "CSS3", role: "Custom CSS, Animations & Responsiveness", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "database",
    categoryLabel: "DATABASE ARCHITECTURE",
    tagline: "Cloud NoSQL document clusters and enterprise relational database schemas",
    skills: [
      { name: "MongoDB", role: "NoSQL Flexible Document Modeling", icon: <SiMongodb /> },
      { name: "MongoDB Atlas", role: "Cloud Cluster & Performance Indexing", icon: <SiMongodb /> },
      { name: "Oracle", role: "Enterprise Relational Database & SQL", icon: <FaDatabase /> },
    ],
  },
  {
    category: "tools",
    categoryLabel: "TOOLS & JAVA WEB",
    tagline: "ORMs, persistence frameworks, API testing suites, version control, and IDEs",
    skills: [
      { name: "Hibernate", role: "ORM & Entity Mapping", icon: <SiHibernate /> },
      { name: "Spring Data JPA", role: "Repository Abstraction & CRUD", icon: <FaDatabase /> },
      { name: "Git", role: "Version Control & Branch Management", icon: <FaGitAlt /> },
      { name: "GitHub", role: "Code Hosting & Collaboration", icon: <FaTools /> },
      { name: "Postman", role: "API Endpoint Testing & Validation", icon: <SiPostman /> },
      { name: "IntelliJ IDEA", role: "Java & Spring Development", icon: <FaTools /> },
      { name: "VS Code", role: "Frontend & Full-Stack Editing", icon: <FaTools /> },
      { name: "Eclipse", role: "Java Enterprise Tools", icon: <FaTools /> },
      { name: "NetBeans", role: "Java Application Environment", icon: <FaTools /> },
    ],
  },
];

function SkillsVisualizer({ activeCategory }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Central Sphere Node
    const centerGeo = new THREE.SphereGeometry(0.35, 24, 24);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x8C6A1E,
      emissiveIntensity: 0.4,
    });
    const centerNode = new THREE.Mesh(centerGeo, centerMat);
    group.add(centerNode);

    // Orbital Rings
    const ringGeo = new THREE.TorusGeometry(1.4, 0.008, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.35 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 3;
    group.add(ring2);

    // Dynamic Nodes for technologies
    const nodesCount = 10;
    const nodes = [];
    const lineMat = new THREE.LineBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.22 });

    for (let i = 0; i < nodesCount; i++) {
      const angle = (i / nodesCount) * Math.PI * 2;
      const radius = 1.35 + (i % 3) * 0.2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle * 2) * 0.35;
      const z = Math.sin(angle) * radius;

      const nodeGeo = new THREE.SphereGeometry(0.05, 12, 12);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0xF5E2B3,
        emissive: 0xD4AF37,
        emissiveIntensity: 0.7,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      group.add(nodeMesh);

      // Connect line to center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z),
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      group.add(line);

      nodes.push({ mesh: nodeMesh, line, angle, radius, speed: (i % 2 === 0 ? 1 : -1) * (0.3 + (i % 3) * 0.1) });
    }

    // Light
    const light = new THREE.PointLight(0xD4AF37, 2.5, 10);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xFFFFFF, 0.7));

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        group.rotation.y = elapsed * 0.2;
        group.rotation.x = Math.sin(elapsed * 0.3) * 0.1;

        nodes.forEach((n) => {
          const currentAngle = n.angle + elapsed * n.speed * 0.4;
          const nx = Math.cos(currentAngle) * n.radius;
          const nz = Math.sin(currentAngle) * n.radius;
          const ny = Math.sin(currentAngle * 2) * 0.35;
          n.mesh.position.set(nx, ny, nz);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      if (nw === 0 || nh === 0) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      centerGeo.dispose();
      centerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, [activeCategory]);

  return <div ref={canvasRef} className="skills-3d-visualizer" aria-hidden="true" />;
}

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const displayedCategories =
    activeTab === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((cat) => cat.category === activeTab);

  const totalSkillsCount = SKILLS_DATA.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section className="skills-section section-container" id="skills">
      <div className="section-header">
        <span className="section-tag">FULL-STACK MATRIX</span>
        <h2 className="section-title">
          TECHNICAL <span>COMPETENCIES</span>
        </h2>
        <p className="section-subtitle">
          Applied programming languages, enterprise Java frameworks, and cloud persistence architectures.
        </p>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="skills-filter-tabs">
        <button
          className={`skills-tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          <span>ALL TECHNOLOGIES</span>
          <span className="tab-count">{totalSkillsCount}</span>
        </button>
        <button
          className={`skills-tab-btn ${activeTab === "languages" ? "active" : ""}`}
          onClick={() => setActiveTab("languages")}
        >
          <span>LANGUAGES (C, C++, JAVA, JS)</span>
          <span className="tab-count">4</span>
        </button>
        <button
          className={`skills-tab-btn ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => setActiveTab("backend")}
        >
          <span>BACKEND & ENTERPRISE</span>
          <span className="tab-count">8</span>
        </button>
        <button
          className={`skills-tab-btn ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => setActiveTab("frontend")}
        >
          <span>FRONTEND & REACT</span>
          <span className="tab-count">3</span>
        </button>
        <button
          className={`skills-tab-btn ${activeTab === "database" ? "active" : ""}`}
          onClick={() => setActiveTab("database")}
        >
          <span>DATABASES</span>
          <span className="tab-count">3</span>
        </button>
        <button
          className={`skills-tab-btn ${activeTab === "tools" ? "active" : ""}`}
          onClick={() => setActiveTab("tools")}
        >
          <span>TOOLS & ORM</span>
          <span className="tab-count">9</span>
        </button>
      </div>

      {/* Main Skills Layout */}
      <div className="skills-layout-grid">
        {/* Visualizer Showcase Card */}
        <div className="skills-visual-panel gold-panel">
          <div className="visual-panel-header">
            <span className="visual-badge">LIVE ORBITAL SYSTEM</span>
            <h3 className="visual-title">Technology Constellation</h3>
            <p className="visual-desc">
              Synchronized interaction between client UI, Spring services, security layers, and cloud document clusters.
            </p>
          </div>

          <div className="visualizer-container">
            <SkillsVisualizer activeCategory={activeTab} />
          </div>

          <div className="visual-panel-footer">
            <div className="visual-legend">
              <span className="legend-dot gold"></span>
              <span>Enterprise Java Core</span>
              <span className="legend-dot light-gold"></span>
              <span>React & Cloud DB</span>
            </div>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="skills-cards-wrapper">
          {displayedCategories.map((group) => (
            <div key={group.category} className="skill-category-box glass-panel">
              <div className="category-header">
                <div>
                  <h3 className="category-title">{group.categoryLabel}</h3>
                  <p className="category-tagline">{group.tagline}</p>
                </div>
                <span className="category-counter">{group.skills.length} Items</span>
              </div>

              <div className="skill-chips-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-node-item interactive-card">
                    <div className="skill-node-icon">{skill.icon}</div>
                    <div className="skill-node-content">
                      <span className="skill-node-name">{skill.name}</span>
                      <span className="skill-node-role">{skill.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;