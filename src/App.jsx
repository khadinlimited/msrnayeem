import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Helmet>
        <title>Shahidur Rahman Nayeem - Full Stack Developer Portfolio</title>
        <meta name="description" content="Shahidur Rahman Nayeem is a full-stack developer specializing in React, Node.js, PHP, Laravel, and modern web technologies. View my projects and get in touch." />
        <meta name="keywords" content="Shahidur Rahman Nayeem, Full Stack Developer, React Developer, Node.js Developer, Laravel Developer, Web Developer Bangladesh, Portfolio" />
        <meta property="og:title" content="Shahidur Rahman Nayeem - Full Stack Developer" />
        <meta property="og:description" content="Building exceptional digital experiences with modern web technologies." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;