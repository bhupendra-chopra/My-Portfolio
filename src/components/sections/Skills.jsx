import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import useScrollReveal from '@/hooks/useScrollReveal';

const categories = ['Frontend', 'Backend', 'Tools & DevOps'];

const skills = {
  Frontend: [
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'JavaScript (ES6+)', level: 80 },
    { name: 'React.js', level: 75 },
  ],
  Backend: [
    { name: 'PHP / Laravel', level: 92 },
    { name: 'MySQL', level: 90 },
    { name: 'REST API', level: 88 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 65 },
  ],
  'Tools & DevOps': [
    { name: 'Git / GitHub', level: 92 },
    { name: 'Postman', level: 88 },
    { name: 'AWS / cPanel / VPS', level: 78 },
    { name: 'VS Code / Cursor', level: 90 },
    { name: 'Composer', level: 85 },
    { name: 'DigitalOcean / Hostinger', level: 75 },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="// Tech Stack"
          title="Skills & Technologies"
          description="A curated set of tools and technologies I use to build exceptional digital products."
        />

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-body text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-accent/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5"
          >
            {skills[activeCategory].map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }) {
  const { ref, isInView } = useScrollReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm font-medium">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0.5 }}
          className="font-mono text-xs text-accent"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400 relative"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}
