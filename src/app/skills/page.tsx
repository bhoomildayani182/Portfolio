import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Skills from '../sections/Skills';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Skills | ${PERSON.name}`,
  description: 'Cloud DevOps skills across AWS, Azure, Kubernetes, Docker, Terraform, Ansible, CI/CD, GitHub Actions, Jenkins, Prometheus, Grafana, and DevSecOps.',
  alternates: { canonical: '/skills' },
  openGraph: {
    url: `${SITE_URL}/skills`,
    title: `Skills | ${PERSON.name}`,
    description: 'Technical skills and platform engineering toolkit of Bhoomil Dayani.',
  },
};

export default function SkillsPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Skills />
      </main>
    </>
  );
}
