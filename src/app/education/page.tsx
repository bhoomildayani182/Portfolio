import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Education from '../sections/Education';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Education | ${PERSON.name}`,
  description: 'Education background of Bhoomil Dayani, including Bachelor of Engineering in Information Technology and academic achievements.',
  alternates: { canonical: '/education' },
  openGraph: {
    url: `${SITE_URL}/education`,
    title: `Education | ${PERSON.name}`,
    description: 'Academic background and engineering foundation of Bhoomil Dayani.',
  },
};

export default function EducationPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Education />
      </main>
    </>
  );
}
