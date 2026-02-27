import styles from './SkipLink.module.scss';

/**
 * Lien "Aller au contenu principal" — WCAG 2.4.1 (A)
 * Visible uniquement au focus clavier.
 */
export function SkipLink() {
  return (
    <a href="#main-content" className={styles.skipLink}>
      Aller au contenu principal
    </a>
  );
}
