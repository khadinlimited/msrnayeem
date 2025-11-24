import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "Frontend to backend expertise"
    },
    {
      icon: Globe,
      title: "Modern Web",
      description: "Latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              alt="Full-stack developer Shahidur Rahman Nayeem working on laptop"
             src="https://images.unsplash.com/photo-1634835855106-f4f0dc8279ca" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi! I'm Shahidur Rahman Nayeem, a passionate full-stack developer with over 5 years of experience building web applications. 
              I specialize in creating seamless user experiences with modern technologies like React, Node.js, and cloud platforms. Based in Dinajpur, Bangladesh.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I love solving complex problems and transforming ideas into elegant, functional solutions. 
              When I'm not coding, you'll find me contributing to open-source projects or learning about the latest tech trends.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;