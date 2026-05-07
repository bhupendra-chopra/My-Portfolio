import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const testimonials = [
  {
    quote: "Bhupendra's technical skills are outstanding. He transformed our product vision into reality with clean code and delivered beyond expectations every single time.",
    name: 'Mohit',
    role: 'Team Member, DevTechnosys',
    initials: 'MN',
  },
  {
    quote: "Working with Bhupendra has been a great experience. He consistently delivers maintainable, scalable code and has a genuine passion for building great user experiences.",
    name: 'Prince',
    role: 'Team Member, Moksha Digitech',
    initials: 'PS',
  },
  {
    quote: "Bhupendra is a dedicated and talented developer. His ability to handle complex multi-panel systems and RESTful APIs while keeping quality high is truly impressive.",
    name: 'Shridhar',
    role: 'Team Member, Codunite Private',
    initials: 'ST',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="// Testimonials"
          title="What People Say"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="text-center py-10 px-8">
                <Quote className="w-8 h-8 text-accent/30 mx-auto mb-6" />
                <p className="font-body text-lg leading-relaxed mb-8 text-foreground/90">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-sm">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-sm">{testimonials[current].name}</p>
                    <p className="text-muted-foreground text-xs font-body">{testimonials[current].role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-xl glass hover:border-accent/30 transition-all" aria-label="Previous testimonial">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-accent w-6' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-xl glass hover:border-accent/30 transition-all" aria-label="Next testimonial">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}