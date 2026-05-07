import React from 'react';
import { Code2, Globe, Mail, Heart } from 'lucide-react';

const socials = [
  { icon: Code2, href: '#projects', label: 'Projects' },
  { icon: Globe, href: '#about', label: 'About' },
  { icon: Mail, href: 'mailto:hello@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading font-bold text-lg">
          <span className="text-gradient">Bhupendra</span>
          <span className="text-foreground"> Chopra</span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2.5 rounded-xl glass hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm font-body flex items-center gap-1">
          © {new Date().getFullYear()} — Crafted with <Heart className="w-3 h-3 text-accent" /> by Bhupendra Chopra
        </p>
      </div>
    </footer>
  );
}
