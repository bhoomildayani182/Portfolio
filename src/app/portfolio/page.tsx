import type { Metadata } from 'next';
import Link from 'next/link';
import TopNav from '../components/TopNav';
import { SEO, SITE_URL } from '../metadata';

const portfolioAreas = [
  {
    title: 'Projects',
    href: '/projects',
    copy: 'Cloud infrastructure, DevSecOps pipelines, Kubernetes platforms, high availability systems, and automation projects.',
  },
  {
    title: 'Experience',
    href: '/experience',
    copy: 'Professional work history across SOC 2, cloud security, CI/CD automation, Kubernetes, and server hardening.',
  },
  {
    title: 'Skills',
    href: '/skills',
    copy: 'AWS, Azure, Terraform, Ansible, Docker, Kubernetes, GitHub Actions, Jenkins, Prometheus, Grafana, and Linux.',
  },
  {
    title: 'Certifications',
    href: '/certifications',
    copy: 'Cloud, DevOps, Microsoft, Google Cloud learning, research, and professional recognition.',
  },
  {
    title: 'Education',
    href: '/education',
    copy: 'Academic foundation in Information Technology, programming, research, and engineering fundamentals.',
  },
  {
    title: 'About',
    href: '/about',
    copy: 'Professional Cloud DevOps profile, engineering mindset, and client-focused delivery principles.',
  },
  {
    title: 'Contact',
    href: '/contact',
    copy: 'Reach out for Cloud DevOps projects, infrastructure automation, DevSecOps, or platform engineering support.',
  },
];

export const metadata: Metadata = {
  title: 'Portfolio Overview | Bhoomil Dayani',
  description: SEO.description,
  alternates: { canonical: '/portfolio' },
  openGraph: {
    url: `${SITE_URL}/portfolio`,
    title: 'Portfolio Overview | Bhoomil Dayani',
    description: SEO.description,
    images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: SEO.ogImageAlt }],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <section className="relative overflow-hidden px-5 py-24 md:px-8 lg:px-10">
          <div className="cloud-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="section-kicker">Portfolio Overview</span>
              <h1 className="section-heading">
                Choose the area you want to review.
              </h1>
              <p className="section-copy mt-5">
                This portfolio is now organized as separate pages, so clients can review the exact Cloud DevOps information they need without scrolling through one long page.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolioAreas.map((area) => (
                <Link key={area.href} href={area.href} className="card group block p-6">
                  <span className="section-kicker">{area.title}</span>
                  <h2 className="mt-5 text-2xl font-black text-foreground transition-colors group-hover:text-primary-dark">
                    {area.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-medium">{area.copy}</p>
                  <span className="mt-6 inline-flex text-sm font-black text-primary-dark">Open page</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
