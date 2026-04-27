'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Insight Timer',
    role: 'Cloud DevOps Engineer',
    period: 'Jan 2026 - Present',
    location: 'Remote',
    description: [
      {
        title: 'SOC 2 Compliance',
        content: "Administered the organization's SOC 2 compliance program, implementing and maintaining security controls in alignment with SOC 2 requirements across the company.",
      },
      {
        title: 'High-Availability Infrastructure',
        content: 'Operated and optimized production cloud infrastructure supporting high-availability services, achieving zero downtime.',
      },
      {
        title: 'Cloud Network Security',
        content: 'Secured cloud networking by managing access control, firewall rules, network segmentation, and secure service connectivity.',
      },
    ],
    technologies: ['SOC 2', 'Cloud Security', 'Networking', 'High Availability', 'Access Control'],
  },
  {
    company: 'Zen Exim Private LTD',
    role: 'DevOps Engineer',
    period: 'Dec 2023 - Dec 2025',
    location: 'Ahmedabad, India',
    description: [
      {
        title: 'Containerization & Kubernetes',
        content: 'Streamlined Docker containerization and Kubernetes deployments with StatefulSets across on-prem and cloud environments, supporting Active-Active and N+1 high-availability architectures.',
      },
      {
        title: 'CI/CD Pipelines',
        content: 'Built and maintained CI/CD pipelines using GitHub Actions and Jenkins for continuous build and deployment workflows.',
      },
      {
        title: 'Infrastructure & Automation',
        content: 'Configured load balancing and utilized automation tools to streamline deployments. Implemented Ansible-based server hardening, enforcing security best practices across infrastructure.',
      },
      {
        title: 'Microservices',
        content: 'Developed microservices architectures to enhance scalability and modularity.',
      },
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible', 'Load Balancing'],
  },
  {
    company: 'IIT Bombay',
    role: 'Cloud DevOps Intern',
    period: 'May 2021 - Nov 2023',
    location: 'Bombay, India',
    description: [
      {
        title: 'Security Hardening',
        content: 'Standardized Linux server security hardening using Ansible by automating security configurations, applying best practices to reduce vulnerabilities.',
      },
      {
        title: 'Containerization',
        content: 'Containerized ERPNext services with healthcare modules for improved deployment efficiency.',
      },
      {
        title: 'Kubernetes Orchestration',
        content: 'Set up and enhanced a local Kubernetes cluster, enabling container orchestration and efficient resource allocation.',
      },
    ],
    technologies: ['Ansible', 'Linux', 'Kubernetes', 'ERPNext', 'Security Hardening'],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const activeExperience = experiences[activeTab];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
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
    visible: { opacity: 1, transition: { duration: 0.65, staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden border-y border-line bg-panel-bg/55 px-5 py-24 md:px-8 lg:px-10" id="experience">
      <div className="cloud-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
          <span className="section-kicker">Work History</span>
          <h1 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="section-copy mt-5">
            A focused view of the infrastructure, security, automation, and delivery work I have owned across production environments.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="md:hidden">
          <label htmlFor="experience-select" className="sr-only">Select experience</label>
          <select
            id="experience-select"
            className="mb-6 w-full rounded-lg border border-line bg-card-bg px-4 py-3 text-foreground outline-none ring-primary/30 focus:ring-2"
            value={activeTab}
            onChange={(event) => setActiveTab(Number.parseInt(event.target.value, 10))}
          >
            {experiences.map((experience, index) => (
              <option key={experience.company} value={index}>
                {experience.company} - {experience.role}
              </option>
            ))}
          </select>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <motion.div variants={itemVariants} className="hidden lg:block">
            <div className="sticky top-24 grid gap-3">
              {experiences.map((experience, index) => (
                <button
                  key={experience.company}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`rounded-lg border p-4 text-left transition-all ${
                    activeTab === index
                      ? 'border-primary/45 bg-primary/10 shadow-[0_0_28px_rgba(76,201,232,0.12)]'
                      : 'border-line bg-white hover:border-primary/25 hover:bg-primary/5'
                  }`}
                  aria-pressed={activeTab === index}
                >
                  <span className="block text-sm font-black text-foreground">{experience.company}</span>
                  <span className="mt-1 block text-sm text-gray-medium">{experience.role}</span>
                  <span className="mt-3 block text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">{experience.period}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.article variants={itemVariants} className="surface-card overflow-hidden">
            <div className="border-b border-line p-5 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">{activeExperience.role}</p>
                  <h3 className="mt-2 text-3xl font-black text-foreground md:text-4xl">{activeExperience.company}</h3>
                </div>
                <div className="grid gap-2 text-sm text-gray-dark md:text-right">
                  <span className="font-bold">{activeExperience.period}</span>
                  <span className="text-gray-medium">{activeExperience.location}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-5 md:p-8">
              {activeExperience.description.map((item) => (
                <div key={item.title} className="rounded-lg border border-line bg-panel-bg p-5">
                  <div className="flex gap-4">
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-full border border-secondary/40 bg-secondary shadow-[0_0_18px_rgba(130,209,115,0.45)]" aria-hidden="true" />
                    <div>
                      <h4 className="text-lg font-black text-foreground">{item.title}</h4>
                      <p className="mt-2 leading-7 text-gray-medium">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-2 border-t border-line pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-medium">Technologies Used</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeExperience.technologies.map((technology) => (
                    <span key={technology} className="chip">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between border-t border-line p-5">
              <button
                type="button"
                onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                disabled={activeTab === 0}
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-bold text-gray-dark transition-colors hover:border-primary/35 hover:text-primary-dark disabled:cursor-not-allowed disabled:opacity-45"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveTab((prev) => Math.min(experiences.length - 1, prev + 1))}
                disabled={activeTab === experiences.length - 1}
                className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-bold text-gray-dark transition-colors hover:border-primary/35 hover:text-primary-dark disabled:cursor-not-allowed disabled:opacity-45"
              >
                Next
              </button>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
