// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, User, FileCheck, Lightbulb, Link, Building2, Smartphone, Cloud, Database, Zap, Globe } from 'lucide-react';

const services = [
  { icon: <User size={24} />, title: 'AI & ML' },
  { icon: <FileCheck size={24} />, title: 'QA & Software Testing' },
  { icon: <Lightbulb size={24} />, title: 'IT Consulting & Strategy' },
  { icon: <Link size={24} />, title: 'API & System Integrations' },
  { icon: <Building2 size={24} />, title: 'CRM & LMS' },
  { icon: <Smartphone size={24} />, title: 'App Development' },
  { icon: <Cloud size={24} />, title: 'Cloud Solutions' },
  { icon: <Database size={24} />, title: 'Data Analytics' },
  { icon: <Zap size={24} />, title: 'DevOps & Automation' },
  { icon: <Globe size={24} />, title: 'Web Design & UX' },
  { icon: <Globe size={24} />, title: 'ATS & PMS' },
];

const Hero: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="text-center">
           

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">We Build Software</span>
              <br />
              <span className="text-indigo-400">
                That Drives Growth
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-6 mb-8"
            >
              <span className="text-lg md:text-xl font-medium text-gray-400">Design</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-lg md:text-xl font-medium text-gray-400">Develop</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-lg md:text-xl font-medium text-gray-400">Deploy</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Creating exceptional digital experiences through innovative software
              solutions, cutting-edge AI, and stunning web development that drives
              your business forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                <span>View Our Work</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg font-semibold border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all duration-200"
              >
                <Code size={20} />
                <span>Start a Project</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors duration-200"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-20"
            >
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Technologies We Master</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Next.js'].map((tech, index) => (
                  <span
                    key={index}
                    className="text-gray-400 text-lg font-semibold hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 py-6 overflow-hidden border-y border-white/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of items */}
          <div className="flex min-w-[200%] justify-start items-center space-x-32 px-8 text-white">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-lg font-medium flex-shrink-0 text-gray-300"
              >
                <span className="text-indigo-400">{service.icon}</span>
                {service.title}
              </div>
            ))}
          </div>
          {/* Second set of items for seamless loop */}
          <div className="flex min-w-[200%] justify-start items-center space-x-32 px-8 text-white">
            {services.map((service, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center gap-3 text-lg font-medium flex-shrink-0 text-gray-300"
              >
                <span className="text-pink-400">{service.icon}</span>
                {service.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default Hero;
