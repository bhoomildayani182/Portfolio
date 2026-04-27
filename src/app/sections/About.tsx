/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/bhoomildayani',
    icon: (
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bhoomildayani182',
    icon: (
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Bhoomil_Dayani',
    icon: (
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" />
    ),
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/bhoomildayani182',
    icon: (
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-2 5h4v6h-4V9Z" />
    ),
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~014ee5b1482f2068e5?mp_source=share',
    icon: (
      <path d="M18.56 13.16c-1.1 0-2.13-.47-3.07-1.23l.23-1.08.01-.04c.2-1.14.84-3.06 2.83-3.06a2.7 2.7 0 0 1 2.7 2.71 2.7 2.7 0 0 1-2.7 2.7Zm0-8.14c-2.54 0-4.51 1.65-5.31 4.36-1.22-1.83-2.15-4.03-2.69-5.89H7.83v7.11a2.55 2.55 0 0 1-2.55 2.55 2.55 2.55 0 0 1-2.54-2.55V3.49H0v7.11a5.3 5.3 0 0 0 5.28 5.31 5.3 5.3 0 0 0 5.28-5.31V9.41a17.72 17.72 0 0 0 1.98 3.23l-1.68 7.87h2.8l1.21-5.71a6.78 6.78 0 0 0 3.69 1.11A5.45 5.45 0 0 0 24 10.46a5.44 5.44 0 0 0-5.44-5.44Z" />
    ),
  },
];

const focusAreas = [
  'Reliable cloud architecture',
  'Automated CI/CD delivery',
  'Kubernetes and containers',
  'Infrastructure as Code',
  'DevSecOps and compliance',
  'Monitoring and hardening',
];

const clientTrust = [
  {
    title: 'Clear implementation',
    copy: 'I document decisions, risks, dependencies, and deployment steps so infrastructure work remains understandable after delivery.',
  },
  {
    title: 'Security-aware delivery',
    copy: 'I treat access control, hardening, scanning, secrets, and compliance evidence as part of the delivery process, not as an afterthought.',
  },
  {
    title: 'Operational reliability',
    copy: 'I design for uptime, rollback, observability, and repeatable deployments so teams can operate systems with confidence.',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.65, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10"
      id="about"
      aria-label="About Bhoomil Dayani"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="lg:sticky lg:top-24">
          <span className="section-kicker">About</span>
          <h1 className="section-heading" itemProp="name">
            Professional Cloud DevOps engineering for teams that need trust, uptime, and speed.
          </h1>
          <p className="section-copy mt-5" itemProp="jobTitle">
            I help clients move from manual infrastructure and risky deployments to secure, automated, observable cloud platforms.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <span className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
                <p className="text-sm font-bold text-gray-dark">{area}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="surface-card p-5 md:p-8">
          <div className="space-y-6 text-base leading-8 text-gray-dark md:text-lg" itemProp="description">
            <p>
              I am a Cloud DevOps Engineer focused on designing, automating, securing, and operating production infrastructure. My work is centered on helping teams deploy faster while keeping systems stable, auditable, and easier to maintain.
            </p>
            <p>
              I build CI/CD pipelines, manage containerized workloads, provision infrastructure using IaC practices, and support cloud environments that need proper networking, access control, monitoring, and release discipline. I care about practical engineering: clean architecture, clear documentation, repeatable processes, and measurable operational value.
            </p>
            <p>
              My experience includes production cloud operations, SOC 2 compliance support, server hardening, Kubernetes deployments, GitHub Actions and Jenkins automation, and high-availability infrastructure. As part of a national security infrastructure initiative for the National Investigation Agency, I deployed a high-availability AAA server solution integrated with existing enterprise systems.
            </p>
            <p>
              For clients, my goal is simple: reduce deployment risk, improve reliability, strengthen security posture, and create cloud systems that a team can trust after handoff.
            </p>
          </div>

          <div className="mt-8 grid gap-4 border-t border-line pt-6 md:grid-cols-3">
            {clientTrust.map((item) => (
              <div key={item.title} className="rounded-lg border border-line bg-white p-4">
                <h2 className="text-base font-black text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-medium">{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-line pt-6 md:grid-cols-3">
            {[
              { label: 'Email', value: 'hello@bhoomild.com', href: 'mailto:hello@bhoomild.com', itemProp: 'email' },
              { label: 'Phone', value: '+91 9033706595', href: 'tel:+919033706595', itemProp: 'telephone' },
              { label: 'Location', value: 'Ahmedabad, Gujarat', itemProp: 'addressLocality' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-line bg-panel-bg p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-medium">{item.label}</p>
                {item.href ? (
                  <a href={item.href} itemProp={item.itemProp} className="mt-2 block break-words text-sm font-bold text-foreground transition-colors hover:text-primary-dark">
                    {item.value}
                  </a>
                ) : (
                  <p itemProp={item.itemProp} className="mt-2 text-sm font-bold text-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={`Visit Bhoomil Dayani on ${link.name}`}
                itemProp="sameAs"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-gray-dark transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary-dark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {link.icon}
                </svg>
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
