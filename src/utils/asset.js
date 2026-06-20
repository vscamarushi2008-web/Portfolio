/**
 * Prefixes a path to a file in /public with Vite's configured base URL.
 *
 * Vite only auto-rewrites asset URLs it can see at build time (imports,
 * index.html tags). Plain strings stored in data — e.g. "/images/foo.png"
 * coming from content.js — are NOT rewritten, so under a non-root
 * `base` (like '/Portfolio/' for GitHub Pages) they 404 in both dev
 * and prod. Run every public-asset path through this helper instead.
 *
 * import.meta.env.BASE_URL already ends with a trailing slash
 * (e.g. "/Portfolio/" or "/" at the domain root), so we just strip
 * the leading slash off the input path and concatenate.
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL; // e.g. "/Portfolio/" or "/"
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
