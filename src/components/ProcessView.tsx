// src/components/ProcessView.tsx
import React, { useEffect } from 'react';
import {
  Search,
  LayoutTemplate,
  Code2,
  ShieldCheck,
  Rocket,
  GitBranch,
  ArrowLeft
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProcessView: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processes: ProcessStep[] = [
    {
      id: 1,
      title: 'Requirement Analysis',
      description: 'We begin by deep-diving into your business goals, user needs, and technical requirements to build a solid foundation.',
      icon: <Search size={24} />,
      color: 'text-neon-blue'
    },
    {
      id: 2,
      title: 'System Architecture Design',
      description: 'Architecting scalable, secure, and high-performance systems using modern patterns like Microservices or Serverless.',
      icon: <LayoutTemplate size={24} />,
      color: 'text-neon-purple'
    },
    {
      id: 3,
      title: 'Agile Development Iterations',
      description: 'Writing clean, maintainable code in 2-week sprints, ensuring rapid delivery and continuous feedback integration.',
      icon: <Code2 size={24} />,
      color: 'text-pink-400'
    },
    {
      id: 4,
      title: 'Rigorous QA & Testing',
      description: 'Automated and manual testing protocols to ensure 99.9% crash-free sessions and robust security compliance.',
      icon: <ShieldCheck size={24} />,
      color: 'text-human-warmth'
    },
    {
      id: 5,
      title: 'Deployment & Support',
      description: 'Seamless CI/CD deployment to cloud infrastructure followed by 24/7 monitoring and optimization.',
      icon: <Rocket size={24} />,
      color: 'text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-gray-100 font-sans py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />

      {/* Navigation Back Button */}
      {onBack && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </motion.div>
      )}

      {/* --- Header --- */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-blue text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <GitBranch size={16} />
          Workflow
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Engineering <span className="text-gradient">Excellence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Our systematic approach transforms complex requirements into robust, scalable software solutions.
        </motion.p>
      </div>

      {/* --- Process Timeline --- */}
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Connecting Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-pink-500 blur-[2px] -translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        />

        <div className="space-y-20 relative">
          {processes.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >

                <div className={`flex md:contents ${!isEven && 'flex-row-reverse md:flex-row'}`}>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[45%] group relative ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>

                    <div className="relative glass-card p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                      {/* Step Number */}
                      <div className={`absolute -top-4 ${isEven ? 'right-8' : 'left-8'} text-6xl font-black text-white/5 select-none z-0`}>
                        0{step.id}
                      </div>

                      <div className="relative z-10">
                        <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors flex items-center gap-3 ${isEven ? 'md:justify-end' : ''}`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center group hover:scale-110 transition-transform duration-300 hover:border-neon-blue">
                      <div className={`${step.color}`}>
                        {step.icon}
                      </div>
                    </div>
                    {/* Glowing Ring */}
                    <div className="absolute w-20 h-20 bg-neon-blue/20 rounded-full animate-pulse blur-md z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Empty Space for alignment */}
                  <div className="hidden md:block md:w-[45%]" />

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessView;
