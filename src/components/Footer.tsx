import { Rocket, Facebook, Mail, LayoutGrid } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#050505] border-t border-white/8 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/8">
          
          {/* Brand block */}
          <div className="flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/20">
              <Rocket className="h-4.5 w-4.5 text-[#22d3ee]" />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white block">
                Techgigs Zambo
              </span>
              <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase block">
                Student-Run Services
              </span>
            </div>
          </div>

          {/* Quick links block */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[10px] font-mono text-white/40 hover:text-[#22d3ee] transition-colors uppercase tracking-wider cursor-pointer font-bold"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[10px] font-mono text-white/40 hover:text-[#22d3ee] transition-colors uppercase tracking-wider cursor-pointer font-bold"
            >
              About Focus
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[10px] font-mono text-white/40 hover:text-[#22d3ee] transition-colors uppercase tracking-wider cursor-pointer font-bold"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[10px] font-mono text-white/40 hover:text-[#22d3ee] transition-colors uppercase tracking-wider cursor-pointer font-bold"
            >
              Templates
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[10px] font-mono text-white/40 hover:text-[#22d3ee] transition-colors uppercase tracking-wider cursor-pointer font-bold"
            >
              Contact
            </button>
          </div>

          {/* Icon buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0f1115] border border-white/8 text-white/50 hover:text-[#22d3ee] hover:border-[#22d3ee]/30 transition-all cursor-pointer"
              aria-label="Facebook Page"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:techgigszambo@gmail.com"
              className="p-2 rounded-lg bg-[#0f1115] border border-white/8 text-white/50 hover:text-[#22d3ee] hover:border-[#22d3ee]/30 transition-all cursor-pointer"
              aria-label="Email Inbox"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

        </div>

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-mono text-white/30">
          <p>© {currentYear} Techgigs Zambo. All rights reserved locally.</p>
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-3.5 w-3.5 text-[#22d3ee]" />
            <span>Designed for Student Projects</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
