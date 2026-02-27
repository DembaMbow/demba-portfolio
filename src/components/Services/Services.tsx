import { useTranslation } from 'react-i18next';
import { services } from '../../data';
import styles from './Services.module.scss';

export function Services() {
  const { t } = useTranslation();
  const serviceItems = t('services.items', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow} aria-hidden="true">{t('services.eyebrow')}</span>
          <h2 id="services-title" className={styles.title}>
            {t('services.title')}
            <span className={styles.titleAccent}> {t('services.titleAccent')}</span>
          </h2>
          <p className={styles.subtitle}>{t('services.subtitle')}</p>
        </div>

        <ul className={styles.grid} role="list">
          {services.map((service, i) => (
            <li key={service.id} className={styles.card}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{serviceItems[i]?.title ?? service.title}</h3>
              <p className={styles.cardDesc}>{serviceItems[i]?.description ?? service.description}</p>
              <div className={styles.cardFooter} aria-hidden="true">
                <span className={styles.arrow}>→</span>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <p className={styles.ctaText}>{t('services.ctaText')}</p>
          <a
            href="#contact"
            className={styles.ctaBtn}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            {t('services.ctaBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
