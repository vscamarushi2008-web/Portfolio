import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NeuralNetworkScene from "../three/NeuralNetworkScene";
import MagneticButton from "../ui/MagneticButton";
import { profile } from "../../data/content";
import { useMousePosition } from "../../hooks/useMousePosition";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const mouse = useMousePosition();
  const [ready, setReady] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
    >
      {/* 3D background */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <NeuralNetworkScene mouse={mouse} />
        </Suspense>
      </div>

      {/* Vignette + grid texture for lab-void depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none grid-fade-mask opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        onAnimationComplete={() => setReady(true)}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24"
      >
        <motion.span
          variants={item}
          className="inline-block font-mono text-xs md:text-sm text-signal tracking-[0.2em] mb-6 px-4 py-1.5 rounded-full border border-signal/30 glass"
        >
          SYSTEM.STATUS — RESEARCH ACTIVE
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-ink leading-[1.05] tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-sm md:text-lg text-signal tracking-wide"
        >
          {profile.role}
          <span className="text-ink-faint"> @ {profile.affiliation}</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 text-ink-dim text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {profile.tagline} 🌍
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton href="#research" variant="primary">
            View Research
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Get in Touch
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint z-10"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
