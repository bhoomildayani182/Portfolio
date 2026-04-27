import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import About from '../sections/About';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `About ${PERSON.name} | Cloud DevOps Engineer`,
  description: 'Learn about Bhoomil Dayani, a Cloud DevOps Engineer focused on AWS, Kubernetes, CI/CD automation, DevSecOps, server hardening, and reliable production infrastructure.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: `About ${PERSON.name} | Cloud DevOps Engineer`,
    description: 'Professional Cloud DevOps profile of Bhoomil Dayani, including infrastructure strengths, reliability mindset, and client-focused engineering approach.',
  },
};

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <About />
      </main>
    </>
  );
}
