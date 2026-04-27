import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Experience from '../sections/Experience';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Experience | ${PERSON.name}`,
  description: 'Cloud DevOps experience of Bhoomil Dayani across SOC 2, high availability infrastructure, Kubernetes, CI/CD, server hardening, and cloud network security.',
  alternates: { canonical: '/experience' },
  openGraph: {
    url: `${SITE_URL}/experience`,
    title: `Experience | ${PERSON.name}`,
    description: 'Professional DevOps and Cloud engineering work history for Bhoomil Dayani.',
  },
};

export default function ExperiencePage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Experience />
      </main>
    </>
  );
}
