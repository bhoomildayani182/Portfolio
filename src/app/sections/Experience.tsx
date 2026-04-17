'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if element is in viewport
      const element = document.getElementById('experience');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const experiences = [
    {
      company: "Insight Timer",
      role: "Cloud DevOps Engineer",
      period: "Jan 2026 - Present",
      location: "Remote",
      description: [
        {
          title: "SOC 2 Compliance",
          content: "Administered the organization's SOC 2 compliance program, implementing and maintaining security controls in alignment with SOC 2 requirements across the company."
        },
        {
          title: "High-Availability Infrastructure",
          content: "Operated and optimized production cloud infrastructure supporting high-availability services, achieving zero downtime."
        },
        {
          title: "Cloud Network Security",
          content: "Secured cloud networking by managing access control, firewall rules, network segmentation, and secure service connectivity."
        }
      ],
      icon: "/assets/img/companies/insight.png"
    },
    {
      company: "Zen Exim Private LTD",
      role: "DevOps Engineer",
      period: "Dec 2023 - Dec 2025",
      location: "Ahmedabad, India",
      description: [
        {
          title: "Containerization & Kubernetes",
          content: "Streamlined Docker containerization and Kubernetes deployments with StatefulSets across on-prem and cloud environments, supporting Active-Active and N+1 high-availability architectures."
        },
        {
          title: "CI/CD Pipelines",
          content: "Built and maintained CI/CD pipelines using GitHub Actions and Jenkins for continuous build and deployment workflows."
        },
        {
          title: "Infrastructure & Automation",
          content: "Configured load balancing and utilized automation tools to streamline deployments. Implemented Ansible-based server hardening, enforcing security best practices across infrastructure."
        },
        {
          title: "Microservices",
          content: "Developed microservices architectures to enhance scalability and modularity."
        }
      ],
      icon: "/assets/img/companies/zen.png"
    },
    {
      company: "IIT Bombay",
      role: "Cloud DevOps Intern",
      period: "May 2021 - Oct 2023",
      location: "Bombay, India",
      description: [
        {
          title: "Security Hardening",
          content: "Standardized Linux server security hardening using Ansible by automating security configurations, applying best practices to reduce vulnerabilities."
        },
        {
          title: "Containerization",
          content: "Containerized ERPNext services with healthcare modules for improved deployment efficiency."
        },
        {
          title: "Kubernetes Orchestration",
          content: "Set up and enhanced a local Kubernetes cluster, enabling container orchestration and efficient resource allocation."
        }
      ],
      icon: "/assets/img/companies/iit.png"
    }
    // {
    //   company: "SmartInternz",
    //   role: "Java Spring Boot & Modern Application Development",
    //   period: "Nov 2022 - Jan 2023",
    //   location: "Remote",
    //   description: [
    //     {
    //       title: "Modern Applications",
    //       content: "Prepared for a starting position in the modern applications domain through virtual training."
    //     },
    //     {
    //       title: "Cloud & Containers",
    //       content: "Learned the fundamentals of Kubernetes, containers, and application management principles."
    //     }
    //   ],
    //   icon: "/assets/img/companies/smartinternz.png"
    // },
    // {
    //   company: "WeeTech Solution PVT.LTD.",
    //   role: "Web Development (backend on Node.js)",
    //   period: "June 2022 - July 2022",
    //   location: "Surat, India",
    //   description: [
    //     {
    //       title: "Activity Logger",
    //       content: "Created an activity logger using Node.js, Express.js, and MongoDB that tracks client website interactions and displays analytics."
    //     },
    //     {
    //       title: "Backend Development",
    //       content: "Implemented RESTful APIs and database integration for real-time analytics tracking."
    //     }
    //   ],
    //   icon: "/assets/img/companies/weetech.png"
    // }
  ];

  return (
    <section className="relative min-h-screen pt-24 py-16 px-6 md:px-12 bg-gradient-to-br from-gray-light/30 to-background" id="experience">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="hidden md:block absolute top-20 left-1/3 h-[70%] w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="inline-block py-1 px-3 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">Work History</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg text-gray-dark max-w-3xl mx-auto">
            A showcase of my professional journey and the skills I've developed along the way.
          </p>
        </motion.div>

        {/* Experience Tabs - Mobile select on small screens */}
        <motion.div variants={itemVariants} className="md:hidden mb-8">
          <select
            className="w-full p-3 rounded-lg border border-gray-light bg-card-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            value={activeTab}
            onChange={(e) => setActiveTab(parseInt(e.target.value))}
          >
            {experiences.map((exp, index) => (
              <option key={index} value={index}>
                {exp.company} - {exp.role}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Desktop Experience Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab navigation - Desktop only */}
          <motion.div variants={itemVariants} className="hidden md:flex flex-col w-64 space-y-2 sticky top-24 self-start">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeTab === index
                  ? 'bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary text-primary font-medium'
                  : 'hover:bg-gray-light/50 text-gray-dark'
                  }`}
              >
                <div className="font-medium">{exp.company}</div>
                <div className="text-sm opacity-80">{exp.role.split('(')[0]}</div>
              </button>
            ))}
          </motion.div>

          {/* Experience Content */}
          <motion.div variants={itemVariants} className="flex-1">
            <div className="card p-6 md:p-8 backdrop-blur-sm bg-opacity-80 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/5 rounded-tr-full"></div>

              {/* Company and role */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary gradient-text">
                    {experiences[activeTab].company}
                  </h3>
                  <h4 className="text-xl font-medium text-gray-dark">
                    {experiences[activeTab].role}
                  </h4>
                </div>

                <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                  <div className="flex items-center gap-1 text-gray-medium mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{experiences[activeTab].period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{experiences[activeTab].location}</span>
                  </div>
                </div>
              </div>

              {/* Job description */}
              <div className="space-y-6 text-gray-dark text-justify">
                {experiences[activeTab].description.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gradient-to-r from-background to-transparent border border-gray-light/30 hover:border-primary/20 transition-all duration-300"
                  >
                    <h5 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2"></span>
                      {item.title}
                    </h5>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Skills used - visual representation */}
              <div className="mt-8 pt-6 border-t border-gray-light/30">
                <h5 className="text-sm font-medium text-gray-medium mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {activeTab === 0 && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#E5F2FC] text-[#0052CC] border border-[#0052CC]/20">SOC 2</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#E6F6E6] text-[#006600] border border-[#006600]/20">Cloud Security</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#FFE8E8] text-[#D93025] border border-[#D93025]/20">Networking</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/20">High Availability</span>
                    </>
                  )}
                  {activeTab === 1 && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#2496ED]/10 text-[#2496ED] border border-[#2496ED]/20">Docker</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#326CE5]/10 text-[#326CE5] border border-[#326CE5]/20">Kubernetes</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#E43237]/10 text-[#E43237] border border-[#E43237]/20">Jenkins</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#2088FF]/10 text-[#2088FF] border border-[#2088FF]/20">GitHub Actions</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#EE0000]/10 text-[#EE0000] border border-[#EE0000]/20">Ansible</span>
                    </>
                  )}
                  {activeTab === 2 && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#EE0000]/10 text-[#EE0000] border border-[#EE0000]/20">Ansible</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#FCC624]/10 text-[#FCC624] border border-[#FCC624]/20">Linux</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#326CE5]/10 text-[#326CE5] border border-[#326CE5]/20">Kubernetes</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#5E5086]/10 text-[#5E5086] border border-[#5E5086]/20">ERPNext</span>
                    </>
                  )}
                  {activeTab === 3 && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#6DB33F]/10 text-[#6DB33F] border border-[#6DB33F]/20">Spring Boot</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#007396]/10 text-[#007396] border border-[#007396]/20">Java</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#2496ED]/10 text-[#2496ED] border border-[#2496ED]/20">Docker</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#326CE5]/10 text-[#326CE5] border border-[#326CE5]/20">Kubernetes</span>
                    </>
                  )}
                  {activeTab === 4 && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#41873F]/10 text-[#41873F] border border-[#41873F]/20">Node.js</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#000000]/10 text-[#000000] border border-[#000000]/20">Express</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#47A248]/10 text-[#47A248] border border-[#47A248]/20">MongoDB</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-[#F7DF1E]/10 text-[#F7DF1E]/80 border border-[#F7DF1E]/20">JavaScript</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                disabled={activeTab === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 0
                  ? 'opacity-50 cursor-not-allowed text-gray-medium'
                  : 'hover:bg-primary/10 text-primary'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Previous
              </button>

              <button
                onClick={() => setActiveTab(prev => Math.min(experiences.length - 1, prev + 1))}
                disabled={activeTab === experiences.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === experiences.length - 1
                  ? 'opacity-50 cursor-not-allowed text-gray-medium'
                  : 'hover:bg-primary/10 text-primary'
                  }`}
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 