import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { AlertCircle, ArrowRight, Clock, Layers, Package, Target, X } from 'lucide-react';
import { ProjectPlaceholder } from '../types';

const placeholders: ProjectPlaceholder[] = [
  {
    id: 'p1',
    title: 'Zambo Web Hub',
    category: 'Full-Stack Development',
    description:
      'System template demonstrating state management, responsive grids, and API fetch architectures optimized for local speed.',
    label: 'Coming Soon',
    details: {
      overview:
        'A modular full-stack dashboard starter built for student teams who need a production-shaped architecture without enterprise overhead. Includes auth-ready routing, data tables, and API layer stubs you can wire to any backend.',
      techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'REST API patterns', 'Local state + fetch hooks'],
      deliverables: [
        'Responsive admin dashboard shell',
        'Reusable data grid + filter components',
        'API service layer with mock endpoints',
        'Auth flow placeholders (login, session guard)',
        'Deployment-ready build config',
      ],
      timeline: 'Estimated build: 2–3 weeks',
      idealFor: 'Capstone projects, campus org portals, or internal team dashboards',
    },
  },
  {
    id: 'p2',
    title: 'Creative Editorial System',
    category: 'Web Design',
    description:
      'Sleek dark landing page template focusing on beautiful typography pairings and heavy scroll container layouts.',
    label: 'Template Available',
    details: {
      overview:
        'A editorial-style landing page system with scroll-driven sections, hero typography, and content blocks designed for portfolios, magazines, or creative agency showcases. Fully responsive with attention to rhythm and whitespace.',
      techStack: ['HTML5 semantic layout', 'CSS Grid & Flexbox', 'Scroll reveal animations', 'Mobile-first breakpoints', 'Optimized web fonts'],
      deliverables: [
        'Hero + featured story layout',
        'Article grid and category rails',
        'Author bio and newsletter blocks',
        'Dark theme token set',
        'Figma + code handoff notes',
      ],
      timeline: 'Available now — customize in 3–5 days',
      idealFor: 'Design portfolios, student publications, creative studio landing pages',
    },
  },
  {
    id: 'p3',
    title: 'E-Commerce Wireframe Pack',
    category: 'UI/UX & Figma',
    description:
      'Clean design system asset pack containing customizable responsive checkout paths and product catalog templates.',
    label: 'Coming Soon',
    details: {
      overview:
        'A Figma-first wireframe kit covering the full e-commerce journey — browse, product detail, cart, checkout, and order confirmation. Built with auto-layout components so you can swap copy and imagery fast.',
      techStack: ['Figma auto-layout', 'Component variants', 'Design tokens', 'Mobile + desktop frames', 'User flow annotations'],
      deliverables: [
        '20+ screen wireframe templates',
        'Checkout flow (guest + account paths)',
        'Product card + catalog components',
        'Empty states and error screens',
        'Clickable prototype ready',
      ],
      timeline: 'Estimated release: Q3 2026',
      idealFor: 'UX coursework, startup MVPs, or client pitch decks',
    },
  },
  {
    id: 'p4',
    title: 'Social Graphic Design Kit',
    category: 'Graphic Design',
    description:
      'High-contrast student campaign visual framework featuring poster layouts, color profiles, and typography structures.',
    label: 'In Development',
    details: {
      overview:
        'A campaign-ready visual kit for student orgs and campus events — posters, social posts, and banner formats with a bold high-contrast look. Includes editable templates and a mini brand guide.',
      techStack: ['Canva + Figma templates', 'Print-ready PDF exports', 'Social media aspect ratios', 'CMYK + RGB color profiles'],
      deliverables: [
        'A3/A4 poster templates',
        'Instagram, Facebook, and story formats',
        'Event announcement layouts',
        'Typography + color usage guide',
        'Logo placement safe zones',
      ],
      timeline: 'In development — early access Q2 2026',
      idealFor: 'Student council campaigns, org promotions, and event marketing',
    },
  },
];

