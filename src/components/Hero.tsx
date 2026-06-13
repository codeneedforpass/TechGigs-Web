import { useEffect, useRef } from 'react';
import { createTimeline } from 'animejs';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Beautiful timeline builder in Anime.js v4
    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
        duration: 900,
      }
    });

    if (badgeRef.current) {
      tl.add(badgeRef.current, {
        opacity: [0, 1],
        translateY: [25, 0],
        delay: 100,
      });
    }
    if (titleRef.current) {
      tl.add(titleRef.current, {
        opacity: [0, 1],
        translateY: [25, 0],
      }, '-=750');
    }
    if (taglineRef.current) {
      tl.add(taglineRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
      }, '-=750');
    }
    if (descRef.current) {
      tl.add(descRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
      }, '-=750');
    }
    if (ctaRef.current) {
      tl.add(ctaRef.current, {
        opacity: [0, 1],
        translateY: [15, 0],
      }, '-=750');
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22d3ee]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-[#22d3ee]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Tech Tag Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-[10px] font-bold tracking-[1px] uppercase font-mono mb-8 opacity-0">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>BASED IN ZAMBOANGA CITY, PH</span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-[-2px] text-white mb-6 opacity-0 leading-[1.05]"
        >
          Techgigs <span className="text-[#22d3ee]">Zambo</span>
        </h1>

        {/* Subtitle Tagline */}
        <div
          ref={taglineRef}
          className="text-[11px] sm:text-xs md:text-sm font-mono font-medium text-[#22d3ee] tracking-[2px] mb-6 opacity-0 uppercase"
        >
          Full-Stack Development <span className="text-white/10 px-2">•</span> Web Design <span className="text-white/10 px-2">•</span> Graphic Design <span className="text-white/10 px-2">•</span> UI/UX
        </div>

        {/* Short Description */}
        <p
          ref={descRef}
          className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 font-light"
        >
          A student-run tech and creative services page offering affordable digital solutions. We combine design precision with modern programming to build impactful interfaces.
        </p>

        {/* Call to Actions */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#22d3ee] hover:bg-[#22d3ee]/90 rounded-lg transition-all shadow-md shadow-[#22d3ee]/10 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>View Services</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-white/8 hover:bg-white/5 hover:border-[#22d3ee]/20 transition-all rounded-lg cursor-pointer"
          >
            Contact Page
          </button>
        </div>
      </div>

      {/* Hero Bottom Anchor pointer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[9px] font-mono tracking-widest uppercase text-white/40 font-semibold">Scroll to Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#22d3ee] to-transparent animate-bounce" />
      </div>
    </section>
  );
}
