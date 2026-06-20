import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin signal-colored progress bar fixed to the top of the viewport,
 * reading like a lab telemetry readout of "scroll progress" through
 * the research log.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-signal origin-left z-[60]"
    />
  );
}
