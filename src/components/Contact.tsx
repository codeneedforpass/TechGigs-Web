import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { Mail, MessageSquare, Facebook, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormInput } from '../types';

export default function Contact() {
  const [formValues, setFormValues] = useState<ContactFormInput>({
    name: '',
    email: '',
    service: 'Full-Stack Development',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useScrollReveal({
    animation: (target) => {
      const items = target.querySelectorAll('.contact-fade');
      if (items.length > 0) {
        animate(items, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: stagger(100),
          duration: 800,
          ease: 'outCubic',
        });
      }
    },
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) return;
    
    // Simulate beautiful localized submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormValues({ name: '', email: '', service: 'Full-Stack Development', message: '' });
    setIsSubmitted(false);
  };

  const servicesOption = [
    'Full-Stack Development',
    'Web Design',
    'Graphic Design',
    'UI/UX & Figma',
    'API Integration',
    'Other / Consultation',
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 bg-[#050505] border-t border-white/8 relative overflow-hidden"
    >
      {/* Dynamic background lights */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[400px] bg-[#22d3ee]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Get in Touch & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="contact-fade opacity-0 text-[10px] font-mono tracking-[3px] uppercase text-[#22d3ee] font-bold block">
                // CONNECT WITH US
              </span>
              <h2 className="contact-fade opacity-0 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Let's Build Something <br />Awesome Together
              </h2>
              <div className="contact-fade opacity-0 w-12 h-1 bg-[#22d3ee]/80 rounded-full" />
              <p className="contact-fade opacity-0 text-sm text-white/50 leading-relaxed font-light">
                Do you have a project template idea or are you looking for affordable student rates? DM us directly or send a message using our frontend tool!
              </p>
            </div>

            {/* Practical list contacts */}
            <div className="space-y-4">
              {/* Facebook DM Channel */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="contact-fade opacity-0 flex items-center gap-4 p-4 rounded-xl bg-[#0f1115] border border-white/8 hover:border-[#22d3ee]/20 hover:bg-[#0f1115]/80 transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#050505] border border-white/8 text-[#22d3ee] group-hover:bg-[#22d3ee]/10 transition-colors">
                  <Facebook className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-white/40 font-bold uppercase tracking-wider">DIRECT DM WORKPLACE</span>
                  <span className="text-white font-bold group-hover:text-[#22d3ee] transition-colors text-sm sm:text-base">
                    facebook.com/techgigszambo
                  </span>
                </div>
              </a>

              {/* Email channel */}
              <a
                href="mailto:techgigszambo@gmail.com"
                className="contact-fade opacity-0 flex items-center gap-4 p-4 rounded-xl bg-[#0f1115] border border-white/8 hover:border-[#22d3ee]/20 hover:bg-[#0f1115]/80 transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#050505] border border-white/8 text-[#22d3ee] group-hover:bg-[#22d3ee]/10 transition-colors">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-white/40 font-bold uppercase tracking-wider">EMAIL CHANNEL</span>
                  <span className="text-white font-bold group-hover:text-[#22d3ee] transition-colors text-sm sm:text-base">
                    techgigszambo@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="contact-fade opacity-0 p-8 sm:p-10 rounded-2xl bg-[#0f1115] border border-white/8 backdrop-blur-sm relative">
              
              {isSubmitted ? (
                /* Success Message State */
                <div className="text-center py-10 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] mb-2">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Forwarded!</h3>
                  <p className="text-white/50 max-w-sm mx-auto text-xs leading-relaxed font-light">
                    Thank you! Your inquiry details have been aggregated in the local frontend state context successfully. We will follow up soon!
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-transparent text-white border border-white/8 rounded-lg hover:bg-white/5 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={formValues.name}
                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        placeholder="e.g. Evann Francisco"
                        className="w-full px-4 py-3 bg-[#050505] border border-white/8 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#22d3ee]/55 transition-all text-xs"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        placeholder="e.g. you@example.com"
                        className="w-full px-4 py-3 bg-[#050505] border border-white/8 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#22d3ee]/55 transition-all text-xs"
                      />
                    </div>
                  </div>

                  {/* Service dropdown selection */}
                  <div className="space-y-2">
                    <label htmlFor="service-select" className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      Target Service
                    </label>
                    <select
                      id="service-select"
                      value={formValues.service}
                      onChange={(e) => setFormValues({ ...formValues, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#050505] border border-white/8 rounded-lg text-white focus:outline-none focus:border-[#22d3ee]/55 transition-all text-xs"
                    >
                      {servicesOption.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-[#050505] text-slate-200">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message body input */}
                  <div className="space-y-2">
                    <label htmlFor="message-textarea" className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                      Message Inquiries
                    </label>
                    <textarea
                      id="message-textarea"
                      required
                      rows={4}
                      value={formValues.message}
                      onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                      placeholder="Describe your design or template needs shortly..."
                      className="w-full px-4 py-3 bg-[#050505] border border-white/8 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-[#22d3ee]/55 transition-all text-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#22d3ee] text-[#050505] rounded-lg hover:bg-[#22d3ee]/90 font-bold uppercase tracking-wider text-xs transition-all focus:outline-none flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
