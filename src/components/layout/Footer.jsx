import { Mail } from "lucide-react";
import { profile } from "../../data/content";

// lucide-react v1 dropped brand/social glyphs, so LinkedIn and Instagram
// are small inline SVGs kept consistent with the lucide stroke style.
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint tracking-wide">
          © {new Date().getFullYear()} {profile.name} — LOG_END
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink-dim hover:text-signal transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-dim hover:text-signal transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-dim hover:text-signal transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
