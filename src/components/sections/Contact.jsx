import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import { profile } from "../../data/content";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-5">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index="05"
          eyebrow="CONTACT"
          title="Open Channel"
          description="Open to research collaborations and opportunities 🚀"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          <a href={`mailto:${profile.email}`} className="group">
            <GlassPanel strong className="p-7 h-full transition-colors group-hover:border-signal/40">
              <div className="flex items-start justify-between mb-4">
                <span className="p-3 rounded-xl bg-signal/10 text-signal">
                  <Mail size={20} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint group-hover:text-signal transition-colors"
                />
              </div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-1">
                EMAIL
              </p>
              <p className="text-ink font-medium break-all">{profile.email}</p>
            </GlassPanel>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <GlassPanel strong className="p-7 h-full transition-colors group-hover:border-signal/40">
              <div className="flex items-start justify-between mb-4">
                <span className="p-3 rounded-xl bg-blue/10 text-blue">
                  <LinkedinIcon className="w-5 h-5" />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint group-hover:text-signal transition-colors"
                />
              </div>
              <p className="font-mono text-xs text-ink-faint tracking-widest mb-1">
                LINKEDIN
              </p>
              <p className="text-ink font-medium">Vijayasri Camarushi</p>
            </GlassPanel>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
