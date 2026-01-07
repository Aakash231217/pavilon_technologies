// src/components/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Zap, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamData';
import creativeImg from '../Images/pavion.jpg';

type Highlight = { icon: React.ReactNode; title: string; description: string; color: string };

const About: React.FC = () => {
  const highlights: Highlight[] = [
    { icon: <Target size={28} />, title: 'Mission Driven', description: 'Committed to delivering excellence in every project we undertake', color: 'text-neon-blue' },
    { icon: <Zap size={28} />, title: 'Fast Delivery', description: 'Quick turnaround without compromising on quality standards', color: 'text-human-warmth' },
    { icon: <Award size={28} />, title: 'Quality First', description: 'High standards in code, design, and client satisfaction', color: 'text-neon-purple' },
    { icon: <Users size={28} />, title: 'Client Focused', description: 'Your success is our priority, always collaborative', color: 'text-green-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative py-24 bg-background text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-neon-blue backdrop-blur-sm shadow-[0_0_10px_rgba(0,243,255,0.2)]">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-gradient">Pavion</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
            <p className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed">
              A passionate team dedicated to crafting innovative digital solutions that transform businesses
            </p>
          </motion.div>

          {/* Main two-column content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left block (creative development) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative rounded-2xl h-[500px] overflow-hidden glass-panel border border-white/10 group-hover:border-neon-blue/30 transition-all duration-500">
                <img
                  src={creativeImg}
                  alt="Creative Development"
                  className="w-full h-full object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />

                <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 z-30">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Creative Development
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right block (text + tech chips) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas Into
                <span className="block text-gradient mt-2">
                  Digital Reality
                </span>
              </h3>
              <p className="mb-6 leading-relaxed text-gray-400 text-lg">
                At Pavion Technologies, we believe in purposeful innovation. Our team crafts powerful
                solutions by merging deep technical expertise with creative strategy.
              </p>
              <p className="mb-8 leading-relaxed text-gray-400 text-lg">
                We specialize in end-to-end software development, transformative AI/ML projects,
                and engaging web development that drives business growth.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">Technologies We Master</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'AI/ML'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium border border-white/10 hover:border-neon-blue/50 hover:bg-neon-blue/10 hover:text-white transition-all duration-300 cursor-default hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className={`inline-flex p-3 rounded-xl bg-white/5 ${item.color} mb-5 shadow-inner border border-white/5`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section
        id="team"
        className="relative py-24 bg-black/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.05),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-neon-purple backdrop-blur-sm">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Meet Our </span>
              <span className="bg-gradient-to-r from-neon-purple to-pink-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-neon-purple to-pink-500 mx-auto mb-6" />
            <p className="text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
              Passionate experts dedicated to bringing your vision to life
            </p>
          </motion.div>

          {/* Team cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((m, index) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/team/${m.id}`} className="group block h-full">
                  <article className="relative glass-card rounded-2xl p-8 flex flex-col items-center text-center h-full hover:border-neon-purple/50">
                    {/* Avatar */}
                    <div className="relative -mt-4 z-10 mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neon-purple/30 shadow-[0_0_20px_rgba(176,38,255,0.2)] group-hover:border-neon-purple group-hover:shadow-[0_0_30px_rgba(176,38,255,0.4)] transition-all duration-300">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name & role */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">
                        {m.name}
                      </h3>
                      <div className="mt-2 inline-block px-4 py-1 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                        {m.role}
                      </div>
                    </div>

                    {/* Short bio */}
                    <p className="mt-6 text-gray-400 max-w-xl mx-auto line-clamp-3 relative z-10">
                      {m.shortBio}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-8 flex items-center gap-2 text-neon-purple text-sm font-medium relative z-10 group-hover:text-pink-400 transition-colors">
                      View Full Profile
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-900/40 hover:shadow-neon-purple/40 hover:scale-[1.02] transition-all duration-300"
            >
              Work with our team
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
