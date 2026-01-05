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
      <section id="about" className="relative py-24 bg-slate-950 text-white overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-300">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Pavion
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-gray-400">
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
              <div className="relative rounded-2xl h-[500px] overflow-hidden border border-slate-800">
                <img
                  src={creativeImg}
                  alt="Creative Development"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-4">
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transforming Ideas Into
                <span className="block text-indigo-400">
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
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-slate-600 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight size={18} />
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
                className="group bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors duration-200"
              >
                <div className="inline-flex p-3 rounded-lg bg-indigo-500/10 text-indigo-400 mb-5">
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

      {/* --- TEAM SECTION (Clickable Cards) --- */}
      <section
        id="team"
        className="relative py-24 bg-slate-900 text-white overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-300">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Meet Our Team
            </h2>
            <div className="w-16 h-0.5 bg-indigo-500 mx-auto mb-6" />
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
                <Link to={`/team/${m.id}`} className="group block">
                  <article className="bg-slate-800/50 rounded-xl p-8 flex flex-col items-center text-center border border-slate-700 hover:border-slate-600 transition-colors duration-200 cursor-pointer h-full">
                    {/* Avatar */}
                    <div className="relative -mt-4">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-700">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name & role */}
                    <div className="mt-5">
                      <h3 className="text-xl font-bold text-white">
                        {m.name}
                      </h3>
                      <div className="mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {m.role}
                      </div>
                    </div>

                    {/* Short bio */}
                    <p className="mt-4 text-gray-400 max-w-xl mx-auto line-clamp-3">
                      {m.shortBio}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-5 flex items-center gap-2 text-indigo-400 text-sm font-medium">
                      View Full Profile
                      <ArrowRight size={16} />
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              Work with our team
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
