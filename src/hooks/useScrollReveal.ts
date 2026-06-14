import { useEffect, useRef } from 'react';

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
  const animationRef = useRef(animation);
  const hasRevealedRef = useRef(false);

  animationRef.current = animation;

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasRevealedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealedRef.current) {
          hasRevealedRef.current = true;
          animationRef.current(element);
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
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return containerRef;
}
