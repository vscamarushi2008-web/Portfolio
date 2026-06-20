import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import { skills } from "../../data/content";

export default function Skills() {
  return (
    <section className="relative py-8 md:py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <GlassPanel className="p-6 md:p-10" strong>
          <p className="font-mono text-xs text-signal tracking-widest mb-8">
            CAPABILITY.READOUT
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display text-ink text-base md:text-lg">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-ink-faint uppercase tracking-wider">
                    {skill.status}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-panel-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue to-signal"
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
