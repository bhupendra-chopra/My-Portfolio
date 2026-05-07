import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import useScrollReveal from '@/hooks/useScrollReveal';
import payolImg from '@/assets/Payol.png';
import clickfyImg from '@/assets/clickfy.png';
import gelaxyImg from '@/assets/Gelaxy.png';
import vhkImg from '@/assets/vhk.png';
import mekartImg from '@/assets/mekart.png';
import shewahhImg from '@/assets/shewahh.png';

const projectCategories = ['All', 'Web App', 'E-Commerce', 'NGO / Charity'];

const projects = [
  {
    title: 'PayolStudy',
    description: 'School Management Ecosystem with 5 roles: Super Admin, School Admin, Teacher, Student, and Parent. Features fee collection, attendance, salaries, exams, and real-time data sync via RESTful APIs.',
    category: 'Web App',
    stack: ['Laravel', 'REST API', 'Bootstrap', 'MySQL', 'JWT'],
    liveUrl: 'https://payolstudy.com/',
    githubUrl: '#',
    image: payolImg,
  },
  {
    title: 'Clickfy',
    description: 'Multi-Restaurant Food Delivery Platform with User App, Rider App, and Restaurant App. Features real-time order tracking, payment gateway integration, push notifications (Admin, Restaurant & Mobile), and centralized Super Admin panel.',
    category: 'Web App',
    stack: ['Laravel', 'REST API', 'Bootstrap', 'MySQL', 'Payment Gateway', 'Push Notifications'],
    liveUrl: 'http://clickfy.devtechnosys.tech/',
    githubUrl: '#',
    image: clickfyImg,
  },
  {
    title: 'Gelaxy',
    description: 'Full-featured E-Commerce platform with complete product and order management. Includes shopping cart, checkout flow, payment gateway, and fully responsive product catalog with filtering and search.',
    category: 'E-Commerce',
    stack: ['Laravel', 'REST API', 'Bootstrap', 'MySQL', 'Payment Gateway'],
    liveUrl: 'https://gelaxy.in/',
    githubUrl: '#',
    image: gelaxyImg,
  },
  {
    title: 'Mekart',
    description: 'Full-featured E-Commerce platform with product management, order tracking, and secure payment integration. Includes admin panel, customer management, and responsive product catalog.',
    category: 'E-Commerce',
    stack: ['Laravel', 'REST API', 'Bootstrap', 'MySQL', 'Payment Gateway'],
    liveUrl: 'https://mekart.in/',
    githubUrl: '#',
    image: mekartImg,
  },
  {
    title: 'Shewahh',
    description: 'E-Commerce platform with complete shopping experience including product catalog, cart, checkout, payment gateway integration, and admin panel for inventory and order management.',
    category: 'E-Commerce',
    stack: ['Laravel', 'REST API', 'Bootstrap', 'MySQL', 'Payment Gateway'],
    liveUrl: 'https://test.shewahh.com/',
    githubUrl: '#',
    image: shewahhImg,
  },
  {
    title: 'VHK Foundation',
    description: 'Charity & Donation Platform for a non-profit organization. Features donation management, admin and volunteer panels with permission-based access, blog management, event tracking, and secure payment gateway.',
    category: 'NGO / Charity',
    stack: ['Laravel', 'REST API', 'Bootstrap', 'MySQL', 'Payment Gateway'],
    liveUrl: 'https://vhkfoundation.org/',
    githubUrl: '#',
    image: vhkImg,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="// Portfolio"
          title="Featured Projects"
          description="End-to-end production applications serving thousands of users across education, food delivery, e-commerce, and NGO sectors."
        />

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-body text-sm transition-all duration-300 ${
                activeFilter === cat
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
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard tilt hover className="h-full flex flex-col group">
        <div className="h-48 rounded-lg mb-5 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
        </div>

        <span className="font-mono text-xs text-accent mb-2">{project.category}</span>
        <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-mono text-xs">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-border/50">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-accent transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
          <a href={project.githubUrl} className="flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-accent transition-colors">
            <Code2 className="w-4 h-4" /> Source
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}
