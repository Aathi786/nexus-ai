import { useEffect, useRef } from "react";
import * as THREE from "three";

function Hero3DArchitecture() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Master Group
    const architectureGroup = new THREE.Group();
    scene.add(architectureGroup);

    // 1. Inner Core: Octahedron Software Kernel (Titanium & Gold)
    const coreGeo = new THREE.OctahedronGeometry(0.72, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x11141E,
      metalness: 0.95,
      roughness: 0.2,
      emissive: 0x6A521A,
      emissiveIntensity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    architectureGroup.add(coreMesh);

    // 1b. Gold Outer Wireframe Cage
    const wireGeo = new THREE.IcosahedronGeometry(0.95, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    architectureGroup.add(wireMesh);

    // 2. Interlocking Metallic Gold Architectural Rings
    // Ring 1: Equatorial API Plane
    const ring1Geo = new THREE.TorusGeometry(1.5, 0.018, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.9,
      roughness: 0.25,
      emissive: 0x997A2C,
      emissiveIntensity: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    architectureGroup.add(ring1);

    // Ring 2: Security & Encryption Orbital Ring
    const ring2Geo = new THREE.TorusGeometry(1.85, 0.014, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xF3E2A9,
      metalness: 0.85,
      roughness: 0.3,
      emissive: 0x705518,
      emissiveIntensity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.2;
    ring2.rotation.x = -Math.PI / 6;
    architectureGroup.add(ring2);

    // Ring 3: Data Persistence Tier Ring
    const ring3Geo = new THREE.TorusGeometry(2.15, 0.01, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xDFB756,
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 4;
    architectureGroup.add(ring3);

    // 3. Orbiting Architecture Layer Nodes (Java/Spring, React, Security, DB)
    const nodeGroup = new THREE.Group();
    architectureGroup.add(nodeGroup);

    const nodeData = [
      { name: "Frontend", color: 0xF5E0A3, radius: 1.5, speed: 0.6, yOffset: 0.2 },
      { name: "Backend", color: 0xD4AF37, radius: 1.85, speed: -0.45, yOffset: -0.3 },
      { name: "Security", color: 0xE8C568, radius: 1.65, speed: 0.5, yOffset: 0.4 },
      { name: "Database", color: 0xC5A059, radius: 2.15, speed: -0.35, yOffset: -0.2 },
    ];

    const nodeMeshes = [];
    const lineGroup = new THREE.Group();
    architectureGroup.add(lineGroup);

    nodeData.forEach((data, i) => {
      const angle = (i / nodeData.length) * Math.PI * 2;
      const nodeMeshGeo = new THREE.SphereGeometry(0.07, 16, 16);
      const nodeMeshMat = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.75,
        metalness: 0.8,
        roughness: 0.2,
      });
      const nodeMesh = new THREE.Mesh(nodeMeshGeo, nodeMeshMat);
      nodeGroup.add(nodeMesh);

      // Connecting Line to Center
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xD4AF37,
        transparent: true,
        opacity: 0.25,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * data.radius, data.yOffset, Math.sin(angle) * data.radius),
      ]);
      const lineMesh = new THREE.Line(lineGeo, lineMat);
      lineGroup.add(lineMesh);

      nodeMeshes.push({
        mesh: nodeMesh,
        line: lineMesh,
        lineGeo,
        angle,
        radius: data.radius,
        speed: data.speed,
        yOffset: data.yOffset,
      });
    });

    // 4. Subtle Ambient Floating Gold Particles
    const particleCount = isMobile ? 35 : 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cGold = new THREE.Color(0xD4AF37);
    const cGoldLight = new THREE.Color(0xF5E2B3);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const colorChoice = Math.random() > 0.4 ? cGold : cGoldLight;
      colors[i * 3] = colorChoice.r;
      colors[i * 3 + 1] = colorChoice.g;
      colors[i * 3 + 2] = colorChoice.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    architectureGroup.add(particles);

    // 5. Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xFFF2D1, 0.8);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.PointLight(0xD4AF37, 3.5, 12);
    goldKeyLight.position.set(3, 3, 3);
    scene.add(goldKeyLight);

    const goldRimLight = new THREE.PointLight(0xF5E5C0, 2.2, 10);
    goldRimLight.position.set(-3, -2, -2);
    scene.add(goldRimLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll depth effect
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.001;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Visibility Observer
    let isVisible = true;
    let animationFrameId;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        architectureGroup.rotation.y = mouseX + elapsedTime * 0.15;
        architectureGroup.rotation.x = -mouseY + Math.sin(elapsedTime * 0.3) * 0.06;
        architectureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08 - scrollYOffset * 0.3;

        coreMesh.rotation.y += 0.005;
        coreMesh.rotation.x -= 0.003;
        wireMesh.rotation.y -= 0.004;

        ring1.rotation.z += 0.004;
        ring2.rotation.z -= 0.005;
        ring3.rotation.x += 0.003;

        particles.rotation.y += 0.001;

        // Animate orbiting architecture nodes & connection lines
        nodeMeshes.forEach((item) => {
          const currentAngle = item.angle + elapsedTime * item.speed;
          const px = Math.cos(currentAngle) * item.radius;
          const pz = Math.sin(currentAngle) * item.radius;
          const py = item.yOffset + Math.sin(elapsedTime * 1.2 + item.radius) * 0.12;

          item.mesh.position.set(px, py, pz);

          // Update connection line
          const positions = item.lineGeo.attributes.position.array;
          positions[3] = px;
          positions[4] = py;
          positions[5] = pz;
          item.lineGeo.attributes.position.needsUpdate = true;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      resizeObserver.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Cleanup geometries & materials
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      nodeMeshes.forEach((n) => {
        n.mesh.geometry.dispose();
        n.mesh.material.dispose();
        n.line.geometry.dispose();
        n.line.material.dispose();
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d-canvas-container"
      aria-hidden="true"
    />
  );
}

export default Hero3DArchitecture;
