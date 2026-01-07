// src/components/AISection.tsx
import React from 'react';
import {
  Brain,
  Bot,
  Cpu,
  Network,
  Zap,
  MessageSquare,
  BarChart3,
  Shield,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Eye,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const AISection: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain size={32} />,
      title: 'AI-Powered Solutions',
      description: 'Custom AI models trained on your business data to automate workflows and enhance decision-making.',
      color: 'text-neon-purple',
      border: 'hover:border-neon-purple/50'
    },
    {
      icon: <Bot size={32} />,
      title: 'Intelligent Chatbots',
      description: 'Deploy smart conversational AI agents that understand context and provide human-like interactions.',
      color: 'text-neon-blue',
      border: 'hover:border-neon-blue/50'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Natural Language Processing',
      description: 'Extract insights from text, automate document processing, and enable semantic search capabilities.',
      color: 'text-pink-400',
      border: 'hover:border-pink-500/50'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to forecast trends, optimize operations, and make data-driven decisions.',
      color: 'text-human-warmth',
      border: 'hover:border-human-warmth/50'
    },
  ];

  const aiCapabilities = [
    { icon: <Cpu size={20} />, text: 'LLM Integration (GPT, Claude, Gemini)' },
    { icon: <Network size={20} />, text: 'RAG & Knowledge Bases' },
    { icon: <Workflow size={20} />, text: 'AI Workflow Automation' },
    { icon: <Shield size={20} />, text: 'Enterprise Security & Compliance' },
    { icon: <Eye size={20} />, text: 'Computer Vision & Image AI' },
    { icon: <Zap size={20} />, text: 'Real-time AI Processing' },
  ];

  return (
    <section id="ai" className="relative py-24 bg-background overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neon-purple/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-neon-purple text-sm font-medium mb-6 shadow-[0_0_15px_rgba(176,38,255,0.2)]">
            <Sparkles size={14} />
            Powered by Advanced AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Artificial Intelligence
            <span className="block mt-2 text-gradient">
              That Transforms Business
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI and Machine Learning to automate processes,
            gain insights, and create intelligent experiences that drive growth.
          </p>
        </motion.div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card rounded-xl p-8 border border-white/5 ${service.border} transition-all duration-300 group`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-white/5 ${service.color} mb-6 border border-white/5 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AI Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-full blur-[100px]" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left side - Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Ready AI
                <span className="text-neon-blue"> Capabilities</span>
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg opacity-90">
                From proof-of-concept to production deployment, we build AI solutions that scale
                with your business needs while maintaining security and compliance standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {aiCapabilities.map((cap, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-200 cursor-default"
                  >
                    <div className="text-neon-purple">{cap.icon}</div>
                    <span className="text-gray-200 text-sm font-medium">{cap.text}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-gradient-to-r from-neon-blue to-indigo-600 text-white rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 font-bold"
              >
                Start Your AI Journey
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right side - Visual */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Central brain pulse */}
                <div className="absolute inset-0 bg-neon-purple/20 rounded-full animate-ping opacity-20" />
                <div className="absolute inset-0 bg-neon-blue/10 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }} />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(176,38,255,0.15)] relative z-10">
                    <Brain size={80} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  </div>
                </div>

                {/* Satellite Nodes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 p-3 rounded-xl border border-neon-blue/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <Bot size={24} className="text-neon-blue" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 p-3 rounded-xl border border-neon-purple/50 shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                    <Workflow size={24} className="text-neon-purple" />
                  </div>
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-slate-900 p-3 rounded-xl border border-human-warmth/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <Shield size={24} className="text-human-warmth" />
                  </div>
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-slate-900 p-3 rounded-xl border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <Zap size={24} className="text-green-500" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Use Cases */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest font-semibold flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-white/10"></span>
            AI Applications We Build
            <span className="w-12 h-px bg-white/10"></span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Customer Service Bots',
              'Document Intelligence',
              'Recommendation Engines',
              'Fraud Detection',
              'Voice Assistants',
              'Content Generation',
              'Image Recognition',
              'Process Automation',
              'Sentiment Analysis',
              'Anomaly Detection',
            ].map((useCase, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:border-neon-blue/30 hover:bg-neon-blue/5 hover:text-white transition-all duration-200 cursor-default"
              >
                <CheckCircle2 size={14} className="text-neon-blue" />
                {useCase}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
