import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { Code, Layout, Palette, Compass, Cpu } from 'lucide-react';

export default function Services() {
  const containerRef = useScrollReveal({
    animation: (target) => {
      const headers = target.querySelectorAll('.service-header');
      const cards = target.querySelectorAll('.service-card');

      if (headers.length > 0) {
        animate(headers, {
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
          translateY: [35, 0],
          delay: stagger(120, { start: 180 }),
          duration: 800,
          ease: 'outCubic',
        });
      }
    },
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      desc: 'Robust student-budget custom web systems built using modern TypeScript, React, and server tooling.',
    },
    {
      icon: Layout,
      title: 'Web Design',
      desc: 'Sleek, responsive landing spaces and custom portfolios configured to load fast on any digital screens.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      desc: 'High-contrast promotional visual assets, custom logos, infographics, and social media branding elements.',
    },
    {
      icon: Compass,
      title: 'UI/UX & Figma',
      desc: 'Interactive wireframes, layout user journeys, and custom prototypes mapped extensively in Figma workspaces.',
    },
    {
      icon: Cpu,
      title: 'API Integration',
      desc: 'Plugging in developer SDKs, managing generative intelligence prompts, or connecting external web service hooks.',
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Decorative center halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22d3ee]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="relative mx-auto mb-16 max-w-2xl">
          <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(4rem,14vw,10rem)] font-extrabold uppercase leading-none tracking-tighter text-white/[0.03]">
            Services
          </p>

          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <span className="service-header inline-flex items-center gap-2 rounded-full border border-[#22d3ee]/25 bg-[#22d3ee]/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#22d3ee] opacity-0">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22d3ee]" />
              What we offer
            </span>
            <h2 className="service-header bg-gradient-to-r from-white via-[#67e8f9] to-[#22d3ee] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent opacity-0 sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <div className="service-header h-1 w-12 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7]/80 opacity-0" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((srv, index) => {
            const IconComp = srv.icon;
            return (
              <div
                key={index}
                className="service-card group flex w-full max-w-md flex-col justify-between rounded-2xl border border-white/8 bg-[#0f1115] p-8 opacity-0 transition-all duration-300 hover:border-[#22d3ee]/20 hover:bg-[#0f1115]/80 md:w-[calc(50%-1rem)] md:max-w-none lg:w-[calc(33.333%-1.34rem)]"
              >
                <div>
                  {/* Decorative Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/8 flex items-center justify-center mb-6 group-hover:border-[#22d3ee]/40 group-hover:bg-[#22d3ee]/10 transition-all duration-300">
                    <IconComp className="h-5 w-5 text-[#22d3ee] group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#22d3ee] transition-colors font-sans">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-between font-mono font-semibold">
                  <span className="text-[10px] text-white/40 group-hover:text-[#22d3ee]/80 transition-colors uppercase tracking-wider">
                    STUDENT RATE • AVAILABLE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
