import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './Hero.module.scss';

export function Hero() {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true }) as string[];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setDisplayed('');
    setTyping(true);
    setRoleIndex(0);
  }, [roles[0]]);

  useEffect(() => {
    if (reducedMotion) { setDisplayed(roles[0]); return; }
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayed.length > 0) {
        const timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(timer);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex, reducedMotion, roles]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction — Demba Mbow">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge} role="text">
          <span className={styles.badgeDot} aria-hidden="true" />
          {t('hero.badge')}
        </div>

        <h1 className={styles.title}>
          <span className={styles.greeting}>{t('hero.greeting')}</span>
          <span className={styles.name}>Demba Mbow</span>
        </h1>

        <p className={styles.role} aria-live="polite" aria-atomic="true">
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </p>

        <p className={styles.description}>
          {t('hero.description')} <strong>{t('hero.location')}</strong>.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary} onClick={scrollTo('#projects')}>
            <span className={styles.btnEmoji} aria-hidden="true">🚀</span>
            {t('hero.btnProjects')}
          </a>
          <a href="#contact" className={styles.btnSecondary} onClick={scrollTo('#contact')}>
            <span className={styles.btnEmoji} aria-hidden="true">✉️</span>
            {t('hero.btnContact')}
          </a>
        </div>

        <div className={styles.socials}>
          <a href="mailto:dembambow.pro@gmail.com" className={styles.socialLink} aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span className={styles.socialLabel}>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/demba-mbow/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span className={styles.socialLabel}>LinkedIn</span>
          </a>
          <a href="https://wa.me/33666225155" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            <span className={styles.socialLabel}>WhatsApp</span>
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll down" onClick={scrollTo('#about')}>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
