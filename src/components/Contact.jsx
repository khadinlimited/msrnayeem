import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = ({ personal }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showPhone, setShowPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Allow injecting contact info via props; fall back to default values
  const contactInfo = (typeof personal !== 'undefined' && personal) ? [
    {
      icon: Mail,
      title: 'Email',
      value: personal.email || 'msrnayeem@gmail.com',
      link: personal.email ? `mailto:${personal.email}` : 'mailto:msrnayeem@gmail.com',
      isPhone: false,
    },
    {
      icon: Phone,
      title: 'WhatsApp/Phone',
      value: personal.phone || '+8801770848793',
      link: personal.phone ? `https://wa.me/${personal.phone.replace(/\D/g, '')}` : 'https://wa.me/8801770848793',
      isPhone: true,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personal.location || 'Dinajpur, Bangladesh',
      link: null,
      isPhone: false,
    }
  ] : [
    {
      icon: Mail,
      title: 'Email',
      value: 'msrnayeem@gmail.com',
      link: 'mailto:msrnayeem@gmail.com',
      isPhone: false
    },
    {
      icon: Phone,
      title: 'WhatsApp/Phone',
      value: '+8801770848793',
      link: 'https://wa.me/8801770848793',
      isPhone: true
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dinajpur, Bangladesh',
      link: null,
      isPhone: false
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Let's discuss your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                      {info.isPhone ? (
                        <div className="flex items-center gap-2">
                          {showPhone ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-medium hover:text-cyan-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-white font-medium blur-[4px] select-none">
                              +880 17 XXXX XXXX
                            </span>
                          )}
                          <button
                            onClick={() => setShowPhone(!showPhone)}
                            className="ml-auto text-gray-400 hover:text-cyan-400"
                            type="button"
                            aria-label={showPhone ? "Hide phone number" : "Show phone number"}
                          >
                            {showPhone ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      ) : info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through the contact form or any of the channels listed above.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-8 border-t border-slate-700 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personal?.name || 'Shahidur Rahman Nayeem'}. Built with React & TailwindCSS
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;