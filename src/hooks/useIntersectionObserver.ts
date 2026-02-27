import { useEffect, useRef } from 'react';

/**
 * Observe les éléments avec la classe "reveal" et ajoute
 * la classe "is-visible" quand ils entrent dans le viewport.
 */
export function useIntersectionObserver(rootMargin = '0px 0px -80px 0px') {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [rootMargin]);
}
