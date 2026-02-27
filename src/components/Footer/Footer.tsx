import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const NAV_KEYS = ['about', 'skills', 'services', 'projects', 'experience', 'contact'] as const;

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = NAV_KEYS.map(key => ({
    href: `#${key}`,
    label: t(`nav.${key}`),
  }));

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Top : Logo + Nav + Socials */}
        <div className={styles.top}>
          {/* Logo */}
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo} aria-label="Demba Mbow — Retour en haut de page">
              <span className={styles.logoMark} aria-hidden="true">DM</span>
              <span className={styles.logoName}>Demba Mbow</span>
            </a>
            <p className={styles.tagline}>
              {t('footer.tagline1')}<br />
              {t('footer.tagline2')}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label={t('footer.navigation')}>
            <h3 className={styles.navTitle}>{t('footer.navigation')}</h3>
            <ul className={styles.navList} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact rapide */}
          <div>
            <h3 className={styles.navTitle}>Contact</h3>
            <ul className={styles.contactList} role="list">
              <li>
                <a
                  href="mailto:dembambow.pro@gmail.com"
                  className={styles.contactLink}
                  aria-label="Email"
                >
                  ✉️ dembambow.pro@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/demba-mbow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label="LinkedIn"
                >
                  💼 LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33666225155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label="WhatsApp"
                >
                  📱 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://perform-digital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label="Perform Digital"
                >
                  🚀 Perform Digital
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className={styles.divider} role="separator" aria-hidden="true" />

        {/* Bottom : copyright + mention */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Demba Mbow. {t('footer.copyright')}
          </p>
          <p className={styles.mention}>
            {t('footer.mention')}
          </p>
          <a
            href="#hero"
            className={styles.backTop}
            aria-label={t('footer.backTop')}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
