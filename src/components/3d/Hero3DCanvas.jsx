import { useEffect, useRef } from "react";
import * as THREE from "three";

function Hero3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 440;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    container.appendChild(renderer.domElement);

    // Master Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Geodesic Quantum Mesh (Clean Wireframe & Inner Core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.05, 1);
    const coreWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const coreWireframe = new THREE.Mesh(coreGeometry, coreWireMaterial);
    coreGroup.add(coreWireframe);

    const innerGeometry = new THREE.IcosahedronGeometry(0.78, 2);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.85,
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerCore);

    // 2. Orbital Tech Rings (Representing Architecture Layers)
    const ring1Geometry = new THREE.TorusGeometry(1.55, 0.015, 16, 90);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(1.85, 0.012, 16, 90);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 3.5;
    coreGroup.add(ring2);

    // 3. Orbiting Architecture Nodes (Java, Spring, React, DB)
    const nodeGroup = new THREE.Group();
    coreGroup.add(nodeGroup);

    const nodeColors = [0x00e5ff, 0x10b981, 0x7c3aed, 0x38bdf8]; // Cyan (React), Green (Spring), Purple (Java), Blue (Oracle)
    const nodeCount = 4;
    const nodeMeshes = [];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 1.7;
      const nodeGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.8,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.4, Math.sin(angle) * radius);
      nodeGroup.add(nodeMesh);
      nodeMeshes.push({ mesh: nodeMesh, angle, radius });
    }

    // 4. Ambient Data Particles
    const particleCount = isMobile ? 30 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x00e5ff);
    const cPurple = new THREE.Color(0x7c3aed);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? cCyan : cPurple;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00e5ff, 2.2, 10);
    pointLightCyan.position.set(2.5, 2, 2.5);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0x7c3aed, 1.8, 10);
    pointLightPurple.position.set(-2.5, -2, 2);
    scene.add(pointLightPurple);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.35;
      targetY = y * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize
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

    // Visibility observer
    let isVisible = true;
    let animationFrameId;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreGroup.rotation.y = prefersReducedMotion ? 0 : mouseX + elapsedTime * 0.2;
      coreGroup.rotation.x = prefersReducedMotion ? 0 : -mouseY + Math.sin(elapsedTime * 0.4) * 0.08;

      if (!prefersReducedMotion) {
        ring1.rotation.z += 0.006;
        ring2.rotation.x += 0.005;
        particles.rotation.y -= 0.002;
        coreWireframe.rotation.y += 0.003;

        // Animate tech nodes orbit
        nodeMeshes.forEach((item, idx) => {
          const currentAngle = item.angle + elapsedTime * 0.5;
          item.mesh.position.x = Math.cos(currentAngle) * item.radius;
          item.mesh.position.z = Math.sin(currentAngle) * item.radius;
          item.mesh.position.y = Math.sin(elapsedTime * 1.5 + idx) * 0.2;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      resizeObserver.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreWireMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      nodeMeshes.forEach((n) => {
        n.mesh.geometry.dispose();
        n.mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}

export default Hero3DCanvas;
