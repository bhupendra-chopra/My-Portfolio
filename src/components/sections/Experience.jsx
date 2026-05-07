import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import useScrollReveal from '@/hooks/useScrollReveal';

const experiences = [
  {
    role: 'PHP Laravel Developer (Software Developer)',
    company: 'DevTechnosys',
    location: 'Jaipur, Rajasthan',
    period: 'Dec 2025 - Present',
    achievements: [
      'Developed clean, maintainable full-stack code using PHP, Laravel, React.js, and Node.js',
      'Designed and implemented scalable web applications with optimized architecture',
      'Built responsive frontend interfaces using React.js and Bootstrap for superior UX',
      'Integrated third-party REST APIs and optimized MySQL queries for better performance',
      'Collaborated with cross-functional teams to deliver projects on schedule',
    ],
    stack: ['PHP', 'Laravel', 'React.js', 'Node.js', 'MySQL', 'Bootstrap'],
  },
  {
    role: 'PHP Laravel Developer',
    company: 'Moksha Digitech Pvt. Ltd.',
    location: 'Jaipur, Rajasthan',
    period: 'Dec 2024 - Dec 2025',
    achievements: [
      'Built complex multi-panel web applications with role-based access control (RBAC)',
      'Managed complete project lifecycle: requirement analysis, development, testing, and deployment',
      'Designed normalized database schemas and optimized queries for high-traffic applications',
      'Developed and documented RESTful APIs consumed by mobile and web clients',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Bootstrap'],
  },
  {
    role: 'Software Developer',
    company: 'Codunite Pvt. Ltd.',
    location: 'Remote',
    period: 'Dec 2023 - Nov 2024',
    achievements: [
      'Developed scalable, production-grade web applications using Laravel and Bootstrap',
      'Integrated REST APIs with third-party services (payment gateways, SMS, email services)',
      'Optimized MySQL queries and database design, reducing query response time significantly',
      'Participated in code reviews and maintained high code quality standards',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API'],
  },
  {
    role: 'Intern & Full-Time Web Developer',
    company: 'BMOIT Company',
    location: 'Jaipur, Rajasthan',
    period: 'Feb 2023 - Nov 2023',
    achievements: [
      'Wrote clean, maintainable PHP and Laravel code following best practices',
      'Designed cross-browser compatible, responsive UIs using HTML, CSS, and Bootstrap',
      'Gained hands-on experience with MVC architecture and RESTful API consumption',
      'Contributed to bug fixing and feature development in a fast-paced environment',
    ],
    stack: ['PHP', 'Laravel', 'HTML', 'CSS', 'Bootstrap'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="// Career"
          title="Professional Experience"
          description="A track record of delivering impact across startups and growing companies in education, food delivery, e-commerce, and NGO sectors."
        />

        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <GlassCard hover tilt className="group">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="font-heading text-xl font-bold group-hover:text-accent transition-colors duration-300">
              {experience.role}
            </h3>
            <p className="text-accent font-medium text-sm mt-1">{experience.company}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground text-sm font-body shrink-0">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {experience.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {experience.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {experience.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-lg bg-accent/10 text-accent font-mono text-xs">
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
