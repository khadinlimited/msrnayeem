import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Projects = ({ projects: projectsProp }) => {
  const { toast } = useToast();

  const projects = projectsProp && projectsProp.length ? projectsProp : [
    {
      title: 'HRM Project',
      description: 'Human Resource Management system for efficient employee and operational management. Features include payroll, attendance, and leave management.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      liveLink: 'https://hrm.msrnayeem.cloud',
      githubLink: 'https://github.com/msrnayeem/hrm-project'
    },
    {
      title: 'Marketplace Project',
      description: 'A robust e-commerce marketplace platform connecting buyers and sellers with secure transactions and product listings.',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Firebase'],
      liveLink: 'https://khadin.com',
      githubLink: 'https://github.com/msrnayeem/marketplace-project'
    }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener');
    } else {
      toast({ title: "🚧 Link not available" });
    }
  };

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Featured Projects</h2>
          <p className="text-gray-400 text-sm">A concise showcase of recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-4 rounded-lg bg-slate-800/50 border border-slate-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <div className="text-xs text-gray-400 mt-1">{project.tags.join(' • ')}</div>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    aria-label={`Open ${project.title} code`}
                    onClick={(e) => handleLinkClick(e, project.githubLink)}
                    className="p-1 rounded-md text-cyan-300 hover:bg-slate-700/40"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                  <button
                    aria-label={`Open ${project.title} live`}
                    onClick={(e) => handleLinkClick(e, project.liveLink)}
                    className="p-1 rounded-md text-cyan-300 hover:bg-slate-700/40"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-3 mb-3">{project.description.length > 140 ? project.description.slice(0, 140) + '…' : project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-200">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;