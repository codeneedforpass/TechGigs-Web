import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { ShieldCheck, HeartHandshake, Compass, BrainCircuit } from 'lucide-react';

export default function About() {
  const containerRef = useScrollReveal({
    animation: (target) => {
      const items = target.querySelectorAll('.reveal-item');
      if (items.length > 0) {
        animate(items, {
          opacity: [0, 1],
          translateY: [40, 0],
          delay: stagger(150),
          duration: 900,
          ease: 'outCubic',
        });
      }
    },
    threshold: 0.15,
  });

  const focusPoints = [
    {
      icon: HeartHandshake,
      title: 'Student-Friendly Services',
      desc: 'Affordable, accessible, high-quality digital deliverables tailored for students, local builders, and starting entrepreneurs.',
    },
    {
      icon: Compass,
      title: 'Precision Web Design',
      desc: 'Sleek visual systems crafted using clean CSS layouts and bespoke interactive frameworks designed to hold attention.',
    },
    {
      icon: ShieldCheck,
      title: 'Modern Full-Stack Focus',
      desc: 'Building robust local services using scalable systems, responsive templates, and beautiful frontends.',
    },
    {
      icon: BrainCircuit,
      title: 'AI Concepts Exploration',
      desc: 'Integrating simple generative prompt architectures and API workflows into static web experiences dynamically.',
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-[#0f1115] border-y border-white/8 relative overflow-hidden"
    >
      {/* Decorative background vectors */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#22d3ee]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Intro */}
          <div className="lg:col-span-5 space-y-6">
            <span className="reveal-item opacity-0 text-[10px] font-mono tracking-[3px] uppercase text-[#22d3ee] font-bold block">
              // WHO WE ARE
            </span>
            <h2 className="reveal-item opacity-0 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Student-Driven.<br />
              <span className="text-[#22d3ee]">
                Tech-Focused.
              </span>
            </h2>
            <p className="reveal-item opacity-0 text-sm text-white/50 leading-relaxed font-light">
              We are <strong className="text-white font-semibold">Techgigs Zambo</strong>, a passionate, student-run creative & engineering page dedicated to building affordable digital solutions. Based in Zamboanga City, we aim to bridge the gap between creative visual systems and performant engineering.
            </p>
            
            {/* Callout Card */}
            <div className="reveal-item opacity-0 p-5 rounded-xl bg-[#050505] border border-white/8">
              <span className="block text-[#22d3ee] font-mono text-[9px] tracking-wider font-bold mb-1">OUR PHILOSOPHY</span>
              <p className="text-xs font-light text-white/60 leading-relaxed">
                "Digital empowerment shouldn't come with enterprise price tags. We offer professional-grade tech and design service configurations to matches anyone's budget."
              </p>
            </div>
          </div>

          {/* Right Column: Key Focus Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusPoints.map((point, idx) => {
              const IconComp = point.icon;
              return (
                <div
                  key={idx}
                  className="reveal-item opacity-0 p-6 rounded-xl bg-[#050505] border border-white/8 hover:border-[#22d3ee]/20 hover:bg-[#050505]/80 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-[#0f1115] border border-white/8 w-fit mb-4 group-hover:bg-[#22d3ee]/10 group-hover:border-[#22d3ee]/30 transition-all">
                    <IconComp className="h-4.5 w-4.5 text-[#22d3ee] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#22d3ee] transition-colors font-sans">
                    {point.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
