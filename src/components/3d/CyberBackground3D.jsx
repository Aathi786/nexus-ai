import { useEffect, useRef } from "react";
import * as THREE from "three";

function CyberBackground3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 240;

    // Renderer with low-power profile
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.zIndex = "-2";
    container.appendChild(renderer.domElement);

    // Subtle Particle Cloud (Clean & Readable)
    const particleCount = isMobile ? 20 : 50;
    const maxDistance = isMobile ? 45 : 70;
    const particles = new Float32Array(particleCount * 3);
    const particleData = [];

    const bounds = 280;
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * bounds * 2 - bounds;
      const y = Math.random() * bounds * 2 - bounds;
      const z = Math.random() * bounds - bounds / 2;

      particles[i * 3] = x;
      particles[i * 3 + 1] = y;
      particles[i * 3 + 2] = z;

      particleData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.15
        ),
        numConnections: 0,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particles, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: isMobile ? 2.0 : 2.8,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(pointCloud);

    // Line segments for subtle connections
    const maxLineSegments = particleCount * particleCount;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineColors = new Float32Array(maxLineSegments * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const lineMaterial = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.2, // Subtle line opacity so text remains crystal clear
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(lineMaterial);

    // Mouse & Scroll Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const onMouseMove = (e) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.05;
      targetY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    const onScroll = () => {
      scrollY = window.scrollY * 0.03;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      camera.position.x = mouseX;
      camera.position.y = -mouseY - (prefersReducedMotion ? 0 : scrollY);
      camera.lookAt(scene.position);

      const positions = particleGeometry.attributes.position.array;
      let vertexPos = 0;
      let colorPos = 0;

      for (let i = 0; i < particleCount; i++) {
        if (!prefersReducedMotion) {
          positions[i * 3] += particleData[i].velocity.x;
          positions[i * 3 + 1] += particleData[i].velocity.y;
          positions[i * 3 + 2] += particleData[i].velocity.z;

          if (positions[i * 3] < -bounds || positions[i * 3] > bounds) {
            particleData[i].velocity.x = -particleData[i].velocity.x;
          }
          if (positions[i * 3 + 1] < -bounds || positions[i * 3 + 1] > bounds) {
            particleData[i].velocity.y = -particleData[i].velocity.y;
          }
          if (positions[i * 3 + 2] < -bounds / 2 || positions[i * 3 + 2] > bounds / 2) {
            particleData[i].velocity.z = -particleData[i].velocity.z;
          }
        }
      }

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[vertexPos++] = positions[i * 3];
            linePositions[vertexPos++] = positions[i * 3 + 1];
            linePositions[vertexPos++] = positions[i * 3 + 2];

            linePositions[vertexPos++] = positions[j * 3];
            linePositions[vertexPos++] = positions[j * 3 + 1];
            linePositions[vertexPos++] = positions[j * 3 + 2];

            lineColors[colorPos++] = 0;
            lineColors[colorPos++] = 0.8 * alpha;
            lineColors[colorPos++] = 0.9 * alpha;

            lineColors[colorPos++] = 0.45 * alpha;
            lineColors[colorPos++] = 0.2 * alpha;
            lineColors[colorPos++] = 0.85 * alpha;
          }
        }
      }

      lineGeometry.setDrawRange(0, vertexPos / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" />;
}

export default CyberBackground3D;
