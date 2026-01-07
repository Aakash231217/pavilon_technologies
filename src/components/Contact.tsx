// src/components/Contact.tsx
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SubmitStatus = 'loading' | 'success' | 'error' | null;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FRONTEND_API_KEY = 'my-secret-key-123';
const API_BASE_URL = 'https://pavilon-technologies-tqaq.onrender.com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': FRONTEND_API_KEY,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Contact API error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch error during form submission:', error);
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'Contact@paviontechnologies.com',
      color: 'text-neon-blue',
      bg: 'bg-neon-blue/10'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7455975301 , +91 9528991434',
      color: 'text-neon-purple',
      bg: 'bg-neon-purple/10'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: '1st Floor, Plus Offices, Landmark Cyber Park, Sector 67, Gurugam, Haryana, India',
      color: 'text-human-warmth',
      bg: 'bg-human-warmth/10'
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: '#', color: 'hover:text-white' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/pavion-technologies-565b25392', color: 'hover:text-blue-400' },
    { icon: <Twitter size={20} />, url: '#', color: 'hover:text-sky-400' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-human-warmth text-sm font-medium mb-6">
            Ready to Transform Your Business?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your <span className="text-gradient">Project</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-human-warmth to-neon-purple mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Partner with us to build innovative digital solutions that drive your business forward
          </p>
        </motion.div>

        {/* Submission Status Message */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-8 p-4 rounded-xl font-medium flex items-center gap-3 backdrop-blur-md border ${submitStatus === 'success'
                  ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/20 border-red-500/30 text-red-300'
                }`}
            >
              {submitStatus === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
              {submitStatus === 'success' ? 'Thank you for your message! It has been successfully sent.' : 'Oops! Something went wrong. Please try again.'}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Start Your Digital Journey</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg opacity-90">
              Ready to elevate your business with cutting-edge technology? We're here to help you build
              custom software solutions, AI-powered applications, and scalable platforms.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-2xl glass-card hover:border-white/20 transition-all duration-300"
                >
                  <div className={`p-4 rounded-xl ${info.bg} ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{info.title}</div>
                    <div className="text-gray-400 leading-relaxed">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2 text-sm ml-1">
                  Project Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                  placeholder="e.g., Web Development, Mobile App, AI Solution"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm ml-1">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-indigo-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {submitStatus === 'loading' ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send size={20} /> Start Your Project
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
