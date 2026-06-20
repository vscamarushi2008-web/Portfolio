import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import GlassPanel from "../ui/GlassPanel";
import MagneticButton from "../ui/MagneticButton";
import { photography, profile } from "../../data/content";

export default function Photography() {
  return (
    <section className="relative py-8 md:py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassPanel className="p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-xl bg-blue/10 text-blue shrink-0">
                <Camera size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg md:text-xl text-ink font-semibold mb-2">
                  {photography.title}
                </h3>
                <p className="text-ink-dim text-sm md:text-base leading-relaxed max-w-xl">
                  {photography.description}
                </p>
              </div>
            </div>
            <MagneticButton href={profile.instagram} variant="secondary" className="shrink-0">
              Visit My Photography <ExternalLink size={14} />
            </MagneticButton>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
