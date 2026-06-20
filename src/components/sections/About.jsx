import { motion } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  FileText,
  Hand,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import { aboutParagraphs, journey, profile } from "../../data/content";

const iconMap = {
  "graduation-cap": GraduationCap,
  "flask-conical": FlaskConical,
  "file-text": FileText,
  hand: Hand,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="01"
          eyebrow="ABOUT"
          title="About the Researcher"
        />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Photo + journey panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassPanel className="p-6">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden signal-border mb-6">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
              </div>

              <p className="font-mono text-xs text-signal tracking-widest mb-4">
                JOURNEY.LOG
              </p>
              <ul className="space-y-4">
                {journey.map((step, i) => {
                  const Icon = iconMap[step.icon];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 p-1.5 rounded-md bg-signal/10 text-signal shrink-0">
                        <Icon size={16} />
                      </span>
                      <span className="text-sm text-ink-dim leading-relaxed">
                        {step.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </GlassPanel>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-ink-dim text-base md:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
