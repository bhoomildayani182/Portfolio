'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificationItem {
  title: string;
  provider: string;
  category: string;
  image: string;
  description: string;
  badgeLink?: string;
  detailsLink?: string;
  certificateLink?: string;
  profileLink?: string;
  paperLink?: string;
}

const certificationsData: CertificationItem[] = [
  {
    title: 'AWS Cloud Practitioner',
    provider: 'AWS',
    category: 'Cloud',
    image: '/assets/img/awsclp.jpg',
    description: 'Professional certification demonstrating cloud computing expertise',
    badgeLink: 'https://www.credly.com/badges/f48dafb1-7635-495c-abc7-fd0ca8d99c23/public_url',
    detailsLink: 'https://www.linkedin.com/posts/bhoomil-dayani-b286b1201_aws-certified-cloud-practitioner-activity-7019523219967643648-rdcM',
  },
  {
    title: 'ZenExim PVT LTD',
    provider: 'Professional',
    category: 'Award',
    image: '/assets/img/zen.png',
    description: 'Department Star of the Month of Quantum Networks',
    detailsLink: 'https://www.linkedin.com/posts/bhoomildayani_gratitude-teamwork-recognition-activity-7269980367435038720-bCfD',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    provider: 'Azure',
    category: 'Cloud',
    image: '/assets/img/AZ-900.png',
    description: 'AZ-900 certification for cloud fundamentals',
    badgeLink: 'https://www.credly.com/badges/03e288f5-920b-4fbd-aecd-457b556d23f9/public_url',
    detailsLink: 'https://www.linkedin.com/posts/bhoomildayani_connections-azure-azurecloud-activity-7037028954821599232-0aPe',
  },
  {
    title: 'Microsoft Power Platform Fundamentals',
    provider: 'Azure',
    category: 'Microsoft',
    image: '/assets/img/PL-900.png',
    description: 'PL-900 certification for Power Platform fundamentals',
    badgeLink: 'https://www.credly.com/badges/8939ff67-e50b-42c6-a44f-a431481110a7/public_url',
    detailsLink: 'https://www.linkedin.com/posts/bhoomildayani_connections-azure-azurecloud-activity-7041337852651036673-oGBx',
  },
  {
    title: 'IBM DevOps and Software Engineering',
    provider: 'DevOps',
    category: 'DevOps',
    image: '/assets/img/devops.png',
    description: 'Professional certification in DevOps and software engineering',
    certificateLink: 'https://coursera.org/share/bff093eafcc8702e7a81ac869f922737',
  },
  {
    title: 'Google Cloud Ready Facilitators Program',
    provider: 'Cloud',
    category: 'Cloud',
    image: '/assets/img/GCCF1.png',
    description: 'Professional certification in Google Cloud technologies',
    profileLink: 'https://www.cloudskillsboost.google/public_profiles/68820899-7f56-4ccb-9e9c-d1bab3a29d5a',
  },
  {
    title: 'Research Paper Publication',
    provider: 'Research',
    category: 'Research',
    image: '/assets/img/ICOECA2023.png',
    description: 'International Conference on Expert Clouds and Applications (ICOECA 2023)',
    paperLink: 'https://github.com/bhoomildayani182/FlightAware/files/11018317/ICOECA-2023.pdf',
    detailsLink: 'https://www.linkedin.com/posts/bhoomildayani_icoeca-2023-activity-7033370343733948416-VP3q',
  },
  {
    title: 'Research Paper Publication',
    provider: 'Research',
    category: 'Research',
    image: '/assets/img/conforances.png',
    description: 'International Multidisciplinary Conference on Information Science, Management Research and Social Sciences',
    paperLink: 'https://github.com/bhoomildayani182/FlightAware/files/11018186/Emotion.Detection.Using.OpenCV.for.Facial.Recognition.pdf',
    detailsLink: 'https://www.linkedin.com/posts/bhoomil-dayani-b286b1201_ajk-emotiondetection-technicalpaper-activity-6937630064280748032-R8jj',
  },
  {
    title: 'Microsoft Learn Student Ambassador',
    provider: 'Microsoft',
    category: 'Microsoft',
    image: '/assets/img/fronendmicrosoft.jpg',
    description: 'Front-End Web Development ESSENTIALS Bootcamp',
    detailsLink: 'https://cert.devtown.in/verify/1QDjwa',
  },
  {
    title: 'Charusat Research Paper Award',
    provider: 'Research',
    category: 'Award',
    image: '/assets/img/charusat.png',
    description: 'Recognition for outstanding research contribution',
    detailsLink: 'https://www.linkedin.com/posts/bhoomildayani_charusat-researchpaper-award-activity-7292061887624572928-1dcW',
  },
  {
    title: 'The Hong Kong University of Science and Technology',
    provider: 'Web Dev',
    category: 'Web Dev',
    image: '/assets/img/fswd.png',
    description: 'Front-End Web Development with React and Server-side Development with NodeJS',
    detailsLink: 'https://coursera.org/share/c721148e98400d85ef5e788c9116c017',
  },
  {
    title: 'HackerRank SQL (Basic)',
    provider: 'Programming',
    category: 'Programming',
    image: '/assets/img/SQL.png',
    description: 'Professional certification in SQL programming',
    detailsLink: 'https://www.hackerrank.com/certificates/b08cce156a33',
  },
  {
    title: 'HackerRank Java (Basic)',
    provider: 'Programming',
    category: 'Programming',
    image: '/assets/img/JavaBasic.jfif',
    description: 'Professional certification in Java programming',
    detailsLink: 'https://www.linkedin.com/posts/bhoomil-dayani-b286b1201_activity-6856174931873447936-bfZ_',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    provider: 'Networking',
    category: 'Networking',
    image: '/assets/img/bitsbyte.PNG',
    description: 'Professional certification in computer networking',
    detailsLink: 'https://coursera.org/share/3ab396da9bfcbfca0294be970bf211fa',
  },
  {
    title: 'Google Developer Group',
    provider: 'Web Dev',
    category: 'Web Dev',
    image: '/assets/img/fronendgoogledeveloper.jpg',
    description: 'Front-End Web Development ESSENTIALS Bootcamp',
    detailsLink: 'https://cert.devtown.in/verify/IAjka',
  },
];

