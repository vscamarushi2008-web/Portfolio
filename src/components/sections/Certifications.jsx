import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import MagneticButton from "../ui/MagneticButton";
import { certifications, studyJam, profile } from "../../data/content";

export default function Certifications() {
  return (
    <section id="credentials" className="relative py-24 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="04"
          eyebrow="CREDENTIALS"
          title="Certifications & Training"
        />

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassPanel className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="p-4 text-sm text-ink-dim font-medium">
                  {cert.title}
                </p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Study Jam panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassPanel strong className="p-7 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-signal" />
              <h3 className="font-display text-xl md:text-2xl text-ink font-semibold">
                {studyJam.title}
              </h3>
            </div>
            <div className="space-y-3 mb-6 max-w-3xl">
              {studyJam.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-dim leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <MagneticButton href={profile.skillBadges} variant="secondary">
              View My Skill Badges <ExternalLink size={14} />
            </MagneticButton>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
