declare global {
  interface Window { __WP_THEME_URI__?: string; }
}

/**
 * Résout le chemin d'un asset statique.
 * - En local / Netlify : retourne le chemin tel quel (ex: "/projects/naza-night.png")
 * - Sur WordPress : préfixe avec l'URL du thème injectée par PHP
 *   (ex: "https://dembambow.com/wp-content/themes/demba-portfolio-wordpress/assets/projects/naza-night.png")
 */
export function getAssetUrl(path: string): string {
  if (window.__WP_THEME_URI__) {
    return `${window.__WP_THEME_URI__}/assets${path}`;
  }
  return path;
}
