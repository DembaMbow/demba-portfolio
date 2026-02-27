import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

export function About() {
  const { t } = useTranslation();
  const values = t('values', { returnObjects: true }) as { title: string; description: string }[];
  const icons = ['🤝', '💡', '♾️', '🎯'];

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow} aria-hidden="true">{t('about.eyebrow')}</span>
          <h2 id="about-title" className={styles.title}>
            {t('about.titleLine1')}<br />
            <span className={styles.titleAccent}>{t('about.titleAccent')}</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarInner}>
                <img src="/demba-assis-pc.webp" alt="Demba Mbow" className={styles.avatarPhoto} />
              </div>
              <div className={styles.deco1} />
              <div className={styles.deco2} />
              <div className={styles.deco3} aria-hidden="true"><span>Perform Digital</span></div>
            </div>

            <dl className={styles.stats}>
              <div className={styles.statItem}>
                <dt className={styles.statLabel}>{t('about.statYears')}</dt>
                <dd className={styles.statValue}>5+</dd>
              </div>
              <div className={styles.statItem}>
                <dt className={styles.statLabel}>{t('about.statProjects')}</dt>
                <dd className={styles.statValue}>50+</dd>
              </div>
              <div className={styles.statItem}>
                <dt className={styles.statLabel}>{t('about.statClients')}</dt>
                <dd className={styles.statValue}>30+</dd>
              </div>
            </dl>
          </div>

          <div className={styles.bio}>
            <p className={styles.bioPara}>
              {t('about.bio1')} <strong>Need for School</strong> {t('about.bio1End')}
            </p>
            <p className={styles.bioPara}>
              {t('about.bio2Start')}{' '}
              <a href="https://perform-digital.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Perform Digital
              </a>
              {t('about.bio2Mid')}
            </p>
            <p className={styles.bioPara}>
              {t('about.bio3')} <strong>{t('about.bio3Time')}</strong> {t('about.bio3End')}
            </p>
            <a
              href="#contact"
              className={styles.cvLink}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t('about.cvBtn')}
            </a>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>{t('about.valuesTitle')}</h3>
          <ul className={styles.valuesList} role="list">
            {values.map((val, i) => (
              <li key={i} className={styles.valueCard}>
                <span className={styles.valueIcon} aria-hidden="true">{icons[i]}</span>
                <h4 className={styles.valueName}>{val.title}</h4>
                <p className={styles.valueDesc}>{val.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
