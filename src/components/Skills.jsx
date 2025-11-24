import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  const skillCategories = data && data.length ? data : [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript/TypeScript', 'HTML/CSS', 'TailwindCSS', 'Vue.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'PHP', 'Laravel', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'DevOps/Tools',
      skills: ['Git/GitHub', 'Docker (Basic)', 'CI/CD', 'cPanel', 'VPS Setup', 'AWS', 'Firebase', 'Agile/Scrum'],
    },
    {
      title: 'Integrations',
      skills: ['API Integration', 'Stripe', 'bKash', 'Upay', 'AmarPay', 'UddoktaPay', 'Pathao', 'RedX', 'Steadfast'],
    },
  ];

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Skills & Expertise</h2>
          <p className="text-gray-400 text-sm">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-4 rounded-lg bg-slate-800/50 border border-slate-700"
            >
              <h3 className="text-lg font-semibold text-cyan-300 mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-200">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;