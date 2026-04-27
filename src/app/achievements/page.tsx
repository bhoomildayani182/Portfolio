import type { Metadata } from 'next';
import TopNav from '../components/TopNav';
import Achievements from '../sections/Achievements';
import { PERSON, SITE_URL } from '../metadata';

export const metadata: Metadata = {
  title: `Achievements | ${PERSON.name}`,
  description: 'Achievements by Bhoomil Dayani, including hackathon participation, research recognition, and competitive programming accomplishments.',
  alternates: { canonical: '/achievements' },
  openGraph: {
    url: `${SITE_URL}/achievements`,
    title: `Achievements | ${PERSON.name}`,
    description: 'Academic, research, and engineering achievements by Bhoomil Dayani.',
  },
};

export default function AchievementsPage() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Achievements />
      </main>
    </>
  );
}
