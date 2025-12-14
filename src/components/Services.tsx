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
  Sparkles,
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
  color: 'blue' | 'pink' | 'yellow' | 'purple';
  features: string[];
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Handle body scroll lock when modal is open
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
      longDescription: 'We don\'t just write code; we engineer robust, scalable, and future-proof software solutions specifically designed to address your unique business challenges. From initial concept to final deployment and maintenance, our full-cycle development process ensures alignment with your strategic goals. We focus on creating high-performance applications that can grow with your business.',
      benefits: ['Full ownership of source code', 'Scalable architecture for future growth', 'Seamless integration with existing workflows', 'Enhanced operational efficiency'],
      process: ['Discovery & Requirement Analysis', 'System Architecture Design', 'Agile Development Iterations', 'Rigorous QA & Testing', 'Deployment & Post-Launch Support'],
      color: 'blue',
      features: ['Desktop Applications', 'System Integration', 'API Development', 'Automation Tools'],
    },
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      longDescription: 'In the digital age, your website is your primary storefront. We craft visually stunning, highly interactive, and mobile-responsive web applications that engage users and convert visitors. Utilizing the latest frameworks like React and Next.js, we ensure your web presence is fast, secure, and SEO-friendly, providing an exceptional user experience across all devices.',
      benefits: ['Lightning-fast page load speeds', 'Mobile-first responsive design', 'SEO-optimized structure', 'Secure and scalable infrastructure'],
      process: ['UX/UI Prototyping', 'Frontend & Backend Development', 'Content Integration', 'Performance Optimization', 'Go-Live & Training'],
      color: 'pink',
      features: ['React Applications', 'E-commerce Sites', 'CMS Development', 'Progressive Web Apps'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that work seamlessly on iOS and Android.',
      longDescription: 'Reach your customers wherever they are with powerful, intuitive mobile applications. We specialize in cross-platform development using technologies like React Native, allowing us to build apps that feel native on both iOS and Android while maintaining a single codebase. This approach reduces development time and costs without compromising on quality or performance.',
      benefits: ['Faster time-to-market', 'Cost-effective cross-platform solutions', 'Native-like performance and feel', 'Unified codebase maintenance'],
      process: ['Mobile Strategy Consultation', 'UI/UX App Design', 'Cross-Platform Development', 'App Store Submission Support', 'Feature Updates & Maintenance'],
      color: 'yellow',
      features: ['React Native Apps', 'Hybrid Solutions', 'App Store Deployment', 'Mobile UI/UX'],
    },
    {
      icon: <Database size={40} />,
      title: 'Database Solutions',
      description: 'Robust database design and management for optimal data handling and performance.',
      longDescription: 'Data is the lifeblood of modern business. Our database solutions ensure your data is structured efficiently, stored securely, and retrieved instantly. Whether you need to migrate legacy data, optimize existing SQL queries for speed, or design a complex distributed database system in the cloud, our experts ensure data integrity and high availability.',
      benefits: ['Optimized query performance', 'Enhanced data security and compliance', 'Scalable storage solutions', 'Reliable backup and recovery strategies'],
      process: ['Data Modeling & Schema Design', 'Database Migration Strategy', 'Performance Tuning', 'Security Implementation', 'Ongoing Monitoring'],
      color: 'blue',
      features: ['Database Design', 'SQL Optimization', 'Data Migration', 'Cloud Databases'],
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
      longDescription: 'Embrace the power and flexibility of the cloud. We help businesses migrate, build, and optimize applications on leading cloud platforms like AWS and Azure. Our DevOps practices automate deployment pipelines (CI/CD), ensuring faster releases and more reliable infrastructure. We focus on creating cost-effective, auto-scaling environments that handle peak loads effortlessly.',
      benefits: ['Reduced infrastructure costs', 'High availability and fault tolerance', 'Automated deployment pipelines (CI/CD)', 'Global scalability on demand'],
      process: ['Cloud Readiness Assessment', 'Architecture & Migration Planning', 'Infrastructure as Code (IaC) Setup', 'DevOps Pipeline Implementation', 'Cost Monitoring & Optimization'],
      color: 'pink',
      features: ['AWS/Azure Setup', 'DevOps Pipeline', 'Server Management', 'Cloud Migration'],
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
      longDescription: 'Great technology needs great design to be effective. Our UI/UX design process is rooted in user research and behavioral analysis. We create interfaces that are not only visually appealing but also highly intuitive, reducing friction for your users. From wireframes to high-fidelity prototypes, we ensure every interaction is deliberate and delightful.',
      benefits: ['Increased user engagement and retention', 'Lower training and support costs', 'Stronger brand perception', 'Data-driven design decisions'],
      process: ['User Research & Personas', 'Wireframing & Information Architecture', 'Interactive Prototyping', 'Visual Design & Branding', 'Usability Testing'],
      color: 'yellow',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Brand Identity'],
    },
    {
      icon: <Brain size={40} />,
      title: 'AI & Machine Learning',
      description: 'Intelligent AI solutions powered by cutting-edge LLMs, chatbots, and ML models.',
      longDescription: 'Transform your business with the power of Artificial Intelligence. We build custom AI solutions including intelligent chatbots, natural language processing systems, predictive analytics, and computer vision applications. From integrating LLMs like GPT and Claude to building RAG-based knowledge systems, we help you harness AI to automate workflows, enhance decision-making, and create intelligent user experiences.',
      benefits: ['Automated customer support with AI chatbots', 'Data-driven insights and predictions', 'Reduced operational costs through automation', 'Intelligent document processing and analysis'],
      process: ['AI Strategy & Use Case Discovery', 'Data Collection & Preparation', 'Model Development & Training', 'Integration & Deployment', 'Continuous Monitoring & Improvement'],
      color: 'purple',
      features: ['LLM Integration (GPT, Claude, Gemini)', 'Custom Chatbots & AI Agents', 'RAG & Knowledge Bases', 'Predictive Analytics'],
    },
    {
      icon: <Link2 size={40} />,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications and smart contracts for the next generation of the web.',
      longDescription: 'Step into the future with blockchain technology and Web3 solutions. We develop secure, transparent, and decentralized applications that leverage the power of blockchain. From smart contract development on Ethereum and Solana to building NFT marketplaces and DeFi platforms, we help you navigate the Web3 landscape. Our expertise includes tokenization, wallet integration, and creating immersive metaverse experiences.',
      benefits: ['Enhanced security through decentralization', 'Transparent and immutable transactions', 'Reduced intermediary costs', 'Global accessibility and interoperability'],
      process: ['Blockchain Feasibility Analysis', 'Smart Contract Development', 'Security Audit & Testing', 'DApp Deployment', 'Ongoing Maintenance & Updates'],
      color: 'blue',
      features: ['Smart Contracts (Solidity, Rust)', 'NFT Marketplaces', 'DeFi Applications', 'Wallet Integration'],
    },
    {
      icon: <Cpu size={40} />,
      title: 'DevOps Solutions',
      description: 'Streamlined CI/CD pipelines and infrastructure automation for faster, reliable deployments.',
      longDescription: 'Accelerate your development lifecycle with our comprehensive DevOps solutions. We implement modern DevOps practices including continuous integration and continuous deployment (CI/CD), infrastructure as code (IaC), containerization with Docker and Kubernetes, and automated monitoring. Our DevOps approach reduces deployment time, minimizes errors, and ensures your applications run smoothly in production with 24/7 reliability.',
      benefits: ['Faster release cycles and time-to-market', 'Improved collaboration between teams', 'Automated testing and deployment', 'Enhanced system reliability and uptime'],
      process: ['Infrastructure Assessment', 'CI/CD Pipeline Setup', 'Containerization & Orchestration', 'Monitoring & Logging Implementation', 'Continuous Optimization'],
      color: 'pink',
      features: ['CI/CD Automation', 'Docker & Kubernetes', 'Infrastructure as Code (Terraform)', 'Monitoring & Alerting'],
    },
  ];

  const colorMap = {
    blue: {
      bg: 'bg-blue-900',
      text: 'text-blue-700',
      hover: 'hover:border-blue-500',
      gradient: 'from-blue-900 to-blue-800',
      iconBg: 'bg-blue-100',
    },
    pink: {
      bg: 'bg-pink-900',
      text: 'text-pink-600',
      hover: 'hover:border-pink-500',
      gradient: 'from-pink-900 to-pink-800',
      iconBg: 'bg-pink-100',
    },
    yellow: {
      bg: 'bg-yellow-20',
      text: 'text-yellow-600',
      hover: 'hover:border-yellow-500',
      gradient: 'from-yellow-900 to-yellow-800',
      iconBg: 'bg-yellow-100',
    },
    purple: {
      bg: 'bg-purple-900',
      text: 'text-purple-600',
      hover: 'hover:border-purple-500',
      gradient: 'from-purple-900 to-purple-800',
      iconBg: 'bg-purple-100',
    },
  };

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Corrected techStack using generic Lucide icons
  const techStack = [
    { icon: <Code size={40} />, name: 'React.js', category: 'frontend' },
    { icon: <Code size={40} />, name: 'Next.js', category: 'frontend' },
    { icon: <Code size={40} />, name: 'Angular.js', category: 'frontend' },
    { icon: <Code size={40} />, name: 'Vue.js', category: 'frontend' },
    { icon: <Box size={40} />, name: 'Three.js', category: 'frontend' }, // Using Box for ThreeJs (3D)
    { icon: <Code size={40} />, name: 'Svelte', category: 'frontend' },
    { icon: <SquareStack size={40} />, name: 'Tailwind CSS', category: 'frontend' }, // Using SquareStack for frameworks
    { icon: <SquareStack size={40} />, name: 'Bootstrap', category: 'frontend' },
    { icon: <SquareStack size={40} />, name: 'Material UI', category: 'frontend' },
    { icon: <GitFork size={40} />, name: 'Redux', category: 'frontend' }, // Using GitFork for state management
    // Add more tech here with appropriate Lucide icons and categories
    // For example:
    // { icon: <Server size={40} />, name: 'Node.js', category: 'backend' },
    // { icon: <FileCode size={40} />, name: 'Python', category: 'backend' },
    // { icon: <Smartphone size={40} />, name: 'Swift', category: 'mobile' },
    // { icon: <Smartphone size={40} />, name: 'Kotlin', category: 'mobile' },
  ];

  const [activeCategory, setActiveCategory] = useState('all'); // Initialize with 'all'

  const filteredTechStack = techStack;

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-indigo-300">
            <Sparkles size={14} />
            What We Offer
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Because in today's market, "good enough" isn't good enough. We architect solutions that drive measurable, tangible results.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-500 overflow-hidden"
                onClick={() => openModal(service)}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center text-indigo-400 font-semibold group-hover:text-pink-400 transition-colors">
                  Learn More 
                  <ArrowRightCircle size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Technology Stack Section */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-pink-300">
              Technologies We Master
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We utilize cutting-edge technologies to build efficient, scalable, and modern digital solutions.
            </p>
          </motion.div>

          {/* Technology Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredTechStack.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4 text-indigo-400">{tech.icon}</div>
                  <h3 className="text-base font-semibold text-white">{tech.name}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-600/90 via-pink-600/90 to-amber-600/90 backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center border border-white/20">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            
            <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white relative z-10">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto relative z-10">
              Let's discuss your project and find the perfect solution together
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              Start a Project
              <ArrowRightCircle size={20} />
            </motion.a>
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
            className="fixed inset-0 z-[100] flex justify-center items-start md:items-center bg-black/80 backdrop-blur-md overflow-y-auto py-4 md:py-8"
            onClick={closeModal}
          >
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-slate-900 w-full mx-4 md:mx-auto md:max-w-5xl rounded-3xl shadow-2xl relative overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-10 backdrop-blur-md"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              {(() => {
                const colors = colorMap[selectedService.color];
                return (
                  <div className="flex flex-col md:flex-row">
                    {/* Left Sidebar with Gradient and Icon */}
                    <div className={`bg-gradient-to-br ${colors.gradient} p-8 md:p-12 md:w-1/3 flex flex-col justify-between text-white relative overflow-hidden`}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-md mb-8 shadow-xl">
                          {selectedService.icon}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{selectedService.title}</h3>
                        <p className="text-lg opacity-90 md:pr-4">{selectedService.description}</p>
                      </div>
                      <div className="mt-12 hidden md:block relative z-10">
                        <p className="font-semibold uppercase tracking-wider mb-4 opacity-80 text-sm">Core Competencies</p>
                        <ul className="space-y-3">
                          {selectedService.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle2 size={18} className="mr-3 opacity-80" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Content Area with Detailed Data */}
                    <div className="p-8 md:p-12 md:w-2/3 bg-slate-900">
                      {/* Detailed Description */}
                      <div className="mb-10">
                        <h4 className="text-2xl font-bold text-white mb-4">Service Overview</h4>
                        <p className="text-gray-400 leading-relaxed">
                          {selectedService.longDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Key Benefits Section */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-5 flex items-center">
                            Key Benefits
                          </h4>
                          <ul className="space-y-4">
                            {selectedService.benefits.map((benefit: string, idx: number) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle2 size={20} className="text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Our Process Section */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-5">Our Process</h4>
                          <ol className="relative border-l border-white/20 ml-3 space-y-6">
                            {selectedService.process.map((step: string, idx: number) => (
                              <li key={idx} className="ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full -left-4 ring-4 ring-slate-900 text-white font-bold text-sm">
                                  {idx + 1}
                                </span>
                                <h5 className="text-gray-300 font-medium">
                                  {step}
                                </h5>
                              </li>
                            ))}
                          </ol>
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