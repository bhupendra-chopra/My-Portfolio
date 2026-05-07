import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function SectionHeading({ label, title, description }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <div ref={ref} className="mb-16 text-center max-w-2xl mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-accent tracking-widest uppercase"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg font-body leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}