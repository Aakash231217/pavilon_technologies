// src/components/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { teamMembers } from '../data/teamData';
import creativeImg from '../Images/pavion.jpg';

type Highlight = { number: string; title: string; description: string };

const About: React.FC = () => {
  const highlights: Highlight[] = [
    { number: '01', title: 'Strategy', description: 'We dive deep into your goals to create tailored digital strategies' },
    { number: '02', title: 'Design', description: 'Crafting intuitive interfaces that users love' },
    { number: '03', title: 'Development', description: 'Building robust, scalable solutions with cutting-edge tech' },
    { number: '04', title: 'Launch', description: 'Deploying with precision and providing ongoing support' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <>
      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative py-32 bg-[#0a0a0f] text-white overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/20 to-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/15 to-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mb-20"
          >
            <span className="text-[12px] tracking-[0.3em] uppercase text-indigo-400 font-medium">
              About Us
            </span>
          </motion.div>

          {/* Main two-column content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
            {/* Left - Large Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] mb-8">
                <span className="text-white">We help brands create</span>
                <span className="block text-gradient-accent mt-2">
                  digital experiences
                </span>
                <span className="block text-gray-400 text-3xl md:text-4xl lg:text-5xl mt-4 font-normal">
                  that connect
                </span>
              </h2>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="lg:pt-8"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                Pavion is a digital production studio that brings your ideas to life through 
                visually captivating designs and interactive experiences. We push boundaries 
                by solving complex problems with tailored solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 font-light">
                Our commitment goes beyond trends—it's about crafting digital journeys 
                that resonate uniquely and leave a lasting impact.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'AI/ML'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-[13px] text-gray-400 border border-white/10 rounded-full hover:border-indigo-400/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-500"
                    data-cursor-hover
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#services"
                data-cursor-hover
                className="group inline-flex items-center gap-3 text-white hover:text-indigo-400 transition-colors duration-300"
              >
                <span className="relative">
                  Explore Services
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/30 group-hover:bg-indigo-400 transition-colors duration-300" />
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Image Section - Immersive */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative mb-32"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
              <img
                src={creativeImg}
                alt="Creative Development"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="text-[11px] tracking-[0.3em] uppercase text-gray-300 mb-4 block">Our Approach</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
                    Creative Development
                    <span className="block text-gray-400 text-xl md:text-2xl mt-2 font-normal">
                      Where technology meets artistry
                    </span>
                  </h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Process Steps - Visible Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] rounded-2xl overflow-hidden"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0a0a0f] p-8 md:p-10 group hover:bg-white/[0.04] transition-all duration-500"
                data-cursor-hover
              >
                <span className="text-5xl font-bold text-indigo-500/40 group-hover:text-indigo-400/60 transition-colors duration-500 block mb-6">
                  {item.number}
                </span>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient-accent transition-all duration-500">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section
        id="team"
        className="relative py-32 bg-[#0a0a0f] overflow-hidden"
      >
        {/* Gradient accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/15 to-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="text-[12px] tracking-[0.3em] uppercase text-purple-400 font-medium block mb-4">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                The People Behind
                <span className="block text-gradient-accent">The Magic</span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-gray-400 max-w-md font-light"
            >
              Passionate experts dedicated to bringing your vision to life with creativity and precision.
            </motion.p>
          </div>

          {/* Team cards - More Visible Design */}
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((m, index) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link to={`/team/${m.id}`} className="group block" data-cursor-hover>
                  <article className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex items-center gap-6 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-indigo-400/50 transition-all duration-500">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-all duration-500 mb-1">
                        {m.name}
                      </h3>
                      <span className="text-sm text-indigo-400 block mb-3">
                        {m.role}
                      </span>
                      <p className="text-sm text-gray-400 line-clamp-2 font-light">
                        {m.shortBio}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowRight size={20} className="text-indigo-400" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              data-cursor-hover
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-500"
            >
              Work with our team
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
