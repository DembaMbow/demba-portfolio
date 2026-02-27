import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LANGS = [
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'English',  short: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'Español',  short: 'ES', flag: '🇪🇸' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = LANGS.find(l => l.code === i18n.language) ?? LANGS[0];

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
        <span className={styles.flag}>{active.flag}</span>
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
                <span className={styles.flag}>{lang.flag}</span>
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
