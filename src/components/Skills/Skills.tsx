import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../../data';
import type { Skill } from '../../types';
import styles from './Skills.module.scss';

type Category = 'all' | Skill['category'];

export function Skills() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>('all');

  const categories: { value: Category; label: string }[] = [
    { value: 'all',       label: t('skills.filterAll') },
    { value: 'design',    label: `🎨 ${t('skills.filterDesign')}` },
    { value: 'dev',       label: `💻 ${t('skills.filterDev')}` },
    { value: 'marketing', label: `📈 ${t('skills.filterMarketing')}` },
    { value: 'business',  label: `🚀 ${t('skills.filterBusiness')}` },
  ];

  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow} aria-hidden="true">{t('skills.eyebrow')}</span>
          <h2 id="skills-title" className={styles.title}>
            {t('skills.title')}
            <span className={styles.titleAccent}> {t('skills.titleAccent')}</span>
          </h2>
          <p className={styles.subtitle}>{t('skills.subtitle')}</p>
        </div>

        <div role="group" aria-label="Filter skills" className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`${styles.filter} ${active === cat.value ? styles.filterActive : ''}`}
              aria-pressed={active === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <ul className={styles.grid} role="list">
          {filtered.map(skill => (
            <li key={skill.name} className={styles.card}>
              {skill.icon.startsWith('http') ? (
                <img src={skill.icon} alt="" className={styles.iconImg} aria-hidden="true" />
              ) : (
                <span className={styles.icon} aria-hidden="true">{skill.icon}</span>
              )}
              <span className={styles.name}>{skill.name}</span>
              <span className={`${styles.badge} ${styles[`badge_${skill.category}`]}`}>
                {skill.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
