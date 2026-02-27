import { useEffect } from 'react';
import { SkipLink } from './components/SkipLink/SkipLink';
import { Header }   from './components/Header/Header';
import { Hero }     from './components/Hero/Hero';
import { About }    from './components/About/About';
import { Skills }   from './components/Skills/Skills';
import { Services } from './components/Services/Services';
import { Projects }    from './components/Projects/Projects';
import { Experience }  from './components/Experience/Experience';
import { Contact }     from './components/Contact/Contact';
import { Footer }   from './components/Footer/Footer';

export default function App() {
  // Ajouter les classes reveal PUIS lancer l'observateur dans le même effet
  useEffect(() => {
    // 1. Ajouter la classe reveal aux sections paires
    const sections = document.querySelectorAll('section > div');
    sections.forEach((el, i) => {
      if (i % 2 === 0) el.classList.add('reveal');
    });

    // 2. Observer tous les éléments reveal (après qu'ils ont été ajoutés)
    const elements = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Lien d'évitement — WCAG 2.4.1 */}
      <SkipLink />

      {/* Navigation globale */}
      <Header />

      {/* Contenu principal */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
