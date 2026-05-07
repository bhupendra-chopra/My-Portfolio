import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Palette, BarChart3, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import useScrollReveal from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance, SEO-optimized websites and web applications built with modern frameworks.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with native performance using React Native.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable server architectures, RESTful/GraphQL APIs, and microservices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design systems, prototyping, and design-to-code implementation.',
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Core Web Vitals optimization, lazy loading, and caching strategies.',
  },
  {
    icon: Shield,
    title: 'Security & DevOps',
    description: 'Secure deployment pipelines, CI/CD, and infrastructure management.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// Services"
          title="What I Offer"
          description="End-to-end development services tailored to bring your vision to life."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const { ref, isInView } = useScrollReveal();
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard hover className="group h-full">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">
          {service.description}
        </p>
      </GlassCard>
    </motion.div>
  );
}