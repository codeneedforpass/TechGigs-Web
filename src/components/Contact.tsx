import { useState, type FormEvent, type ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { animate, stagger } from 'animejs';
import { ArrowRight, Mail, Facebook, CheckCircle2 } from 'lucide-react';
import { ContactFormInput } from '../types';

function InquiryField({
  index,
  label,
  id,
  children,
  className = '',
}: {
  index: string;
  label: string;
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-xl border border-white/8 bg-[#0f1115]/50 px-4 py-3 transition-all focus-within:border-[#22d3ee]/45 focus-within:shadow-[inset_3px_0_0_#22d3ee] ${className}`}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="flex items-center gap-2 text-xs font-mono text-white/55">
          <span className="text-[9px] font-bold tracking-widest text-[#22d3ee]/80">{index}</span>
          {label}
        </label>
        <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-colors group-focus-within:bg-[#22d3ee]" />
      </div>
      {children}
    </div>
  );
}

const inputClass =
  'w-full bg-transparent text-sm text-white placeholder-white/20 focus:outline-none';

export default function Contact() {
  const [formValues, setFormValues] = useState<ContactFormInput>({
    name: '',
    email: '',
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormValues({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative overflow-hidden border-t border-white/8 bg-[#050505] py-24"
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#22d3ee]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <span className="contact-fade block text-[10px] font-mono font-bold uppercase tracking-[3px] text-[#22d3ee] opacity-0">
                // CONNECT WITH US
              </span>
              <h2 className="contact-fade text-3xl font-extrabold leading-tight tracking-tight text-white opacity-0 sm:text-4xl">
                Get In Touch.
              </h2>
              <div className="contact-fade h-1 w-12 rounded-full bg-[#22d3ee]/80 opacity-0" />
              <p className="contact-fade text-sm font-light leading-relaxed text-white/50 opacity-0">
                Have a project in mind? DM us or send a quick message below.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.facebook.com/profile.php?id=61590706773849"
                target="_blank"
                rel="noreferrer"
                className="contact-fade group flex items-center gap-4 rounded-xl border border-white/8 bg-[#0f1115] p-4 opacity-0 transition-all hover:border-[#22d3ee]/20 hover:bg-[#0f1115]/80"
              >
                <div className="rounded-lg border border-white/8 bg-[#050505] p-3 text-[#22d3ee] transition-colors group-hover:bg-[#22d3ee]/10">
                  <Facebook className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold uppercase tracking-wider text-white/40">
                    DIRECT DM WORKPLACE
                  </span>
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#22d3ee] sm:text-base">
                    facebook.com/techgigszambo
                  </span>
                </div>
              </a>

              <a
                href="mailto:techgigszambo@gmail.com"
                className="contact-fade group flex items-center gap-4 rounded-xl border border-white/8 bg-[#0f1115] p-4 opacity-0 transition-all hover:border-[#22d3ee]/20 hover:bg-[#0f1115]/80"
              >
                <div className="rounded-lg border border-white/8 bg-[#050505] p-3 text-[#22d3ee] transition-colors group-hover:bg-[#22d3ee]/10">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold uppercase tracking-wider text-white/40">
                    EMAIL CHANNEL
                  </span>
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#22d3ee] sm:text-base">
                    techgigszambo@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="contact-fade relative mx-auto w-full max-w-xl opacity-0 lg:max-w-none">
              {isSubmitted ? (
                <div className="space-y-6 py-10 text-center">
                  <div className="mb-2 inline-flex items-center justify-center rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 p-3 text-[#22d3ee]">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message sent!</h3>
                  <p className="mx-auto max-w-sm text-xs font-light leading-relaxed text-white/50">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="cursor-pointer rounded-lg border border-white/10 px-5 py-2.5 text-xs font-mono text-white transition-all hover:border-[#22d3ee]/40 hover:text-[#22d3ee]"
                  >
                    New message
                  </button>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f1115]/40 p-5 sm:p-6">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#22d3ee]/10 blur-2xl" />

                  <div className="mb-5 flex items-center justify-between border-b border-white/8 pb-4">
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#22d3ee]">
                      // inquiry.form
                    </span>
                    <span className="rounded-full border border-[#22d3ee]/25 bg-[#22d3ee]/10 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider text-[#22d3ee]">
                      Open
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <InquiryField index="01" label="Name" id="name-input">
                        <input
                          id="name-input"
                          type="text"
                          required
                          value={formValues.name}
                          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </InquiryField>

                      <InquiryField index="02" label="Email" id="email-input">
                        <input
                          id="email-input"
                          type="email"
                          required
                          value={formValues.email}
                          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                          placeholder="you@email.com"
                          className={inputClass}
                        />
                      </InquiryField>
                    </div>

                    <InquiryField index="03" label="Message" id="message-textarea" className="min-h-[148px]">
                      <textarea
                        id="message-textarea"
                        required
                        rows={4}
                        value={formValues.message}
                        onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        className={`${inputClass} resize-none`}
                      />
                    </InquiryField>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#22d3ee] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] transition-all hover:bg-[#22d3ee]/90"
                      >
                        <span>Transmit</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
