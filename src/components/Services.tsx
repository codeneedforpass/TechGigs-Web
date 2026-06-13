import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { Code, Layout, Palette, Compass, Cpu, Zap } from 'lucide-react';

export default function Services() {
  const containerRef = useScrollReveal({
    animation: (target) => {
      const items = target.querySelectorAll('.service-card');
      if (items.length > 0) {
        animate(items, {
          opacity: [0, 1],
          translateY: [35, 0],
          delay: stagger(120),
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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="service-card opacity-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-[10px] font-bold tracking-[1.5px] uppercase font-mono">
            <Zap className="h-3 w-3" />
            <span>AFFORDABLE OUTCOMES</span>
          </div>
          <h2 className="service-card opacity-0 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our Services
          </h2>
          <div className="service-card opacity-0 w-12 h-1 bg-[#22d3ee]/80 mx-auto rounded-full" />
          <p className="service-card opacity-0 text-sm text-white/50 leading-relaxed font-light">
            We deliver highly creative, responsive, and functional solutions built specifically to scale within student-friendly budgets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((srv, index) => {
            const IconComp = srv.icon;
            return (
              <div
                key={index}
                className="service-card opacity-0 p-8 rounded-2xl bg-[#0f1115] border border-white/8 hover:border-[#22d3ee]/20 hover:bg-[#0f1115]/80 transition-all duration-300 flex flex-col justify-between group"
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
