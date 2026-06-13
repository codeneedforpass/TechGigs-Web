import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface ScrollRevealOptions {
  animation: (target: HTMLElement) => void;
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({
  animation,
  threshold = 0.1,
  rootMargin = '0px',
}: ScrollRevealOptions) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation(element);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animation, threshold, rootMargin]);

  return containerRef;
}
