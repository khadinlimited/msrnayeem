import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "TailwindCSS", level: 90 },
        { name: "Vue.js", level: 75 } // Retaining existing skill for completeness
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 85 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "DevOps/Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker (Basic)", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "cPanel", level: 70 },
        { name: "VPS Setup", level: 70 },
        { name: "AWS", level: 70 }, // Retaining existing skill for completeness
        { name: "Firebase", level: 85 }, // Retaining existing skill for completeness
        { name: "Agile/Scrum", level: 85 } // Retaining existing skill for completeness
      ]
    },
    {
      title: "Integrations",
      skills: [
        { name: "API Integration", level: 90 },
        { name: "Stripe", level: 85 },
        { name: "bKash", level: 80 },
        { name: "Upay", level: 80 },
        { name: "AmarPay", level: 80 },
        { name: "UddoktaPay", level: 80 },
        { name: "Pathao Courier", level: 75 },
        { name: "RedX Courier", level: 75 },
        { name: "Steadfast Courier", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid columns */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
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