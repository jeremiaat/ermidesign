import React, { useState, useEffect } from 'react';
import { Send, Mail, MapPin, Phone, Copy, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';

interface ContactProps {
  prefilledService?: string;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, onShowToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Brand Identity',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledService,
        message: prev.message || `Hi Ermias, I'm interested in discussing a project regarding ${prefilledService}.`,
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Message sent successfully! Ermias will get back to you shortly.');
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 bg-[linear-gradient(135deg,var(--bg-secondary)_0%,var(--bg-primary)_100%)] transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-semibold mb-2 block">
            Start A Conversation
          </span>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 tracking-tight">
            Let's Create
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Have a project in mind or need art direction? Let's bring your creative vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 sm:p-8 shadow-[var(--card-shadow)]">
              <h3 className="font-space text-xl font-bold text-[var(--text-main)] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3B82F6]" />
                Direct Inquiries
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                Currently open to select freelance projects, agency collaborations, and art direction consultations.
              </p>

              <div className="space-y-4 font-mono-code text-xs sm:text-sm">
                {/* Email Item with Copy */}
                <div className="flex items-center justify-between p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                  <div className="flex items-center gap-3 text-[var(--text-main)] overflow-hidden">
                    <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[var(--text-muted)] hover:text-[#3B82F6] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-main)]">
                  <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-main)]">
                  <Phone className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="border border-dashed border-[var(--border-color)] p-5 text-center">
              <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-wider block">
                Typical response time: within 24 hours
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-6 sm:p-10 shadow-[var(--card-shadow)]">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 text-[#3B82F6] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-space text-2xl font-bold text-[var(--text-main)]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'friend'}. I look forward to reviewing your project brief and will be in touch soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Brand Identity', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-transparent border border-[var(--border-color)] hover:border-[#3B82F6] text-xs font-mono-code uppercase tracking-wider text-[var(--text-main)] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono-code text-xs uppercase tracking-wider font-semibold text-[var(--text-main)] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[#3B82F6] focus:bg-[var(--card-bg)] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono-code text-xs uppercase tracking-wider font-semibold text-[var(--text-main)] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[#3B82F6] focus:bg-[var(--card-bg)] transition-all"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block font-mono-code text-xs uppercase tracking-wider font-semibold text-[var(--text-main)] mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[#3B82F6] focus:bg-[var(--card-bg)] transition-all cursor-pointer"
                    >
                      <option value="Brand Identity">Brand Identity & Visual System</option>
                      <option value="Website Design">Website Design & Digital Experiences</option>
                      <option value="Social Media Design">Social Media Design & Campaigns</option>
                      <option value="Artistic Design">Artistic Design & Concept Art</option>
                      <option value="Comprehensive Art & Design">Comprehensive Art & Design</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono-code text-xs uppercase tracking-wider font-semibold text-[var(--text-main)] mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timeline, deliverables, or questions..."
                      className="w-full px-4 py-3.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[#3B82F6] focus:bg-[var(--card-bg)] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    {isSubmitting ? (
                      <span className="font-mono-code text-xs">Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
