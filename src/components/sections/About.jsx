import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import useScrollReveal from '@/hooks/useScrollReveal';

const highlights = [
  { icon: Code2, label: '15+', desc: 'Projects Delivered', color: 'text-blue-400' },
  { icon: Rocket, label: '3+', desc: 'Years Experience', color: 'text-purple-400' },
  { icon: Users, label: '4+', desc: 'Companies Worked', color: 'text-green-400' },
  { icon: Zap, label: '5+', desc: 'Sectors Served', color: 'text-orange-400' },
];

const timeline = [
  { year: 'Dec 2025 - Present', role: 'PHP Laravel Developer', company: 'DevTechnosys', desc: 'Building scalable full-stack apps using PHP, Laravel, React.js and Node.js with optimized MySQL architecture.' },
  { year: 'Dec 2024 - Dec 2025', role: 'PHP Laravel Developer', company: 'Moksha Digitech Pvt. Ltd.', desc: 'Built complex multi-panel web apps with RBAC, RESTful APIs, and managed complete project lifecycle from requirement to deployment.' },
  { year: 'Dec 2023 - Nov 2024', role: 'Software Developer', company: 'Codunite Pvt. Ltd.', desc: 'Developed production-grade Laravel apps, integrated third-party APIs, and optimized MySQL queries for high-traffic systems.' },
  { year: 'Feb 2023 - Nov 2023', role: 'Intern & Full-Time Developer', company: 'BMOIT Company', desc: 'Wrote clean PHP/Laravel code, built responsive UIs with Bootstrap, and contributed to feature development in MVC architecture.' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// About Me"
          title="Engineering Digital Experiences"
          description="Result-driven PHP Laravel & Full-Stack Developer with 3+ years of experience building scalable multi-panel systems, RESTful APIs, and secure backend architectures across education, food delivery, e-commerce, and NGO sectors."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {highlights.map((item, i) => (
            <HighlightCard key={i} item={item} index={i} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-8 text-center">Journey So Far</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ item, index }) {
  const { ref, isInView } = useScrollReveal();
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className="text-center py-8">
        <Icon className={`w-6 h-6 ${item.color} mx-auto mb-3`} />
        <div className="font-heading text-3xl font-bold mb-1">{item.label}</div>
        <div className="text-muted-foreground text-sm font-body">{item.desc}</div>
      </GlassCard>
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  const { ref, isInView } = useScrollReveal();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-start gap-6 mb-10 pl-12 md:pl-0 ${
        isEven ? 'md:flex-row md:text-right' : 'md:flex-row-reverse md:text-left'
      }`}
    >
      <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <GlassCard className="relative">
          <span className="font-mono text-xs text-accent mb-2 block">{item.year}</span>
          <h4 className="font-heading text-lg font-bold">{item.role}</h4>
          <p className="text-accent text-sm font-medium mb-2">{item.company}</p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
        </GlassCard>
      </div>
      <div className="hidden md:block flex-1" />
      <div className="absolute left-2 md:left-1/2 top-6 w-4 h-4 rounded-full border-2 border-accent bg-background -translate-x-1/2 z-10" />
    </motion.div>
  );
}
