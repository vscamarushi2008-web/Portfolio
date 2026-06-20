import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Wraps children in a glass panel that tilts in 3D toward the cursor
 * and floats gently when idle. Used for project cards, certification
 * tiles, etc. Pure CSS 3D transforms (no R3F) — keeps the DOM content
 * fully accessible while still feeling like a floating lab artifact.
 */
export default function FloatingProjectCard3D({ children, className = "" }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 18,
  });
  const glowX = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      animate={!hovered ? { y: [0, -8, 0] } : { y: 0 }}
      transition={
        !hovered
          ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.3 }
      }
      className={`relative glass rounded-2xl overflow-hidden ${className}`}
    >
      {/* Cursor-follow glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(0,217,255,0.12), transparent 60%)`,
        }}
      />
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
