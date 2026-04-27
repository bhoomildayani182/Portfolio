'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY',
    degree: 'Bachelor of Engineering - Information Technology',
    period: '2020-2024',
    grade: { label: 'CGPA', value: '9.23' },
    tags: ['Information Technology', 'Programming', 'Research'],
  },
  {
    school: 'TAPOVAN VIDHYALAYA',
    degree: 'High School - Science Stream',
    period: '2018-2020',
    grade: { label: 'Percentage', value: '74.67%' },
    tags: ['Science', 'Mathematics', 'Physics'],
  },
  {
    school: 'BHULKA SAGAR VIDHYABHAVAN',
    degree: 'Secondary School Certificate (G.S.E.B)',
    period: '2017-2018',
    grade: { label: 'Percentage', value: '85.21%' },
    tags: ['Mathematics', 'Science', 'English'],
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('education');
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
    <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10" id="education">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
          <span className="section-kicker">Academic Background</span>
          <h1 className="section-heading">
            Education that shaped my <span className="gradient-text">engineering base</span>
          </h1>
          <p className="section-copy mt-5">
            My academic journey that has shaped my knowledge, research orientation, and technical fundamentals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {educationData.map((item, index) => (
            <motion.article key={item.school} variants={itemVariants} className="card flex h-full flex-col p-5">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-sm font-black text-primary-dark">
                  {index + 1}
                </span>
                <span className="rounded-md border border-line bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-gray-medium">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-black leading-tight text-foreground">{item.school}</h3>
              <p className="mt-3 text-sm font-bold leading-6 text-primary-dark">{item.degree}</p>

              <div className="mt-5 w-fit rounded-lg border border-secondary/25 bg-secondary/10 px-3 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-secondary-dark">{item.grade.label}</span>
                <span className="ml-2 text-lg font-black text-foreground">{item.grade.value}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
