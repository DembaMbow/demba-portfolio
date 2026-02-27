import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LANGS = [
  { code: 'fr', label: 'Français', short: 'FR', flagSrc: 'https://flagcdn.com/24x18/fr.png', flagSrc2x: 'https://flagcdn.com/48x36/fr.png' },
  { code: 'en', label: 'English',  short: 'EN', flagSrc: 'https://flagcdn.com/24x18/gb.png', flagSrc2x: 'https://flagcdn.com/48x36/gb.png' },
  { code: 'es', label: 'Español',  short: 'ES', flagSrc: 'https://flagcdn.com/24x18/es.png', flagSrc2x: 'https://flagcdn.com/48x36/es.png' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = LANGS.find(l => l.code === i18n.language.split('-')[0]) ?? LANGS[0];

  // Fermer en cliquant ailleurs
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(p => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Changer de langue"
      >
        <img
          src={active.flagSrc}
          srcSet={`${active.flagSrc2x} 2x`}
          alt={active.label}
          className={styles.flag}
          width={24}
          height={18}
        />
        <span className={styles.short}>{active.short}</span>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}>▾</span>
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox" aria-label="Langues disponibles">
          {LANGS.map(lang => (
            <li key={lang.code} role="option" aria-selected={lang.code === active.code}>
              <button
                className={`${styles.option} ${lang.code === active.code ? styles.optionActive : ''}`}
                onClick={() => switchLang(lang.code)}
              >
                <img
                  src={lang.flagSrc}
                  srcSet={`${lang.flagSrc2x} 2x`}
                  alt={lang.label}
                  className={styles.flag}
                  width={24}
                  height={18}
                />
                <span className={styles.langLabel}>{lang.label}</span>
                {lang.code === active.code && <span className={styles.check}>✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
