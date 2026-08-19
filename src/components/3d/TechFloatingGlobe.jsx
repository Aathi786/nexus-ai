import { useEffect, useRef } from "react";
import * as THREE from "three";

function TechFloatingGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Wireframe Outer Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.4, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const globeWire = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globeWire);

    // 2. Core Glow Sphere
    const innerGeometry = new THREE.SphereGeometry(1.15, 24, 24);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x111836,
      roughness: 0.4,
      metalness: 0.8,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.9,
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    globeGroup.add(innerSphere);

    // 3. Tech Node Points on Sphere Surface (Representing Full Stack Nodes)
    const nodeCount = 28;
    const nodeGeo = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      nodePositions[i * 3] = 1.4 * Math.cos(theta) * Math.sin(phi);
      nodePositions[i * 3 + 1] = 1.4 * Math.sin(theta) * Math.sin(phi);
      nodePositions[i * 3 + 2] = 1.4 * Math.cos(phi);
    }
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

    const nodeMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    globeGroup.add(nodes);

    // 4. Equatorial Ring
    const ringGeo = new THREE.TorusGeometry(1.8, 0.012, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    globeGroup.add(ring);

    // Lighting
    const light = new THREE.DirectionalLight(0x00e5ff, 2.5);
    light.position.set(2, 3, 4);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetX = (((e.clientX - rect.left) / rect.width) * 2 - 1) * 0.5;
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1) * 0.5;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // Visibility observer
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    visibilityObserver.observe(container);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        globeGroup.rotation.y += delta * 0.4;
        globeGroup.rotation.x = mouseY;
        globeGroup.rotation.z = mouseX * 0.3;
        ring.rotation.z += delta * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      sphereGeometry.dispose();
      sphereMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "260px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      aria-label="3D Technology Telemetry Orbit"
    />
  );
}

export default TechFloatingGlobe;
