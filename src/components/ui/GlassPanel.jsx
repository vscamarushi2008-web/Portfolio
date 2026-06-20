/**
 * Base glass panel — the recurring "lab instrument panel" surface
 * used throughout the site. `strong` increases opacity/blur for
 * content that needs to read clearly over the 3D background.
 */
export default function GlassPanel({ children, className = "", strong = false }) {
  return (
    <div className={`${strong ? "glass-strong" : "glass"} rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
