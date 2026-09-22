import * as THREE from "three";

/**
 * Each waypoint = one "stop" the camera flies to as the user scrolls.
 * Order matches the section order in src/pages/Home.jsx.
 * Tweak x/y/z freely — z is "depth" (more negative = further into the scene).
 */
export const WAYPOINTS = [
  { id: "hero", position: [0, 0, 0] },
  { id: "about", position: [-40, 8, -120] },
  { id: "skills", position: [45, -6, -260] },
  { id: "featured-project", position: [-50, 10, -400] },
  { id: "other-projects", position: [40, -10, -540] },
  { id: "journey", position: [-30, 6, -680] },
  { id: "contact", position: [0, 0, -820] },
];

export function buildCameraCurve() {
  const points = WAYPOINTS.map((w) => new THREE.Vector3(...w.position));
  return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
}

/** Returns { position, lookAt } for a given scroll progress t (0..1) */
export function getCameraTransform(curve, t) {
  const clampedT = Math.min(Math.max(t, 0), 1);
  const lookAheadT = Math.min(clampedT + 0.015, 1);
  const position = curve.getPointAt(clampedT);
  const lookAt = curve.getPointAt(lookAheadT);
  return { position, lookAt };
}
