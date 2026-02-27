import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getAssetUrl } from '../../utils/assetUrl';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.scss';

const LOGO_SRC = getAssetUrl('/logo.png');

const NAV_KEYS = ['about', 'skills', 'services', 'projects', 'experience', 'contact'] as const;

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = NAV_KEYS.map(key => ({
    href: `#${key}`,
    label: t(`nav.${key}`),
  }));

  // Détecter le scroll pour le style de la navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Détecter la section active
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Fermer le menu avec Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Bloquer le scroll body quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} aria-label="Demba Mbow — Retour en haut">
          <img
            src={LOGO_SRC}
            alt="Demba Mbow"
            className={styles.logoImg}
            width={36}
            height={36}
          />
          <span className={styles.logoName}>Demba Mbow</span>
        </a>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale">
          <ul className={styles.navList} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={styles.cta}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          {t('nav.cta')}
        </a>

        {/* Sélecteur de langue */}
        <LanguageSwitcher />

        {/* Burger menu (mobile) */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.mobileLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.mobileCta}
              onClick={(e) => handleNavClick(e, '#contact')}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t('nav.cta')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
