import { useEffect, useRef } from "react";
import * as THREE from "three";
import { WAYPOINTS, buildCameraCurve, getCameraTransform } from "../../three/cameraPath";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import "./FlythroughCanvas.css";

const GOLD = 0xd4af37;
const GOLD_SOFT = 0xf5e4ba;

function FlythroughCanvas() {
  const mountRef = useRef(null);
  const progressRef = useScrollProgress();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    // ---------- Scene / Camera / Renderer ----------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060709, 0.0022);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.domElement.className = "flythrough-canvas";
    container.appendChild(renderer.domElement);

    // ---------- Lights ----------
    scene.add(new THREE.AmbientLight(0x332a1a, 1.2));
    const keyLight = new THREE.PointLight(GOLD, 2.5, 800);
    keyLight.position.set(0, 40, 40);
    scene.add(keyLight);

    // ---------- Starfield (depth cue while flying) ----------
    const starCount = isMobile ? 400 : 1000;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 1200;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 1200 - 400;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: GOLD_SOFT,
      size: 1.1,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ---------- Camera path ----------
    const curve = buildCameraCurve();
    const pathPoints = curve.getPoints(200);
    const pathLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pathPoints),
      new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.08 })
    );
    scene.add(pathLine);

    // ---------- Waypoint set-pieces ----------
    const waypointGroups = [];

    WAYPOINTS.forEach((wp, index) => {
      const group = new THREE.Group();
      group.position.set(...wp.position);

      switch (wp.id) {
        case "hero": {
          // Orbiting rings, echoes the existing constellation hero graphic
          for (let r = 0; r < 3; r++) {
            const ring = new THREE.Mesh(
              new THREE.TorusGeometry(18 + r * 8, 0.15, 8, 64),
              new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.35 })
            );
            ring.rotation.x = Math.random() * Math.PI;
            ring.rotation.y = Math.random() * Math.PI;
            ring.userData.spin = 0.001 + r * 0.0004;
            group.add(ring);
          }
          const core = new THREE.Mesh(
            new THREE.SphereGeometry(4, 24, 24),
            new THREE.MeshStandardMaterial({ color: GOLD, emissive: GOLD, emissiveIntensity: 0.6 })
          );
          group.add(core);
          break;
        }
        case "skills": {
          // Small orbiting nodes = tech stack constellation
          const nodeCount = 8;
          for (let i = 0; i < nodeCount; i++) {
            const angle = (i / nodeCount) * Math.PI * 2;
            const radius = 22;
            const node = new THREE.Mesh(
              new THREE.IcosahedronGeometry(1.4, 0),
              new THREE.MeshStandardMaterial({ color: GOLD_SOFT, emissive: GOLD, emissiveIntensity: 0.4 })
            );
            node.position.set(Math.cos(angle) * radius, Math.sin(angle) * 6, Math.sin(angle) * radius);
            group.add(node);
          }
          break;
        }
        case "featured-project":
        case "other-projects": {
          // Floating flat panels, like project cards suspended in space
          const panelCount = wp.id === "featured-project" ? 1 : 4;
          for (let i = 0; i < panelCount; i++) {
            const panel = new THREE.Mesh(
              new THREE.PlaneGeometry(14, 9),
              new THREE.MeshBasicMaterial({
                color: GOLD,
                transparent: true,
                opacity: 0.08,
                side: THREE.DoubleSide,
              })
            );
            const edges = new THREE.LineSegments(
              new THREE.EdgesGeometry(panel.geometry),
              new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.5 })
            );
            panel.add(edges);
            panel.position.set((i - panelCount / 2) * 18, (i % 2) * 6 - 3, -i * 6);
            panel.rotation.y = (i - panelCount / 2) * 0.15;
            group.add(panel);
          }
          break;
        }
        case "journey": {
          // Vertical stage nodes along a thin beam, echoes the timeline
          const stageCount = 6;
          for (let i = 0; i < stageCount; i++) {
            const stage = new THREE.Mesh(
              new THREE.OctahedronGeometry(1.6, 0),
              new THREE.MeshStandardMaterial({ color: GOLD, emissive: GOLD, emissiveIntensity: 0.5 })
            );
            stage.position.set(i % 2 === 0 ? -10 : 10, i * 5 - 12, -i * 8);
            group.add(stage);
          }
          break;
        }
        case "contact": {
          const beacon = new THREE.Mesh(
            new THREE.SphereGeometry(6, 32, 32),
            new THREE.MeshStandardMaterial({
              color: GOLD,
              emissive: GOLD,
              emissiveIntensity: 0.8,
              transparent: true,
              opacity: 0.5,
            })
          );
          group.add(beacon);
          break;
        }
        default:
          break;
      }

      scene.add(group);
      waypointGroups.push(group);
    });

    // ---------- Resize ----------
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // ---------- Render loop ----------
    let animationFrameId;
    let smoothT = 0;

    const render = () => {
      const targetT = progressRef.current;
      // Smooth/ease the camera motion so it doesn't feel jumpy on fast scroll
      smoothT += (targetT - smoothT) * (prefersReducedMotion ? 1 : 0.08);

      const { position, lookAt } = getCameraTransform(curve, smoothT);
      camera.position.copy(position);
      camera.lookAt(lookAt);

      if (!prefersReducedMotion) {
        waypointGroups.forEach((group) => {
          group.rotation.y += 0.0015;
          group.children.forEach((child) => {
            if (child.userData.spin) child.rotation.z += child.userData.spin;
          });
        });
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [progressRef]);

  return <div className="flythrough-container" ref={mountRef} aria-hidden="true" />;
}

export default FlythroughCanvas;
