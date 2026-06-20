import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FloatingProjectCard3D from "../three/FloatingProjectCard3D";
import { projects } from "../../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03"
          eyebrow="PROJECTS"
          title="Active Research Projects"
          description="Hover or tap a panel to inspect — each one tilts toward your cursor like a lab instrument readout."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <FloatingProjectCard3D className="p-7 md:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[11px] text-signal tracking-widest">
                    {project.tag}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${
                      project.status === "ACTIVE"
                        ? "border-signal/40 text-signal"
                        : "border-highlight/40 text-highlight"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="text-3xl mb-3">{project.emoji}</div>

                <h3 className="font-display text-xl md:text-2xl text-ink font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-ink-dim text-sm md:text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="mt-auto space-y-2.5 pt-4 border-t border-line/60">
                  {project.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-ink-dim"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-signal shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </FloatingProjectCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
