import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Certification from '../sections/Certification';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Certifications | ${PERSON.name}`,
  description: 'Certifications and achievements for Bhoomil Dayani, including AWS Cloud Practitioner, Microsoft Azure Fundamentals, IBM DevOps, Google Cloud learning, awards, and research.',
  alternates: { canonical: '/certifications' },
  openGraph: {
    url: `${SITE_URL}/certifications`,
    title: `Certifications | ${PERSON.name}`,
    description: 'Cloud, DevOps, Microsoft, research, and professional certifications for Bhoomil Dayani.',
  },
};

export default function CertificationsPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Certification />
      </main>
    </>
  );
}
