import { useEffect, useRef } from 'react';

const paragraphs = [
  'Techgigs Zambo is a student-led creative and technology team dedicated to building modern, accessible, and affordable digital solutions.',
  'We combine design, development, and emerging technologies to help students, local businesses, and entrepreneurs establish a stronger digital presence.',
];

const highlightWords = new Set([
  'Techgigs',
  'Zambo',
  'modern,',
  'accessible,',
  'affordable',
  'design,',
  'development,',
  'emerging',
  'technologies',
]);

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function applyWordStyles(word: HTMLElement, eased: number) {
  const isHighlight = word.dataset.highlight === 'true';

  word.style.opacity = String(0.08 + eased * 0.92);
  word.style.transform = `translateY(${(1 - eased) * 12}px)`;
  word.style.filter = `blur(${(1 - eased) * 4}px)`;

  if (isHighlight && eased > 0.55) {
    word.style.color = '#22d3ee';
    word.style.textShadow = eased > 0.85 ? '0 0 20px rgba(34, 211, 238, 0.35)' : 'none';
  } else {
    word.style.color = eased > 0.35 ? '#ffffff' : '#64748b';
    word.style.textShadow = 'none';
  }
}

function groupWordsIntoLines(section: HTMLElement): HTMLElement[][] {
  const words = Array.from(section.querySelectorAll<HTMLElement>('[data-about-word]'));
  if (words.length === 0) return [];

  const lines: HTMLElement[][] = [];
  let currentLine: HTMLElement[] = [];
  let currentTop: number | null = null;
  const tolerance = 6;

  words.forEach((word) => {
    const top = Math.round(word.getBoundingClientRect().top);

    if (currentTop === null || Math.abs(top - currentTop) <= tolerance) {
      currentLine.push(word);
      if (currentTop === null) currentTop = top;
      return;
    }

    lines.push(currentLine);
    currentLine = [word];
    currentTop = top;
  });

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}

function AnimatedWord({ word }: { word: string }) {
  const isHighlight = highlightWords.has(word);

  return (
    <span
      data-about-word
      data-highlight={isHighlight ? 'true' : 'false'}
      className="about-word inline-block will-change-[opacity,transform,filter]"
      style={{ opacity: 0.08, transform: 'translateY(12px)', filter: 'blur(4px)' }}
    >
      {word}
      {'\u00A0'}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLElement[][]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const regroupLines = () => {
      linesRef.current = groupWordsIntoLines(section);
    };

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = Math.max(section.offsetHeight - viewport, 1);
      const progress = clamp(-rect.top / scrollable, 0, 1);

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.max(0.04, progress)})`;
      }

      if (glowRef.current) {
        glowRef.current.style.opacity = String(0.25 + progress * 0.55);
        glowRef.current.style.transform = `translate(-50%, -50%) scale(${1 + progress * 0.35})`;
      }

      const lines = linesRef.current;
      const lineCount = Math.max(lines.length, 1);
      const segment = 1 / lineCount;

      lines.forEach((lineWords, lineIndex) => {
        const start = lineIndex * segment;
        const end = start + segment * 1.15;
        const t = clamp((progress - start) / (end - start), 0, 1);
        const eased = 1 - (1 - t) ** 3;

        lineWords.forEach((word) => {
          applyWordStyles(word, eased);
        });
      });
    };

    const onResize = () => {
      regroupLines();
      update();
    };

    regroupLines();
    update();

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        regroupLines();
        update();
      });
    }

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(section);

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[185vh] border-y border-white/8 bg-[#050505]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_55%,transparent_100%)]" />

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22d3ee]/20 blur-[120px] transition-opacity duration-300"
        style={{ opacity: 0.25 }}
      />

      <p className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 select-none text-[clamp(5rem,18vw,14rem)] font-extrabold uppercase leading-none tracking-tighter text-white/[0.03]">
        About
      </p>

      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 text-center">
          <div className="mb-10 flex flex-col items-center gap-5 md:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/25 bg-[#22d3ee]/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#22d3ee]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22d3ee]" />
              About
            </span>
            <h2 className="bg-gradient-to-r from-white via-[#67e8f9] to-[#22d3ee] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
              About us
            </h2>

            <div className="w-full max-w-xs pt-2">
              <div className="mb-2 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-white/35">
                <span>Start</span>
                <span>Done</span>
              </div>
              <div className="h-px overflow-hidden rounded-full bg-white/10">
                <div
                  ref={progressRef}
                  className="h-full origin-left scale-x-[0.04] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] transition-transform duration-150"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto space-y-6 md:space-y-8">
            {paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="mx-auto max-w-4xl text-[clamp(1.55rem,3.8vw,3.1rem)] font-medium leading-[1.4] tracking-[-0.02em] text-white/90"
              >
                {paragraph.split(' ').map((word, wordIndex) => (
                  <AnimatedWord key={`${paragraphIndex}-${wordIndex}`} word={word} />
                ))}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Student-led', 'Design + Dev', 'Zamboanga City'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider text-white/45"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
