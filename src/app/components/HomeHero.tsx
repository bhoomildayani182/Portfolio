'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const outcomes = [
  { value: '20+', label: 'Delivered Projects', detail: 'Cloud, automation, security, and platform work' },
  { value: '3+', label: 'Cloud Platforms', detail: 'AWS, Azure, and GCP fundamentals' },
  { value: 'SOC 2', label: 'Compliance Focus', detail: 'Controls, access, evidence, and operational hygiene' },
  { value: 'HA', label: 'Reliability', detail: 'Active-Active, N+1, load balancing, observability' },
];

const services = [
  {
    title: 'Cloud Infrastructure Design',
    copy: 'AWS cloud foundations, VPC design, IAM, load balancing, high availability, and secure service connectivity.',
  },
  {
    title: 'CI/CD and Release Automation',
    copy: 'GitHub Actions, Jenkins, Azure DevOps, Argo CD, and repeatable pipelines for dev, UAT, and production.',
  },
  {
    title: 'Kubernetes and Containers',
    copy: 'Dockerized services, Kubernetes deployments, StatefulSets, scaling patterns, and production operations.',
  },
  {
    title: 'DevSecOps and Hardening',
    copy: 'Security scanning, server hardening, compliance practices, vulnerability reduction, and safer delivery gates.',
  },
];

const featuredProjects = [
  'SmartATP Enterprise Automation Platform',
  'Cloud-Native DevSecOps CI/CD Platform',
  'Server Security Hardening with Ansible',
];

export default function HomeHero() {
  return (
    <main className="pt-16">
      <section className="relative isolate overflow-hidden">
        <div className="cloud-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="section-kicker mb-6">Cloud DevOps Engineer for production systems</div>
            <h1 className="text-4xl font-black leading-[1.02] text-foreground md:text-6xl lg:text-7xl">
              Build, secure, and automate cloud infrastructure with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-medium">
              I help teams design reliable AWS and Kubernetes platforms, automate CI/CD delivery, harden servers, and bring DevSecOps discipline into real production workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-md bg-primary px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-line bg-white px-5 py-3 text-sm font-black text-gray-dark transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary-dark"
              >
                Discuss a Project
              </Link>
              <a
                href="https://github.com/user-attachments/files/25255455/Bhoomil-Dayani-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line bg-white px-5 py-3 text-sm font-black text-gray-dark transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:text-secondary-dark"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Core DevOps skills">
              {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'GitHub Actions', 'Jenkins', 'Prometheus'].map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:justify-self-end"
          >
            <div className="surface-card overflow-hidden">
              <div className="grid md:grid-cols-[0.86fr_1.14fr]">
                <div className="border-b border-line bg-white p-5 md:border-b-0 md:border-r">
                  <div className="relative h-72 overflow-hidden rounded-lg bg-panel-bg">
                    <Image
                      src="/assets/img/Profile-1.jpg"
                      alt="Bhoomil Dayani, Cloud DevOps Engineer"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 90vw, 340px"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-2xl font-black text-foreground">Bhoomil Dayani</p>
                    <p className="mt-1 font-bold text-primary-dark">DevOps & Cloud Engineer</p>
                    <p className="mt-3 text-sm leading-6 text-gray-medium">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="rounded-lg border border-line bg-panel-bg p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-secondary">Client Value</p>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-foreground">
                      Practical engineering for secure, scalable delivery.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-gray-medium">
                      From infrastructure provisioning to deployment automation, I focus on systems that are easy to repeat, audit, monitor, and operate.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {outcomes.map((item) => (
                      <div key={item.label} className="rounded-lg border border-line bg-white p-4">
                        <p className="text-2xl font-black text-primary-dark">{item.value}</p>
                        <p className="mt-1 text-sm font-black text-foreground">{item.label}</p>
                        <p className="mt-2 text-xs leading-5 text-gray-medium">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-white/72 px-5 py-16 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <span className="section-kicker">What I can own for clients</span>
            <h2 className="section-heading">Cloud delivery without fragile manual work.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="card p-5">
                <h3 className="text-xl font-black text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-medium">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-kicker">Proof of work</span>
            <h2 className="section-heading">Selected project areas built around reliability and trust.</h2>
            <p className="section-copy mt-5">
              The full project library is now on a separate page, so clients can quickly review the work most relevant to their infrastructure needs.
            </p>
            <Link
              href="/projects"
              className="mt-7 inline-flex rounded-md bg-secondary px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(15,118,110,0.18)] transition-all hover:-translate-y-0.5 hover:bg-secondary-dark"
            >
              Explore Project Portfolio
            </Link>
          </div>
          <div className="grid gap-4">
            {featuredProjects.map((project, index) => (
              <div key={project} className="surface-card p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-black text-gray-dark">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-foreground">{project}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-medium">
                      Built with production delivery, security, and scalable operations as the primary goal.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
