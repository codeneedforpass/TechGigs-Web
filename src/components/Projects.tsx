import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ShowcaseProject } from '../types';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const projects: ShowcaseProject[] = [
  {
    id: 'af-urban-haven',
    title: 'A&F Urban Haven',
    description:
      'Luxury holiday-home rental site · 2BR Ortigas condo · Airbnb superhost · Pasig, Philippines',
    url: 'https://a-f-urban-haven.vercel.app/',
    builderUrl: 'https://github.com/codeneedforpass/TechGigs-Web',
    builderLabel: 'TechGigs Zambo',
    image: 'https://a-f-urban-haven.vercel.app/hero.png',
    accentFrom: '#1a1a1a',
    accentTo: '#5c4a24',
    tech: [
      { name: 'React', icon: `${DEVICON}/react/react-original.svg`, position: { top: '38%', left: '8%' } },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg`, position: { top: '52%', left: '18%' } },
      { name: 'Vite', icon: `${DEVICON}/vitejs/vitejs-original.svg`, position: { top: '28%', left: '72%' } },
      { name: 'Tailwind', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, position: { top: '58%', left: '78%' } },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/ffffff', position: { top: '42%', left: '84%' } },
    ],
  },
  {
    id: 'va-fatima',
    title: 'Fatima Francisco',
    description:
      'Virtual assistant portfolio · Admin, creative & customer ops · 12+ yrs corporate · Remote-first',
    url: 'https://va-fatima.vercel.app/',
    builderUrl: 'https://github.com/codeneedforpass/TechGigs-Web',
    builderLabel: 'TechGigs Zambo',
    image: 'https://va-fatima.vercel.app/about/fatima-francisco.png',
    accentFrom: '#00201d',
    accentTo: '#006d77',
    tech: [
      { name: 'React', icon: `${DEVICON}/react/react-original.svg`, position: { top: '38%', left: '8%' } },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg`, position: { top: '52%', left: '16%' } },
      { name: 'Vite', icon: `${DEVICON}/vitejs/vitejs-original.svg`, position: { top: '28%', left: '72%' } },
      { name: 'Tailwind', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, position: { top: '58%', left: '78%' } },
      { name: 'React Router', icon: 'https://cdn.simpleicons.org/reactrouter/CA4245', position: { top: '34%', left: '84%' } },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/ffffff', position: { top: '62%', left: '6%' } },
    ],
  },
  {
    id: 'scroll-story-portfolio',
    title: 'Scroll Story Portfolio',
    description:
      'Cinematic developer portfolio · Scroll-driven storytelling · Anime.js & IntersectionObserver',
    url: 'https://animation-mu-dun.vercel.app/',
    builderUrl: 'https://github.com/codeneedforpass/TechGigs-Web',
    builderLabel: 'TechGigs Zambo',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    accentFrom: '#030305',
    accentTo: '#1a0a3d',
    tech: [
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg`, position: { top: '38%', left: '8%' } },
      { name: 'Vite', icon: `${DEVICON}/vitejs/vitejs-original.svg`, position: { top: '52%', left: '16%' } },
      { name: 'Tailwind', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, position: { top: '28%', left: '72%' } },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg`, position: { top: '58%', left: '78%' } },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/ffffff', position: { top: '42%', left: '84%' } },
    ],
  },
  {
    id: 'social-design-kit',
    title: 'Social Design Kit',
    description: 'Campaign visuals, Poster & social media templates',
    url: '#contact',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    accentFrom: '#042f2e',
    accentTo: '#134e4a',
    tech: [
      { name: 'Photoshop', icon: `${DEVICON}/photoshop/photoshop-original.svg`, position: { top: '36%', left: '9%' } },
      { name: 'Illustrator', icon: `${DEVICON}/illustrator/illustrator-plain.svg`, position: { top: '54%', left: '14%' } },
      { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva/00C4CC', position: { top: '28%', left: '75%' } },
      { name: 'Figma', icon: `${DEVICON}/figma/figma-original.svg`, position: { top: '58%', left: '78%' } },
    ],
  },
];

function TechBadge({ tech }: { tech: ShowcaseProject['tech'][number] }) {
  return (
    <div
      className="absolute z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 p-2 shadow-lg shadow-black/20 ring-1 ring-black/5 transition-transform duration-300 group-hover/card:scale-110"
      style={{ top: tech.position.top, left: tech.position.left }}
      title={tech.name}
    >
      <img src={tech.icon} alt={tech.name} className="h-full w-full object-contain" loading="lazy" />
    </div>
  );
}

