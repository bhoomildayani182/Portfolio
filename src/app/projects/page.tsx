import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Projects from '../sections/Projects';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Projects | ${PERSON.name}`,
  description: 'Cloud and DevOps projects by Bhoomil Dayani, including AWS SaaS infrastructure, DevSecOps CI/CD, Kubernetes microservices, high availability architecture, and Ansible hardening.',
  alternates: { canonical: '/projects' },
  openGraph: {
    url: `${SITE_URL}/projects`,
    title: `Projects | ${PERSON.name}`,
    description: 'Selected Cloud, DevOps, DevSecOps, and infrastructure automation projects by Bhoomil Dayani.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Projects />
      </main>
    </>
  );
}
