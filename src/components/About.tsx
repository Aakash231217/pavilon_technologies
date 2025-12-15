// src/components/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Zap, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamData';
import creativeImg from '../Images/pavion.jpg';

type Highlight = { icon: React.ReactNode; title: string; description: string; gradient: string };

const About: React.FC = () => {
  const highlights: Highlight[] = [
    { icon: <Target size={28} />, title: 'Mission Driven', description: 'Committed to delivering excellence in every project we undertake', gradient: 'from-indigo-500 to-blue-600' },
    { icon: <Zap size={28} />, title: 'Fast Delivery', description: 'Quick turnaround without compromising on quality standards', gradient: 'from-amber-500 to-orange-600' },
    { icon: <Award size={28} />, title: 'Quality First', description: 'High standards in code, design, and client satisfaction', gradient: 'from-pink-500 to-rose-600' },
    { icon: <Users size={28} />, title: 'Client Focused', description: 'Your success is our priority, always collaborative', gradient: 'from-emerald-500 to-teal-600' },
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
      <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-indigo-300">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Pavion</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl max-w-3xl mx-auto text-gray-400">
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
              <div className="relative rounded-3xl h-[500px] overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 rounded-3xl p-[2px]">
                  <div className="absolute inset-[2px] bg-slate-900 rounded-3xl overflow-hidden">
                    <img
                      src={creativeImg}
                      alt="Creative Development"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent mb-4"
                      >
                        Creative Development
                      </motion.div>
                      <p className="text-gray-300 text-lg">
                        Building Digital Excellence Since 2019
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              
            </motion.div>

            {/* Right block (text + tech chips) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
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
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Technologies We Master</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'AI/ML'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-5 py-2.5 bg-white/5 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </motion.a>
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
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TEAM SECTION (Clickable Cards) --- */}
      <section
        id="team"
        className="relative py-24 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-32 -top-20 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[150px]" />
          <div className="absolute right-0 -bottom-32 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-pink-300">
              The People Behind Success
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Meet Our <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-400 mt-3 max-w-3xl mx-auto">
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
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Link to={`/team/${m.id}`} className="group block">
                  <article className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer h-full overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Left vertical accent bar */}
                    <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-xl bg-gradient-to-b from-indigo-500 via-pink-500 to-amber-500 opacity-80 group-hover:w-1.5 transition-all duration-300" />

                    {/* Avatar */}
                    <div className="relative z-10 -mt-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/10 group-hover:ring-pink-500/50 transition-all duration-300">
                          <img
                            src={m.img}
                            alt={m.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name & role */}
                    <div className="mt-6 z-10">
                      <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {m.name}
                      </h3>
                      <div className="mt-3 inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-pink-500/20 text-pink-300 border border-pink-500/20">
                        {m.role}
                      </div>
                    </div>

                    {/* Short bio */}
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto line-clamp-3 group-hover:text-gray-300 transition-colors z-10">
                      {m.shortBio}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-6 flex items-center gap-2 text-pink-400 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                      View Full Profile
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Bottom accent strip */}
                    <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />
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
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Work with our team
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
