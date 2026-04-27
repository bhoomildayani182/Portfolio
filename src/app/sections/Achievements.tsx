'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: 'Student Start-up and Innovation Policy (SSIP)',
    category: 'Hackathon',
    image: '/assets/img/ssiphacathon.jpg',
    description: 'Had an amazing experience during my first ever 36 hours hackathon participation in SSIP hosted #aazadikaamritmahotsav hackathon organised by Education department of Gujarat Government.',
    projectDesc: 'A web portal for maintaining purchase data (Portalsology) using MERN stack.',
    tags: ['MERN Stack', 'Web Development', 'Hackathon'],
    link: 'https://github.com/bhoomildayani182/Portalsology_Hackathon_2k22.git',
  },
  {
    title: 'Codepie 3.0 Participant',
    category: 'Programming',
    image: '/assets/img/codepi3.png',
    description: 'I earned a certificate for my participation in Codepie 3.0 Competitive Programming Contest Organized by Faculty of Technology & Engineering in association with Codeing Ninjas and Aris Overseas on March 28, 2023.',
    quote: 'Demonstrated strong problem-solving skills and ability to work under pressure, showcasing proficiency in coding and programming.',
    tags: ['Competitive Programming', 'Problem Solving', 'Coding'],
  },
];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('achievements');
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
    <section className="relative overflow-hidden border-y border-line bg-panel-bg/55 px-5 py-24 md:px-8 lg:px-10" id="achievements">
      <div className="cloud-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
          <span className="section-kicker">Recognition & Accomplishments</span>
          <h1 className="section-heading">
            Achievements beyond <span className="gradient-text">day-to-day delivery</span>
          </h1>
          <p className="section-copy mt-5">
            Notable accomplishments and recognition received throughout my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {achievementsData.map((achievement) => (
            <motion.article key={achievement.title} variants={itemVariants} className="card grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-line bg-[#f8fafc] p-5 lg:border-b-0 lg:border-r">
                <div className="relative h-64 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                </div>
              </div>

              <div className="flex flex-col p-5 md:p-6">
                <span className="mb-3 w-fit rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-black text-amber-700">
                  {achievement.category}
                </span>
                <h3 className="text-2xl font-black leading-tight text-foreground">{achievement.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-medium">{achievement.description}</p>

                {achievement.projectDesc && (
                  <p className="mt-4 rounded-lg border border-line bg-panel-bg p-4 text-sm leading-6 text-gray-dark">
                    {achievement.projectDesc}
                  </p>
                )}

                {achievement.quote && (
                  <blockquote className="mt-4 border-l-2 border-primary/50 pl-4 text-sm italic leading-6 text-gray-dark">
                    "{achievement.quote}"
                  </blockquote>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-bold text-primary-dark transition-colors hover:border-primary/55 hover:bg-primary/15"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
