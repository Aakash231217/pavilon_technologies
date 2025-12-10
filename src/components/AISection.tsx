import React from 'react';
import { 
  Brain, 
  Sparkles, 
  Bot, 
  Cpu, 
  Network, 
  Zap, 
  MessageSquare, 
  BarChart3,
  Shield,
  Workflow,
  ArrowRight,
  CheckCircle2
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
    { icon: <Sparkles size={20} />, text: 'Computer Vision & Image AI' },
    { icon: <Zap size={20} />, text: 'Real-time AI Processing' },
  ];

  return (
    <section id="ai" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Powered by Advanced AI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Artificial Intelligence
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              That Transforms Business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI and Machine Learning to automate processes, 
            gain insights, and create intelligent experiences that drive growth.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Capabilities Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Ready AI
                <span className="text-purple-400"> Capabilities</span>
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From proof-of-concept to production deployment, we build AI solutions that scale 
                with your business needs while maintaining security and compliance standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {aiCapabilities.map((cap, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="text-purple-400">{cap.icon}</div>
                    <span className="text-gray-300 text-sm font-medium">{cap.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 font-medium"
              >
                Start Your AI Journey
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              {/* AI Brain Animation */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Outer ring */}
                <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-blue-500/30 rounded-full animate-spin-reverse"></div>
                <div className="absolute inset-8 border border-pink-500/30 rounded-full animate-spin-slow"></div>
                
                {/* Center brain */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-full shadow-2xl">
                      <Brain size={64} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-blue-500 p-2 rounded-full shadow-lg animate-bounce">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 bg-pink-500 p-2 rounded-full shadow-lg animate-bounce delay-200">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-purple-500 p-2 rounded-full shadow-lg animate-bounce delay-400">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-indigo-500 p-2 rounded-full shadow-lg animate-bounce delay-600">
                  <Cpu size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Use Cases Marquee */}
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 cursor-default"
              >
                <CheckCircle2 size={14} className="text-purple-400" />
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AISection;
