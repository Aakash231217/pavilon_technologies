// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, User, FileCheck, Lightbulb, Link, Building2, Smartphone, Cloud, Database, Zap, Globe } from 'lucide-react';

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
    { value: '50+', label: 'Projects Delivered', color: 'from-blue-500 to-indigo-600' },
    { value: '30+', label: 'Happy Clients', color: 'from-pink-500 to-rose-600' },
    { value: '100%', label: 'Client Satisfaction', color: 'from-emerald-500 to-teal-600' },
  ];

  const floatingIcons = [
    { icon: '⚛️', delay: 0, position: 'top-20 left-[10%]' },
    { icon: '🚀', delay: 0.5, position: 'top-40 right-[15%]' },
    { icon: '💡', delay: 1, position: 'bottom-32 left-[20%]' },
    { icon: '⚡', delay: 1.5, position: 'bottom-48 right-[10%]' },
    { icon: '🎯', delay: 2, position: 'top-60 left-[5%]' },
  ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
      >
        {/* 3D Background disabled to remove circular shapes */}
        {/* <Suspense fallback={null}>
          <Scene3D variant="hero" />
        </Suspense> */}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

        {/* Floating emoji icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} text-4xl hidden lg:block`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -20, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
            >
              <Sparkles size={16} className="text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Transforming Ideas Into Reality
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">We Build</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className="text-2xl md:text-4xl font-bold text-indigo-400">Code</span>
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <span className="text-2xl md:text-4xl font-bold text-pink-400">Create</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-2xl md:text-4xl font-bold text-amber-400">Scale</span>
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
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.3)] hover:scale-105"
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md text-white rounded-full font-semibold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <Code size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Start a Project</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
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
