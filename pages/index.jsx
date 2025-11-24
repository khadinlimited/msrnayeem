import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';
import SEO from '@/components/SEO';
import fs from 'fs';
import path from 'path';

export default function Home({ skills, projects, personal }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-colors duration-300">
      <SEO
        title={`${personal?.name || 'Shahidur Rahman Nayeem'} — ${personal?.title || 'Full Stack Developer'}`}
        description={personal?.tagline}
        url="https://msrnayeem.cloud"
        image={personal?.avatar}
        keywords={[
          'web developer',
          'laravel',
          'php',
          'node',
          'next',
          'react',
          'ci-cd',
          'cicd',
          'deployment',
          'docker',
          'api integration',
          'courier integration',
          'payment gateway integration',
          'stripe',
          'bkash',
          'upay',
          'amarpay',
          'uddoktapay'
        ]}
        authorName={personal?.name}
        canonical="https://msrnayeem.cloud"
        twitterHandle="@msrnayeem"
        jsonLd={{ jobTitle: personal?.title, knowsAbout: [
          'Web Development',
          'Laravel',
          'PHP',
          'Node.js',
          'Next.js',
          'React',
          'CI/CD',
          'Deployment',
          'Docker',
          'API Integration',
          'Courier Integration',
          'Payment Gateway Integration'
        ] }}
      />

      <Navbar />
      <main>
        <Hero personal={personal} />
        <About personal={personal} />
        <Projects projects={projects} />
        <Skills data={skills} />
        <Contact personal={personal} />
      </main>
      <Toaster />
    </div>
  );
}

export async function getStaticProps() {
  const infoDir = path.join(process.cwd(), 'info');
  let skills = [];
  let projects = [];
  let personal = null;

  try {
    const skillsRaw = fs.readFileSync(path.join(infoDir, 'skills.json'), 'utf8');
    skills = JSON.parse(skillsRaw);
  } catch (err) {
    // ignore — components have fallbacks
  }

  try {
    const projectsRaw = fs.readFileSync(path.join(infoDir, 'projects.json'), 'utf8');
    projects = JSON.parse(projectsRaw);
  } catch (err) {
    // ignore
  }

  try {
    const personalRaw = fs.readFileSync(path.join(infoDir, 'personal.json'), 'utf8');
    personal = JSON.parse(personalRaw);
  } catch (err) {
    // ignore
  }

  return {
    props: { skills, projects, personal },
  };
}
