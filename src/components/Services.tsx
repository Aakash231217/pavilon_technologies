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

  // Color map for future use with service-specific styling
  const _colorMap = {
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
    <section id="services" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* More Visible gradient orbs */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/15 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-600/15 to-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Visible */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-[12px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              What We
              <span className="block text-gradient-accent">Offer</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-gray-400 max-w-md font-light lg:text-right"
          >
            We architect solutions that drive measurable results. Each service is tailored to your unique needs.
          </motion.p>
        </div>

        {/* Service Cards - Visible Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] rounded-2xl overflow-hidden mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="bg-[#0a0a0f] p-8 md:p-10 cursor-pointer group hover:bg-white/[0.04] transition-all duration-500"
              onClick={() => openModal(service)}
              data-cursor-hover
            >
              {/* Icon - Visible */}
              <div className="text-indigo-400/70 group-hover:text-indigo-400 transition-colors duration-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gradient-accent transition-all duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                {service.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 group-hover:text-indigo-400 transition-all duration-500">
                <span>Explore</span>
                <ArrowRightCircle size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack - Visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-center gap-2 px-5 py-2.5 text-[13px] text-gray-400 border border-white/10 rounded-full hover:border-indigo-400/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-500"
                data-cursor-hover
              >
                <span className="text-gray-400">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA - Clean & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-pink-600/10 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to start
                <span className="block text-gradient-accent">your project?</span>
              </h3>
              <p className="text-lg mb-10 text-gray-400 max-w-xl mx-auto font-light">
                Let's discuss your vision and create something extraordinary together.
              </p>
              <a
                href="#contact"
                data-cursor-hover
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-500"
              >
                Start a Project
                <ArrowRightCircle size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Screen Modal - Minimal Design */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex justify-center items-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="bg-[#0a0a0a] w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl relative border border-white/[0.05]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"
                onClick={closeModal}
                data-cursor-hover
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-10">
                  <div className="text-gray-600 mb-6">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedService.title}</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">{selectedService.longDescription}</p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Benefits */}
                  <div>
                    <h5 className="text-[11px] tracking-[0.2em] uppercase text-gray-600 mb-6">Benefits</h5>
                    <ul className="space-y-4">
                      {selectedService.benefits.map((b, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 size={16} className="mr-3 mt-0.5 flex-shrink-0 text-gray-500" />
                          <span className="text-gray-400 text-sm font-light">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h5 className="text-[11px] tracking-[0.2em] uppercase text-gray-600 mb-6">Process</h5>
                    <ul className="space-y-4">
                      {selectedService.process.map((step, i) => (
                        <li key={i} className="flex items-center">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 text-gray-500 text-xs mr-4">
                            {i + 1}
                          </span>
                          <span className="text-gray-400 text-sm font-light">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-12 pt-8 border-t border-white/[0.05]">
                  <h5 className="text-[11px] tracking-[0.2em] uppercase text-gray-600 mb-6">Features</h5>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.features.map((f, i) => (
                      <span key={i} className="px-4 py-2 text-sm text-gray-500 border border-white/[0.05] rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <a
                    href="#contact"
                    data-cursor-hover
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-500"
                    onClick={closeModal}
                  >
                    Get Started
                    <ArrowRightCircle size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;