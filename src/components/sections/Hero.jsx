import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, ExternalLink, Globe, Mail } from 'lucide-react';
import HeroBackground from './HeroBackground';

const socials = [
  { icon: Code2, href: '#projects', label: 'Projects' },
  { icon: Globe, href: '#about', label: 'About' },
  { icon: Mail, href: 'mailto:bhupendrachopra001@gmail.com', label: 'Email' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <HeroBackground />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block font-mono text-sm text-accent tracking-widest mb-6 px-4 py-2 rounded-full glass">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          Bhupendra Chopra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4"
        >
          PHP Laravel & Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Result-driven Full-Stack Developer with 3+ years of experience building scalable web applications using PHP, Laravel, React.js, and modern JavaScript ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl glass font-body font-medium text-sm hover:border-accent/30 transition-all duration-300 flex items-center gap-2"
          >
            View Projects <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-xl glass hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
