import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Contact from '../sections/Contact';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Contact | ${PERSON.name}`,
  description: 'Contact Bhoomil Dayani for Cloud DevOps projects, AWS infrastructure, Kubernetes, CI/CD automation, DevSecOps, server hardening, and infrastructure as code.',
  alternates: { canonical: '/contact' },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: `Contact | ${PERSON.name}`,
    description: 'Contact Bhoomil Dayani for Cloud and DevOps engineering work.',
  },
};

export default function ContactPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Contact />
      </main>
    </>
  );
}
