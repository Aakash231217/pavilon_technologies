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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Futuristic Background Layers */}
        {/* Main Gradient Field */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />

        {/* Subtle animated glows - smoother, not "stars" */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Clean Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="text-center">

            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Innovating the Future</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              <span className="text-white drop-shadow-2xl">We Build Software</span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue via-white to-neon-purple bg-clip-text text-transparent text-glow">
                That Drives Growth
              </span>
            </motion.h1>

            {/* Tagline Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-8 mb-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
                <span className="text-xl text-gray-300 font-light">Design</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-indigo-500/50 to-purple-500/50" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_10px_#b026ff]" />
                <span className="text-xl text-gray-300 font-light">Develop</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-purple-500/50 to-neon-blue/50" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-blue shadow-[0_0_10px_#00f3ff]" />
                <span className="text-xl text-gray-300 font-light">Deploy</span>
              </div>
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
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <a
                href="#portfolio"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
              >
                <Code size={20} />
                <span>Start a Project</span>
              </a>
            </motion.div>

            {/* Stats - Glass Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, borderColor: 'rgba(0, 243, 255, 0.3)' }}
                  className="glass-card rounded-2xl p-8 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-md group-hover:text-neon-blue transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium tracking-wider uppercase">{stat.label}</div>

                  {/* Background Shine */}
                  <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative bg-slate-950 py-8 overflow-hidden border-y border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex min-w-[200%] justify-start items-center space-x-24 px-8">
              {services.map((service, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex items-center gap-3 text-lg font-medium flex-shrink-0 text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  <span className="text-neon-blue p-2 bg-neon-blue/10 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.1)]">{service.icon}</span>
                  {service.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