function ProjectDetailPopover({
  project,
  onClose,
}: {
  project: ProjectPlaceholder;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-popover-${project.id}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
        aria-label="Close project details"
      />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1115] border border-white/10 shadow-2xl shadow-[#22d3ee]/5">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-[#0f1115]/95 backdrop-blur-sm border-b border-white/5">
          <div className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#050505] border border-white/8 text-[9px] uppercase tracking-wider text-white/50 font-mono font-semibold">
                {project.category}
              </span>
              <span className="text-[9px] text-[#22d3ee] tracking-widest uppercase font-bold font-mono">
                ◆ {project.label}
              </span>
            </div>
            <h3
              id={`project-popover-${project.id}`}
              className="text-xl sm:text-2xl font-bold text-white font-sans"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 rounded-lg border border-white/8 text-white/50 hover:text-white hover:border-[#22d3ee]/30 hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 pt-4 space-y-6">
          <p className="text-sm text-white/60 leading-relaxed font-light">{project.details.overview}</p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
              <Layers className="h-3.5 w-3.5 text-[#22d3ee]" />
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.details.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#050505] border border-white/8 text-[10px] text-white/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
              <Package className="h-3.5 w-3.5 text-[#22d3ee]" />
              What&apos;s Included
            </div>
            <ul className="space-y-2">
              {project.details.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-white/55 leading-relaxed font-light"
                >
                  <span className="text-[#22d3ee] mt-0.5 shrink-0">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#050505] border border-white/8 space-y-1.5">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                <Clock className="h-3.5 w-3.5 text-[#22d3ee]" />
                Timeline
              </div>
              <p className="text-xs text-white/60 font-light">{project.details.timeline}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#050505] border border-white/8 space-y-1.5">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                <Target className="h-3.5 w-3.5 text-[#22d3ee]" />
                Ideal For
              </div>
              <p className="text-xs text-white/60 font-light">{project.details.idealFor}</p>
            </div>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#22d3ee] text-[#050505] rounded-lg hover:bg-[#22d3ee]/90 font-bold uppercase tracking-wider text-xs transition-all cursor-pointer"
          >
            <span>Inquire About This Template</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectPlaceholder | null>(null);

  const containerRef = useScrollReveal({
    animation: (target) => {
      const items = target.querySelectorAll('.project-card');
      if (items.length > 0) {
        animate(items, {
          opacity: [0, 1],
          scale: [0.96, 1],
          translateY: [30, 0],
          delay: stagger(120),
          duration: 800,
          ease: 'outCubic',
        });
      }
    },
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 bg-[#0f1115] border-t border-white/8 relative overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-[#22d3ee]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="project-card opacity-0 text-[10px] font-mono tracking-[3px] uppercase text-[#22d3ee] font-bold block">
              // RECENT BUILDS
            </span>
            <h2 className="project-card opacity-0 text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Project Templates
            </h2>
            <div className="project-card opacity-0 w-12 h-1 bg-[#22d3ee]/80 rounded-full" />
            <p className="project-card opacity-0 text-white/50 text-sm leading-relaxed font-light">
              We focus on clean, reusable template frameworks. Here is a curated showcase of our modular placeholder architectures.
            </p>
          </div>
          <div className="project-card opacity-0 flex items-center gap-2 px-4 py-2.5 bg-[#050505] border border-white/8 rounded-lg text-[10px] font-mono text-white/40 uppercase tracking-wider">
            <AlertCircle className="h-4 w-4 text-[#22d3ee] shrink-0" />
            <span>Demonstration placeholders only</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholders.map((proj) => {
            const isPlaceholder = proj.label === 'Coming Soon' || proj.label === 'In Development';
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedProject(proj)}
                className={`project-card opacity-0 p-8 rounded-2xl bg-[#050505] hover:bg-[#050505]/80 transition-all duration-305 relative overflow-hidden group flex flex-col justify-between min-h-[250px] text-left cursor-pointer ${
                  isPlaceholder
                    ? 'border border-dashed border-white/10 hover:border-[#22d3ee]/35'
                    : 'border border-solid border-white/8 hover:border-[#22d3ee]/20'
                }`}
              >
                {/* Corner Grid Gridlines Accent */}
                <div className="absolute top-0 right-0 p-4 border-l border-b border-white/5 text-[9px] font-mono text-white/20 select-none font-bold pointer-events-none">
                  {proj.id.toUpperCase()}
                </div>

                <div>
                  {/* Meta details */}
                  <div className="flex items-center gap-3 mb-4 font-mono font-semibold">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0f1115] border border-white/8 text-[9px] uppercase tracking-wider text-white/50">
                      {proj.category}
                    </span>
                    <span className="text-[9px] text-[#22d3ee] tracking-widest uppercase font-bold">
                      ◆ {proj.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22d3ee] transition-colors font-sans">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/50 leading-relaxed font-light mb-6 pr-6">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[9px] font-mono tracking-widest font-bold text-white/40 uppercase group-hover:text-[#22d3ee] transition-colors">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>View Details</span>
                  </span>
                  <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">CLICK_TO_EXPAND</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailPopover project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
