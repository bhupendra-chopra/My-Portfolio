import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import useScrollReveal from '@/hooks/useScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, label: 'bhupendrachopra001@gmail.com', href: 'mailto:bhupendrachopra001@gmail.com' },
  { icon: Phone, label: '+91 6367084411', href: 'tel:+916367084411' },
  { icon: MapPin, label: 'Jaipur Veshali', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', title: '' });
  const [sent, setSent] = useState(false);
  const { ref, isInView } = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    emailjs.send(
        'service_8p73dyl',
        'template_0xrwggo',
        form,
        'ure7J3q6oxHAId8Yw'
      ).then(() => {
        setSent(true);
        toast.success('Message sent successfully!');
      }).catch(() => {
        toast.error('Failed to send message');
      });
  
    const whatsappMessage = `Hello, my name is ${form.name}.
    Email: ${form.email}
    Subject: ${form.subject}
    Message: ${form.message}`;
    
    const whatsappURL = `https://wa.me/916367084411?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL);
    
        setSent(true);
        toast.success('Message sent successfully!');
    
        setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="// Get in Touch"
          title="Let's Build Something"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:border-accent/30 transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {label}
                </span>
              </a>
            ))}

            <GlassCard className="mt-8">
              <p className="font-mono text-xs text-accent mb-2">STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
                <span className="font-body text-sm">Available for new projects</span>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="md:col-span-3">
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1.5 block">Name *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-muted/50 border-border/50 focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="bg-muted/50 border-border/50 focus:border-accent/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1.5 block">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value, title: e.target.value })}
                    placeholder="Project Discussion"
                    className="bg-muted/50 border-border/50 focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1.5 block">Message *</label>
                  <Textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="bg-muted/50 border-border/50 focus:border-accent/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}