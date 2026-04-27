'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  highlights: string[];
  tags: string[];
}

const projectsData: Project[] = [
  {
    title: 'SmartATP Enterprise Automation Platform',
    subtitle: 'Production-ready, cloud-native SaaS infrastructure on AWS supporting multi-service architecture, secure secret management, scalable networking, and fully automated client-based deployment.',
    category: 'DevOps & Cloud',
    featured: true,
    highlights: [
      'ECS Fargate microservices: API, Admin, Report & Worker services',
      'CloudFront + S3 static frontend with SSL & custom domain',
      'RDS MySQL, WebSocket API Gateway & EventBridge scheduled jobs',
      'CI/CD automation via CodePipeline & Azure DevOps',
      'Multi-tenant client onboarding with parameterized CloudFormation templates',
      'ALB + NLB architecture for application & reporting layers',
    ],
    tags: ['AWS', 'ECS Fargate', 'CloudFormation', 'CloudFront', 'RDS MySQL', 'API Gateway', 'EventBridge', 'CodePipeline', 'Azure DevOps', 'Secrets Manager', 'VPC', 'IAM'],
  },
  {
    title: 'Cloud-Native DevSecOps CI/CD Platform',
    subtitle: 'End-to-end security-integrated deployment pipeline on AWS with GitOps and automated vulnerability scanning.',
    category: 'DevOps & Cloud',
    featured: true,
    highlights: [
      'Reduced deployment time by 70% with GitHub Actions automation',
      'Integrated SonarQube + Trivy for continuous security scanning',
      'GitOps-based Argo CD deployments to Kubernetes clusters',
      'Environment-specific pipelines for Dev, UAT & Production',
    ],
    tags: ['GitHub Actions', 'Kubernetes', 'Terraform', 'Argo CD', 'SonarQube', 'Trivy', 'AWS', 'Docker'],
  },
  {
    title: 'Quantum RUDDER',
    subtitle: 'Microservices-based network & identity management platform with automated Wi-Fi validation for multi-location deployments.',
    category: 'DevOps & Cloud',
    highlights: [
      'Microservices architecture with Docker & Kubernetes',
      'Automated CI/CD pipeline with Jenkins',
      'Flexible on-premises and cloud deployment options',
      'Server hardening for enterprise-grade security',
    ],
    tags: ['Kubernetes', 'Docker', 'Jenkins', 'Server Hardening', 'VCS', 'Cloud'],
  },
  {
    title: 'Clusterized Microservices Architecture',
    subtitle: 'High-availability multi-microservice system with auto-scaling, load balancing, and fault tolerance.',
    category: 'DevOps & Cloud',
    highlights: [
      'N+1 redundancy with MySQL replication & file sync',
      'Vertical and horizontal auto-scaling for dynamic workloads',
      'Load balancing across multiple server nodes',
      'Rapid scalability via server image management',
    ],
    tags: ['High Availability', 'Shell Scripting', 'Microservices', 'Load Balancing', 'Networking'],
  },
  {
    title: 'Server Security Hardening with Ansible',
    subtitle: 'Automated server security configuration using Ansible to enforce consistent hardening policies at scale.',
    category: 'DevSecOps',
    highlights: [
      'Automated OS, web server & database hardening playbooks',
      'Applied VAPT best practices across all environments',
      'Enhanced security posture for on-premises VMs',
    ],
    tags: ['Ansible', 'Security', 'VAPT', 'Linux', 'Automation'],
  },
  {
    title: 'Activity Scheduling Timetable Generator',
    subtitle: 'Heuristic timetable optimization solving the NP-hard constraint satisfaction problem - research published at ICOECA 2023.',
    category: 'Research',
    highlights: [
      'Research paper published at ICOECA 2023',
      'Automated constraint-based timetable generation',
      'CI/CD pipeline for continuous deployment',
    ],
    tags: ['React.js', 'Node.js', 'CI/CD', 'Algorithm', 'Optimization'],
  },
  {
    title: 'Motion Detection System',
    subtitle: 'Real-time computer vision motion detection with performance-optimized OpenCV pipeline.',
    category: 'Research',
    highlights: [
      'Real-time motion detection using OpenCV',
      'Emotion detection via facial recognition',
      'Performance-optimized processing pipeline',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision'],
  },
  {
    title: 'Activity Logger',
    subtitle: 'Full-stack Node.js logging system for tracking client-side activity usage, frequency, and duration.',
    category: 'Web Dev',
    highlights: [
      'Real-time log generation and analysis',
      'Supports debugging, planning & UX monitoring',
      'User subscription management system',
    ],
    tags: ['Node.js', 'MongoDB', 'Express'],
  },
];

const categories = ['All', 'DevOps & Cloud', 'DevSecOps', 'Research', 'Web Dev'];

const categoryColors: Record<string, string> = {
  'DevOps & Cloud': 'border-primary/30 bg-primary/10 text-primary-dark',
  DevSecOps: 'border-secondary/30 bg-secondary/10 text-secondary-dark',
  Research: 'border-accent/30 bg-accent/10 text-amber-700',
  'Web Dev': 'border-rose-300/30 bg-rose-300/10 text-rose-700',
};

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-1 h-4 w-4 shrink-0 text-secondary" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 4.15a.75.75 0 0 1 .15 1.05l-8 10.5a.75.75 0 0 1-1.13.08l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.9 3.89 7.47-9.81a.75.75 0 0 1 1.05-.15Z" clipRule="evenodd" />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'All' ? projectsData : projectsData.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden border-y border-line bg-panel-bg/55 px-5 py-24 md:px-8 lg:px-10"
      aria-label="Projects by Bhoomil Dayani, DevOps and Cloud Engineer"
    >
      <div className="cloud-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end"
        >
          <div>
            <span className="section-kicker">Portfolio</span>
            <h1 className="section-heading">
              Selected <span className="gradient-text">cloud work</span>
            </h1>
          </div>
          <p className="section-copy lg:max-w-2xl">
            A collection of DevOps, cloud infrastructure, and engineering projects focused on automation, security, availability, and scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
              className={`rounded-md border px-4 py-2 text-sm font-bold transition-all ${
                activeFilter === category
                  ? 'border-primary/45 bg-primary text-white shadow-[0_10px_26px_rgba(37,99,235,0.18)]'
                  : 'border-line bg-white text-gray-dark hover:border-primary/35 hover:text-primary-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className={`card flex flex-col p-5 ${project.featured ? 'xl:row-span-1' : ''}`}
                aria-label={project.title}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className={`rounded-md border px-2.5 py-1 text-xs font-black ${categoryColors[project.category] ?? 'border-line bg-white text-gray-dark'}`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="rounded-md border border-accent/35 bg-accent/10 px-2.5 py-1 text-xs font-black text-amber-700">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black leading-tight text-foreground transition-colors group-hover:text-primary-dark">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-medium">{project.subtitle}</p>

                <ul className="mt-5 flex-1 space-y-3" aria-label={`Key highlights for ${project.title}`}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm leading-6 text-gray-dark">
                      <CheckIcon />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-line bg-white px-2 py-1 text-xs font-bold text-gray-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