function certificationLinks(cert: CertificationItem) {
  return [
    cert.badgeLink && { label: 'Badge', href: cert.badgeLink },
    cert.paperLink && { label: 'Paper', href: cert.paperLink },
    cert.detailsLink && { label: 'Details', href: cert.detailsLink },
    cert.profileLink && { label: 'Profile', href: cert.profileLink },
    cert.certificateLink && { label: 'Certificate', href: cert.certificateLink },
  ].filter(Boolean) as { label: string; href: string }[];
}

export default function Certification() {
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('certifications');
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
    visible: { opacity: 1, transition: { duration: 0.65, staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const categories = ['all', ...Array.from(new Set(certificationsData.map((cert) => cert.category)))];
  const filteredCertifications = sortBy === 'all' ? certificationsData : certificationsData.filter((cert) => cert.category === sortBy);

  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10" id="certifications">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <span className="section-kicker">Professional Development</span>
            <h1 className="section-heading">
              Certifications and <span className="gradient-text">recognition</span>
            </h1>
          </div>
          <div className="grid gap-5 lg:justify-items-end">
            <p className="section-copy lg:max-w-2xl">
              Professional certifications, awards, and learning milestones that support my Cloud and DevOps engineering practice.
            </p>
            <label className="flex w-full max-w-xs flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-medium">Filter</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full rounded-lg border border-line bg-card-bg px-4 py-3 text-foreground outline-none ring-primary/30 focus:ring-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCertifications.map((cert) => {
            const links = certificationLinks(cert);
            return (
              <motion.article key={`${cert.title}-${cert.image}`} variants={itemVariants} className="card flex flex-col">
                <div className="relative border-b border-line bg-[#f8fafc]">
                  <div className="flex h-48 items-center justify-center overflow-hidden p-5">
                    <Image src={cert.image} alt={cert.title} width={320} height={210} className="h-full w-full object-contain" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-md border border-black/10 bg-background px-2.5 py-1 text-xs font-black text-primary-dark">
                    {cert.provider}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-3 w-fit rounded-md border border-line bg-white px-2.5 py-1 text-xs font-bold text-gray-medium">
                    {cert.category}
                  </span>
                  <h3 className="text-xl font-black leading-tight text-foreground">{cert.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-medium">{cert.description}</p>

                  {links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm font-bold text-primary-dark transition-colors hover:border-primary/55 hover:bg-primary/15"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
