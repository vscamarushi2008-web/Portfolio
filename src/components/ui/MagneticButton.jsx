import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * CTA button that subtly pulls toward the cursor on hover —
 * a small, deliberate micro-interaction rather than scattered effects.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  as,
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-signal text-void hover:bg-highlight"
      : "glass-strong text-ink hover:border-signal/60";

  const Component = as || (href ? "a" : "button");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${base} ${styles} ${className}`}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </Component>
    </motion.div>
  );
}
