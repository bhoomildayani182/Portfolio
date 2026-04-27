'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'DevOps Automation & Tools',
    summary: 'Delivery automation, release orchestration, and platform workflows.',
    accent: 'border-primary/35 bg-primary/10 text-primary-dark',
    skills: ['Linux', 'Git', 'Docker', 'Jenkins', 'Argo CD', 'IaaS', 'Kubernetes', 'CircleCI', 'CI/CD', 'High Availability', 'GitHub Actions', 'SonarQube'],
  },
  {
    title: 'Cloud & Infrastructure',
    summary: 'Cloud foundations, infrastructure provisioning, and repeatable environments.',
    accent: 'border-secondary/35 bg-secondary/10 text-secondary-dark',
    skills: ['AWS', 'Azure', 'Terraform', 'Ansible', 'Infrastructure as Code', 'Kubernetes Deployments'],
  },
  {
    title: 'Programming',
    summary: 'Automation scripts, integrations, and application support.',
    accent: 'border-accent/35 bg-accent/10 text-amber-700',
    skills: ['C', 'C++', 'Shell Scripting', 'Python', 'JavaScript'],
  },
  {
    title: 'Networking & Monitoring',
    summary: 'Availability, secure access, visibility, and operational stability.',
    accent: 'border-rose-300/30 bg-rose-300/10 text-rose-700',
    skills: ['Load Balancing', 'Firewalls', 'Server Hardening', 'Prometheus', 'Grafana'],
  },
];

const proficiencies = [
  { name: 'DevOps & CI/CD', value: 95 },
  { name: 'Cloud Infrastructure', value: 85 },
  { name: 'Containerization', value: 95 },
  { name: 'Scripting & Automation', value: 90 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight * 0.78);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.65, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10" id="skills">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <span className="section-kicker">Technical Expertise</span>
            <h1 className="section-heading">
              Cloud and DevOps <span className="gradient-text">toolkit</span>
            </h1>
          </div>
          <p className="section-copy lg:max-w-2xl">
            Technologies and practices I use to build, ship, secure, and observe cloud infrastructure across production workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <motion.article key={category.title} variants={itemVariants} className="card p-5">
              <div className={`mb-5 inline-flex rounded-md border px-3 py-2 text-sm font-black ${category.accent}`}>
                {category.title.split(' ')[0]}
              </div>
              <h3 className="text-xl font-black text-foreground">{category.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-gray-medium">{category.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={itemVariants} className="surface-card mt-8 grid gap-8 p-5 md:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">Capability Snapshot</p>
            <h3 className="mt-3 text-3xl font-black text-foreground">Built for shipping reliable systems.</h3>
            <p className="mt-4 leading-7 text-gray-medium">
              My strongest work sits where infrastructure, automation, security, and delivery practices meet.
            </p>
          </div>

          <div className="space-y-6">
            {proficiencies.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between gap-4">
                  <span className="font-bold text-gray-dark">{skill.name}</span>
                  <span className="font-black text-primary-dark">{skill.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full border border-line bg-panel-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.value}%` } : { width: 0 }}
                    transition={{ duration: 1.1, delay: 0.12 * index, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
