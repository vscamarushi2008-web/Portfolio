import { useEffect, useState } from "react";

/**
 * Tracks pointer position normalized to [-1, 1] on both axes
 * (the convention Three.js / R3F pointer events use).
 * Falls back gracefully on touch devices (returns last known / center).
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setPosition({ x, y });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
