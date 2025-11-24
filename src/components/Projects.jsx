import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "HRM Project",
      description: "Human Resource Management system for efficient employee and operational management. Features include payroll, attendance, and leave management.",
      tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      image: "HRM dashboard showing employee data and management tools",
      liveLink: "https://hrm.msrnayeem.cloud",
      githubLink: "https://github.com/msrnayeem/hrm-project" // Placeholder
    },
    {
      title: "Marketplace Project",
      description: "A robust e-commerce marketplace platform connecting buyers and sellers with secure transactions and product listings.",
      tags: ["Next.js", "MongoDB", "Stripe", "Firebase"],
      image: "Online marketplace with various product categories and user profiles",
      liveLink: "https://khadin.com",
      githubLink: "https://github.com/msrnayeem/marketplace-project" // Placeholder
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with beautiful visualizations, forecasts, and location-based alerts.",
      tags: ["React", "API Integration", "Charts.js", "Geolocation"],
      image: "Weather dashboard showing temperature graphs and forecast cards",
      liveLink: "#", // Placeholder
      githubLink: "#" // Placeholder
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for tracking social media performance with insights, reports, and automated scheduling.",
      tags: ["Next.js", "PostgreSQL", "Chart.js", "OAuth"],
      image: "Analytics dashboard with social media metrics and growth charts",
      liveLink: "#", // Placeholder
      githubLink: "#" // Placeholder
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator features.",
      tags: ["React", "Node.js", "Maps API", "PostgreSQL"],
      image: "Real estate website with property listings and map view",
      liveLink: "#", // Placeholder
      githubLink: "#" // Placeholder
    },
    {
      title: "Fitness Tracker",
      description: "Personal fitness tracking app with workout plans, progress monitoring, and nutrition tracking.",
      tags: ["React Native", "Express", "MongoDB", "Chart.js"],
      image: "Fitness app interface showing workout tracking and progress statistics",
      liveLink: "#", // Placeholder
      githubLink: "#" // Placeholder
    }
  ];

  const handleLinkClick = (e, linkType, projectTitle) => {
    e.preventDefault();
    const link = linkType === 'live' ? projects.find(p => p.title === projectTitle).liveLink : projects.find(p => p.title === projectTitle).githubLink;

    if (link && link !== '#') {
      window.open(link, '_blank');
    } else {
      toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">A showcase of my recent work and personal projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={project.image}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => handleLinkClick(e, 'github', project.title)}
                    className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => handleLinkClick(e, 'live', project.title)}
                    className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;