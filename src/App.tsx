import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 flex flex-col font-sans overflow-x-hidden selection:bg-blue-500/30">
      <header className="flex justify-between items-center px-6 lg:px-12 py-6 lg:py-8 border-b border-zinc-900/50">
        <div className="text-xl font-bold tracking-tight text-white uppercase">
          Saravanakumar<span className="text-blue-500"></span>
        </div>
        <nav className="hidden sm:flex gap-10 text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white transition-colors text-blue-500">Contact</a>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div>
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Available for Hire</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mt-4 mb-6">
                Let's create something <br className="hidden md:block" />
                <span className="text-blue-500">extraordinary.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                I'm always open to discussing product design work, partnership opportunities, or just having a chat about the latest in tech.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 text-sm">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-inner">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest mb-0.5">Email Address</p>
                  <a href="mailto:oatktg.saravana5632@gmail.com" className="text-zinc-100 font-medium hover:text-blue-400 transition-colors">
                    oatktg.saravana5632@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-inner">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-widest mb-0.5">Location</p>
                  <p className="text-zinc-100 font-medium">Chennai</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <SocialLink href="https://github.com/saravana5632" icon={<Github className="w-4 h-4 mr-2" />} label="GitHub" />
              <SocialLink href="https://saravana5632.github.io/portfolio" icon={<ArrowRight className="w-4 h-4 mr-2" />} label="Portfolio" />
              <SocialLink href="https://www.linkedin.com/in/saravana5632/" icon={<Linkedin className="w-4 h-4 mr-2" />} label="LinkedIn" />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="bg-zinc-900/40 p-8 sm:p-10 rounded-[32px] border border-zinc-800/60 backdrop-blur-sm shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-zinc-100 placeholder:text-zinc-600"
                      placeholder="Jane Cooper"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-zinc-100 placeholder:text-zinc-600"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-zinc-100 placeholder:text-zinc-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none text-zinc-100 placeholder:text-zinc-600"
                    placeholder="Tell me about your idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full bg-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mt-2"
                >
                  {status === 'idle' && <span>Submit Inquiry</span>}
                  {status === 'submitting' && (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <span>Message Sent</span>
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="px-6 lg:px-12 py-6 lg:py-8 border-t border-zinc-900/50 flex flex-col sm:flex-row justify-center items-center text-[10px] font-medium text-zinc-600 uppercase tracking-widest gap-4 sm:gap-0 mt-auto">
        <div>© {new Date().getFullYear()} SaravanaKumar. All rights reserved. </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all hover:border-zinc-700"
    >
      {icon}
      {label}
    </a>
  );
}
