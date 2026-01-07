// src/components/Services.tsx
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Brain,
  X,
  CheckCircle2,
  ArrowRightCircle,
  Code,
  Box,
  SquareStack,
  GitFork,
  Link2,
  Cpu,
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string[];
  color: 'blue' | 'purple' | 'cyan' | 'amber'; // Updated palette
  features: string[];
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const services: Service[] = [
    {
      icon: <Code2 size={40} />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with clean, maintainable code.',
      longDescription: 'We don\'t just write code; we engineer robust, scalable, and future-proof software solutions specifically designed to address your unique business challenges.',
      benefits: ['Full ownership of source code', 'Scalable architecture', 'Seamless integration', 'Operational efficiency'],
      process: ['Discovery', 'Architecture Design', 'Agile Development', 'QA & Testing', 'Deployment'],
      color: 'blue',
      features: ['Desktop Applications', 'System Integration', 'API Development', 'Automation Tools'],
    },
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      longDescription: 'We craft visually stunning, highly interactive, and mobile-responsive web applications that engage users and convert visitors.',
      benefits: ['Lightning-fast speeds', 'Mobile-first design', 'SEO-optimized', 'Secure infrastructure'],
      process: ['UI/UX Prototyping', 'Frontend & Backend', 'Content Integration', 'Optimization', 'Go-Live'],
      color: 'cyan',
      features: ['React Applications', 'E-commerce Sites', 'CMS Development', 'PWAs'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly on iOS and Android.',
      longDescription: 'Reach your customers wherever they are with powerful, intuitive mobile applications built with React Native.',
      benefits: ['Faster time-to-market', 'Cost-effective', 'Native-like performance', 'Unified codebase'],
      process: ['Mobile Strategy', 'UI/UX Design', 'Cross-Platform Dev', 'App Store Submission', 'Maintenance'],
      color: 'amber',
      features: ['React Native Apps', 'Hybrid Solutions', 'App Store Deployment', 'Mobile UI/UX'],
    },
    {
      icon: <Database size={40} />,
      title: 'Database Solutions',
      description: 'Robust database design and management for optimal data handling and performance.',
      longDescription: 'Efficient structure, secure storage, and instant retrieval for your business data.',
      benefits: ['Optimized query performance', 'Enhanced security', 'Scalable storage', 'Reliable backups'],
      process: ['Data Modeling', 'Migration Strategy', 'Performance Tuning', 'Security Ops', 'Monitoring'],
      color: 'blue',
      features: ['Database Design', 'SQL Optimization', 'Data Migration', 'Cloud Databases'],
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
      longDescription: 'Embrace the power and flexibility of the cloud with AWS and Azure solutions.',
      benefits: ['Reduced costs', 'High availability', 'Automated CI/CD', 'Global scalability'],
      process: ['Readiness Assessment', 'Migration Planning', 'IaC Setup', 'DevOps Pipeline', 'Optimization'],
      color: 'cyan',
      features: ['AWS/Azure Setup', 'DevOps Pipeline', 'Server Management', 'Cloud Migration'],
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
      longDescription: 'Great technology needs great design. We create interfaces that are visually appealing and highly intuitive.',
      benefits: ['Increased engagement', 'Lower support costs', 'Stronger brand', 'Data-driven design'],
      process: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
      color: 'amber',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Brand Identity'],
    },
    {
      icon: <Brain size={40} />,
      title: 'AI & Machine Learning',
      description: 'Intelligent AI solutions powered by cutting-edge LLMs, chatbots, and ML models.',
      longDescription: 'Transform your business with AI. We build custom solutions including chatbots, NLP systems, and predictive analytics.',
      benefits: ['Automated support', 'Data-driven insights', 'Reduced costs', 'Intelligent processing'],
      process: ['AI Strategy', 'Data Collection', 'Model Development', 'Integration', 'Improvement'],
      color: 'purple',
      features: ['LLM Integration', 'Custom Chatbots', 'RAG Systems', 'Predictive Analytics'],
    },
    {
      icon: <Link2 size={40} />,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications and smart contracts for the next generation of the web.',
      longDescription: 'We develop secure, transparent, and decentralized applications leveraging blockchain power.',
      benefits: ['Enhanced security', 'Immutable transactions', 'Reduced intermediaries', 'Global accessibility'],
      process: ['Feasibility Analysis', 'Smart Contracts', 'Security Audit', 'DApp Deployment', 'Maintenance'],
      color: 'blue',
      features: ['Smart Contracts', 'NFT Marketplaces', 'DeFi Applications', 'Wallet Integration'],
    },
    {
      icon: <Cpu size={40} />,
      title: 'DevOps Solutions',
      description: 'Streamlined CI/CD pipelines and infrastructure automation for faster, reliable deployments.',
      longDescription: 'Accelerate your development lifecycle with comprehensive DevOps solutions.',
      benefits: ['Faster releases', 'Improved collaboration', 'Automated testing', 'System reliability'],
      process: ['Infrastructure Assessment', 'CI/CD Setup', 'Containerization', 'Monitoring', 'Optimization'],
      color: 'cyan',
      features: ['CI/CD Automation', 'Docker & K8s', 'Terraform', 'Monitoring'],
    },
  ];

  const colorMap = {
    blue: {
      bg: 'bg-indigo-900',
      text: 'text-indigo-400',
      border: 'border-indigo-500/30',
      gradient: 'from-indigo-600 to-blue-600',
      iconBg: 'bg-indigo-500/10',
      glow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]'
    },
    purple: {
      bg: 'bg-purple-900',
      text: 'text-neon-purple',
      border: 'border-neon-purple/30',
      gradient: 'from-purple-600 to-neon-purple',
      iconBg: 'bg-neon-purple/10',
      glow: 'shadow-[0_0_15px_rgba(176,38,255,0.3)]'
    },
    cyan: {
      bg: 'bg-cyan-900',
      text: 'text-neon-blue',
      border: 'border-neon-blue/30',
      gradient: 'from-cyan-600 to-neon-blue',
      iconBg: 'bg-neon-blue/10',
      glow: 'shadow-[0_0_15px_rgba(6,182,212,0.3)]'
    },
    amber: {
      bg: 'bg-amber-900',
      text: 'text-human-warmth',
      border: 'border-human-warmth/30',
      gradient: 'from-orange-600 to-human-warmth',
      iconBg: 'bg-human-warmth/10',
      glow: 'shadow-[0_0_15px_rgba(245,158,11,0.3)]'
    },
  };

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Tech Stack with Icons
  const techStack = [
    { icon: <Code size={30} />, name: 'React.js' },
    { icon: <Code size={30} />, name: 'Next.js' },
    { icon: <Code size={30} />, name: 'Vue.js' },
    { icon: <Box size={30} />, name: 'Three.js' },
    { icon: <SquareStack size={30} />, name: 'Tailwind' },
    { icon: <GitFork size={30} />, name: 'Redux' },
    { icon: <Brain size={30} />, name: 'TensorFlow' },
    { icon: <Cloud size={30} />, name: 'AWS' },
  ];

  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-neon-blue backdrop-blur-sm shadow-glow">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent text-glow">
              Services
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 shadow-glow" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Because in today's market, "good enough" isn't good enough. We architect solutions that drive measurable results.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const theme = colorMap[service.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-2xl p-8 hover:${theme.border} hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer group`}
                onClick={() => openModal(service)}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${theme.iconBg} ${theme.text} mb-6 shadow-inner border border-white/5`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <div className={`flex items-center ${theme.text} font-medium group-hover:brightness-125 transition-all`}>
                  Learn More
                  <ArrowRightCircle size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technologies We Master</h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
            >
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: '#00f3ff' }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default"
                >
                  <span className="text-neon-blue">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Need a Custom Solution?
              </h3>
              <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect solution together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-full font-bold shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
              >
                Start a Project
                <ArrowRightCircle size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center items-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0f172a] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-20 transition-all"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              {(() => {
                const theme = colorMap[selectedService.color];
                return (
                  <div className="flex flex-col md:flex-row min-h-full">
                    {/* Left Sidebar */}
                    <div className={`md:w-1/3 p-10 bg-gradient-to-br ${theme.gradient} text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                      <div className="relative z-10">
                        <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-md mb-6 shadow-xl">
                          {selectedService.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{selectedService.title}</h3>
                        <p className="opacity-90">{selectedService.description}</p>
                      </div>

                      <div className="mt-12 relative z-10 hidden md:block">
                        <h4 className="font-semibold uppercase tracking-wider text-sm opacity-80 mb-4">Features</h4>
                        <ul className="space-y-3">
                          {selectedService.features.map((f, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <CheckCircle2 size={16} className="mr-2 opacity-80" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-2/3 p-10 bg-slate-950/50">
                      <h4 className="text-2xl font-bold text-white mb-4">Overview</h4>
                      <p className="text-gray-400 mb-8 leading-relaxed">{selectedService.longDescription}</p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className={`text-lg font-bold mb-4 ${theme.text}`}>Key Benefits</h5>
                          <ul className="space-y-3">
                            {selectedService.benefits.map((b, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle2 size={18} className={`mr-2 mt-1 flex-shrink-0 ${theme.text}`} />
                                <span className="text-gray-300 text-sm">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className={`text-lg font-bold mb-4 ${theme.text}`}>Our Process</h5>
                          <ul className="space-y-4">
                            {selectedService.process.map((step, i) => (
                              <li key={i} className="flex items-center">
                                <span className={`flex items-center justify-center w-6 h-6 rounded-full ${theme.bg} text-white text-xs font-bold mr-3`}>
                                  {i + 1}
                                </span>
                                <span className="text-gray-300 text-sm font-medium">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;