import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';
import fs from 'fs';
import path from 'path';

export async function generateMetadata() {
    const infoDir = path.join(process.cwd(), 'info');
    let personal = null;
    try {
        const personalRaw = fs.readFileSync(path.join(infoDir, 'personal.json'), 'utf8');
        personal = JSON.parse(personalRaw);
    } catch (err) { }

    const title = `${personal?.name || 'Shahidur Rahman Nayeem'} — ${personal?.title || 'Full Stack Developer'}`;
    const description = personal?.tagline || 'Building exceptional digital experiences with modern web technologies.';
    const url = 'https://msrnayeem.cloud';
    const image = personal?.avatar || `${url}/og-image.png`;

    return {
        title: {
            default: title,
            template: `%s | ${personal?.name || 'MSR Nayeem'}`
        },
        description,
        authors: [{ name: personal?.name || 'Shahidur Rahman Nayeem' }],
        keywords: [
            'web developer', 'full stack developer', 'bangladesh', 'dinajpur',
            'laravel', 'php', 'node', 'next', 'react', 'ci-cd', 'cicd',
            'deployment', 'docker', 'api integration', 'courier integration',
            'payment gateway integration', 'stripe', 'bkash', 'upay', 'amarpay', 'uddoktapay'
        ],
        metadataBase: new URL(url),
        openGraph: {
            title,
            description,
            url,
            siteName: personal?.name || 'MSR Nayeem Portfolio',
            locale: 'en_US',
            type: 'website',
            images: [{
                url: image,
                width: 1200,
                height: 630,
                alt: title,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@msrnayeem',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: url,
        },
    };
}

export default function Home() {
    const infoDir = path.join(process.cwd(), 'info');
    let skills = [];
    let projects = [];
    let personal = null;

    try {
        const skillsRaw = fs.readFileSync(path.join(infoDir, 'skills.json'), 'utf8');
        skills = JSON.parse(skillsRaw);
    } catch (err) { }

    try {
        const projectsRaw = fs.readFileSync(path.join(infoDir, 'projects.json'), 'utf8');
        projects = JSON.parse(projectsRaw);
    } catch (err) { }

    try {
        const personalRaw = fs.readFileSync(path.join(infoDir, 'personal.json'), 'utf8');
        personal = JSON.parse(personalRaw);
    } catch (err) { }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-colors duration-300">
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
