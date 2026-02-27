import { useTranslation } from 'react-i18next';
import { experiences } from '../../data';
import styles from './Experience.module.scss';

export function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow} aria-hidden="true">{t('experience.eyebrow')}</span>
          <h2 id="experience-title" className={styles.title}>
            {t('experience.title')}
            <span className={styles.titleAccent}> {t('experience.titleAccent')}</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map(exp => (
            <article key={exp.id} className={styles.entry}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.content}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.company}>{exp.company}</span>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.tasks} role="list">
                  {exp.tasks.map(task => <li key={task} className={styles.task}>{task}</li>)}
                </ul>
                {exp.links && exp.links.length > 0 && (
                  <div className={styles.links}>
                    {exp.links.map(l => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
