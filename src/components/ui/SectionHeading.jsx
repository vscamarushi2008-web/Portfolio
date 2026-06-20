import { motion } from "framer-motion";

/**
 * Section heading styled like a lab log entry header:
 * a mono "// 0X_LABEL" eyebrow (the content genuinely is a sequential
 * research log — overview, about, research, projects, credentials,
 * contact — so the numbering carries real information) followed by
 * a large display title.
 */
export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs md:text-sm text-signal tracking-widest">
          {`// ${index} ${eyebrow}`}
        </span>
        <span className="h-px flex-1 bg-line max-w-[120px]" />
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-dim max-w-2xl text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
