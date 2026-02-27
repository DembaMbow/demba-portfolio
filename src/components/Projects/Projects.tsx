import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data';
import { getAssetUrl } from '../../utils/assetUrl';
import styles from './Projects.module.scss';

const allCategories = ['Tous', ...Array.from(new Set(projects.map(p => p.category)))];

export function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const filterLabel = (cat: string) => cat === 'Tous' ? t('projects.filterAll') : cat;

  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow} aria-hidden="true">{t('projects.eyebrow')}</span>
          <h2 id="projects-title" className={styles.title}>
            {t('projects.title')}
            <span className={styles.titleAccent}> {t('projects.titleAccent')}</span>
          </h2>
          <p className={styles.subtitle}>{t('projects.subtitle')}</p>
        </div>

        <div role="group" aria-label="Filter projects" className={styles.filters}>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.filter} ${activeCategory === cat ? styles.filterActive : ''}`}
              aria-pressed={activeCategory === cat}
            >
              {filterLabel(cat)}
            </button>
          ))}
        </div>

        <ul className={styles.grid} role="list">
          {filtered.map(project => (
            <li key={project.id} className={styles.card}>
              <div className={styles.visual} style={{ '--accent': project.color } as React.CSSProperties} aria-hidden="true">
                <img src={getAssetUrl(project.image)} alt={project.title} className={styles.projectImg} loading="lazy" />
                <div className={styles.visualOverlay} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.category} style={{ '--accent': project.color } as React.CSSProperties}>
                  {project.category}
                </span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <ul className={styles.tags} role="list">
                  {project.tags.map(tag => <li key={tag} className={styles.tag}>{tag}</li>)}
                </ul>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {project.linkLabel === 'Voir le site' ? t('projects.viewSite') : t('projects.viewProject')}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          <span aria-hidden="true">💡</span>{' '}
          {t('projects.note')}{' '}
          <a href="#contact" className={styles.noteLink} onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            {t('projects.noteLink')}
          </a>
        </p>
      </div>
    </section>
  );
}
