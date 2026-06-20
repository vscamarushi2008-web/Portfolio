import { motion } from "framer-motion";
import { FileText, ExternalLink, Award } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import MagneticButton from "../ui/MagneticButton";
import { projects } from "../../data/content";

export default function Research() {
  const paper = projects.find((p) => p.paperUrl);

  return (
    <section id="research" className="relative py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="02"
          eyebrow="PUBLICATIONS"
          title="Research Contribution"
          description="Peer-acknowledged contribution at HCI Lab, IIIT Sri City."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassPanel strong className="p-7 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-signal/10 blur-3xl pointer-events-none" />

            <div className="flex items-start gap-4 mb-6">
              <span className="p-3 rounded-xl bg-signal/10 text-signal shrink-0">
                <FileText size={24} />
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-highlight tracking-widest mb-2">
                  <Award size={12} /> ACKNOWLEDGED CONTRIBUTOR
                </span>
                <h3 className="font-display text-xl md:text-2xl text-ink font-semibold leading-snug">
                  "A Study in Transparent Adaptation and Joint-Level Feedback
                  for Unsupervised Upper-Limb Rehabilitation"
                </h3>
              </div>
            </div>

            <p className="text-ink-dim leading-relaxed mb-8 max-w-2xl">
              Contributed to this study, acknowledged at HCI Lab, IIIT Sri
              City, focused on transparent adaptation and joint-level feedback
              for unsupervised upper-limb rehabilitation systems.
            </p>

            <MagneticButton href={paper?.paperUrl} variant="primary">
              <FileText size={16} /> View Full Paper <ExternalLink size={14} />
            </MagneticButton>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