function ProjectCard({
  project,
  onNavigate,
}: {
  project: ShowcaseProject;
  onNavigate: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const isExternal = !project.url.startsWith('#');

  return (
    <div className="project-card group/card opacity-0 relative w-[min(85vw,540px)] shrink-0 snap-center">
    <a
      href={project.url}
      onClick={onNavigate}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="relative block cursor-pointer"
    >
      <div
        className="relative h-[520px] overflow-hidden rounded-[28px] border border-white/10 p-6 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_24px_80px_-20px_rgba(34,211,238,0.25)]"
        style={{
          background: `linear-gradient(145deg, ${project.accentFrom} 0%, ${project.accentTo} 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
          <ExternalLink className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover/card:text-white/80" />
        </div>

        {project.tech.map((item) => (
          <TechBadge key={item.name} tech={item} />
        ))}

        <div className="absolute inset-x-0 top-[22%] flex justify-center px-4">
          <div
            className="relative w-[78%] max-w-[380px] transition-transform duration-500 ease-out group-hover/card:-translate-y-2 group-hover/card:rotate-[-2deg]"
            style={{ transform: 'perspective(1200px) rotateY(-12deg) rotateX(6deg) rotateZ(-4deg)' }}
          >
            <div className="overflow-hidden rounded-xl border border-white/15 bg-[#050505] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-green-400/80" />
              </div>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <p className="absolute bottom-6 left-6 right-6 z-10 pr-28 text-sm leading-relaxed text-white/75 sm:text-base">
          {project.description}
        </p>
      </div>
    </a>

    {project.builderUrl && project.builderLabel && (
      <a
        href={project.builderUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-7 right-6 z-30 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#22d3ee] backdrop-blur-sm transition-colors hover:border-[#22d3ee]/40 hover:bg-black/60"
      >
        {project.builderLabel}
      </a>
    )}
    </div>
  );
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const amount = direction === 'left' ? -track.clientWidth * 0.75 : track.clientWidth * 0.75;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.clientX;
    scrollStart.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    track.classList.add('is-dragging');
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      didDrag.current = true;
    }
    trackRef.current.scrollLeft = scrollStart.current - delta;
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    isDragging.current = false;
    trackRef.current.classList.remove('is-dragging');
    if (trackRef.current.hasPointerCapture(e.pointerId)) {
      trackRef.current.releasePointerCapture(e.pointerId);
    }
    updateScrollState();
  };

  const onCardClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (didDrag.current) {
      e.preventDefault();
      didDrag.current = false;
    }
  };

  const containerRef = useScrollReveal({
    animation: (target) => {
      const header = target.querySelectorAll('.project-header');
      const cards = target.querySelectorAll('.project-card');
      if (header.length > 0) {
        animate(header, {
          opacity: [0, 1],
          translateY: [24, 0],
          delay: stagger(80),
          duration: 700,
          ease: 'outCubic',
        });
      }
      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateX: [40, 0],
          delay: stagger(100, { start: 200 }),
          duration: 800,
          ease: 'outCubic',
        });
      }
    },
    threshold: 0.12,
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative overflow-hidden border-t border-white/8 bg-[#0f1115] py-24"
    >
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[350px] w-[350px] rounded-full bg-[#22d3ee]/5 blur-[100px]" />

      <div className="relative mx-auto mb-12 max-w-7xl px-6">
        <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(4rem,14vw,10rem)] font-extrabold uppercase leading-none tracking-tighter text-white/[0.03]">
          Projects
        </p>

        <div className="project-header relative z-10 flex flex-col items-center gap-5 text-center opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/25 bg-[#22d3ee]/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#22d3ee]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22d3ee]" />
            Portfolio
          </span>
          <h2 className="bg-gradient-to-r from-white via-[#67e8f9] to-[#22d3ee] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7]/80" />
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0f1115] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0f1115] to-transparent sm:w-24" />

        <div
          ref={trackRef}
          className="projects-track flex cursor-grab gap-6 overflow-x-auto px-6 pb-4 pt-2 sm:px-10 active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onNavigate={onCardClick} />
          ))}
        </div>

        <div className="project-header opacity-0 mx-auto mt-8 flex max-w-7xl items-center justify-center gap-3 px-6">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#050505] text-white/70 transition-all hover:border-[#22d3ee]/40 hover:text-[#22d3ee] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Scroll projects left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#050505] text-white/70 transition-all hover:border-[#22d3ee]/40 hover:text-[#22d3ee] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Scroll projects right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
