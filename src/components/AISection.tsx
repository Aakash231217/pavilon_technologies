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
  Eye
} from 'lucide-react';

const AISection: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain size={32} />,
      title: 'AI-Powered Solutions',
      description: 'Custom AI models trained on your business data to automate workflows and enhance decision-making.',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      icon: <Bot size={32} />,
      title: 'Intelligent Chatbots',
      description: 'Deploy smart conversational AI agents that understand context and provide human-like interactions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Natural Language Processing',
      description: 'Extract insights from text, automate document processing, and enable semantic search capabilities.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to forecast trends, optimize operations, and make data-driven decisions.',
      gradient: 'from-amber-500 to-orange-500',
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
    <section id="ai" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6">
            Powered by Advanced AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Artificial Intelligence
            <span className="block mt-2 text-indigo-400">
              That Transforms Business
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI and Machine Learning to automate processes, 
            gain insights, and create intelligent experiences that drive growth.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors duration-200"
            >
              <div className="inline-flex p-3 rounded-lg bg-indigo-500/10 text-indigo-400 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* AI Capabilities Section */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Ready AI
                <span className="text-indigo-400"> Capabilities</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                From proof-of-concept to production deployment, we build AI solutions that scale 
                with your business needs while maintaining security and compliance standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {aiCapabilities.map((cap, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-200"
                  >
                    <div className="text-indigo-400">{cap.icon}</div>
                    <span className="text-gray-300 text-sm font-medium">{cap.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
              >
                Start Your AI Journey
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right side - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Simple static visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-indigo-500/10 p-12 rounded-2xl border border-indigo-500/20">
                    <Brain size={80} className="text-indigo-400" />
                  </div>
                </div>

                {/* Corner icons */}
                <div className="absolute top-4 left-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <Bot size={20} className="text-indigo-400" />
                </div>
                <div className="absolute top-4 right-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <MessageSquare size={20} className="text-indigo-400" />
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <Network size={20} className="text-indigo-400" />
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-800 p-3 rounded-lg border border-slate-700">
                  <Cpu size={20} className="text-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Use Cases */}
        <div className="mt-16">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider font-medium">
            AI Applications We Build
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 text-sm hover:border-slate-600 transition-colors duration-200 cursor-default"
              >
                <CheckCircle2 size={14} className="text-indigo-400" />
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
