// src/components/Portfolio.tsx
import { ExternalLink, Github, X, CheckCircle2, ArrowRightCircle, Lightbulb, PencilRuler, Code2, Bug, Rocket, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {

  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      longDescription: 'A comprehensive e-commerce platform built from the ground up to provide a seamless shopping experience for customers and powerful management tools for administrators. It includes a dynamic product catalog, secure shopping cart, user authentication, order tracking, and a robust admin panel for managing inventory, processing orders, and viewing sales analytics. The platform is optimized for performance and SEO.',
      keyFeatures: ['User-friendly Product Catalog with Filtering', 'Secure Payment Gateway Integration (Stripe)', 'Comprehensive Admin Dashboard for Management', 'User Account Creation and Order History', 'Responsive Design for All Devices', 'SEO Optimized Architecture'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'Redux'],
      color: 'blue',
    },
    {
      title: 'Task Management App',
      category: 'Software Development',
      description: 'Productivity app with real-time collaboration and team management features.',
      longDescription: 'A modern task management application designed to enhance team productivity and collaboration. It allows users to create boards, lists, and cards to organize tasks, set due dates, assign responsibilities, and track progress in real-time. Features include drag-and-drop functionality, comments, file attachments, and activity logs, all updated instantly across all connected users.',
      keyFeatures: ['Real-time Updates with WebSockets/Firebase', 'Drag-and-Drop Task Organization', 'Team collaboration with comments and mentions', 'User Authentication and Role Management', 'Activity Logs and History', 'Dark Mode Support'],
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Context API'],
      color: 'pink',
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      description: 'Patient management system with appointment scheduling and medical records.',
      longDescription: 'A secure healthcare portal that bridges the communication gap between patients and healthcare providers. Patients can easily book appointments, view their medical history, access test results, and communicate securely with their doctors. Providers have a dashboard to manage schedules, update patient records, and issue prescriptions. The system adheres to HIPAA guidelines for data privacy.',
      keyFeatures: ['Secure Patient & Doctor Login Portals', 'Online Appointment Scheduling System', 'Electronic Health Record (EHR) Access', 'Secure Messaging System', 'Prescription Management', 'HIPAA Compliant Data Handling'],
      technologies: ['React', 'Python (Django/Flask)', 'PostgreSQL', 'AWS (S3, EC2)', 'Docker'],
      color: 'yellow',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication.',
      longDescription: 'A feature-rich mobile banking application that provides users with secure access to their financial accounts on the go. It supports biometric authentication (fingerprint/Face ID) for quick and secure login. Users can view account balances, view transaction history, transfer funds between accounts, pay bills, deposit checks remotely, and manage card settings.',
      keyFeatures: ['Biometric Authentication for Security', 'Account Balance & Transaction History View', 'Fund Transfers (Internal & External)', 'Bill Pay Functionality', 'Mobile Check Deposit', 'Real-time Push Notifications'],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT Authentication', 'Redux'],
      color: 'blue',
    },
    {
      title: 'Analytics Dashboard',
      category: 'Software Development',
      description: 'Real-time analytics platform with data visualization and reporting.',
      longDescription: 'An interactive analytics dashboard that transforms raw data into actionable insights. It connects to various data sources and visualizes key performance indicators (KPIs) through dynamic charts, graphs, and tables. Users can filter data by date ranges, regions, and other parameters to analyze trends in real-time. It also includes automated reporting features.',
      keyFeatures: ['Real-time Data Visualization with D3.js', 'Interactive Charts, Graphs, and Tables', 'Customizable Dashboard Layouts', 'Data Filtering and Drill-down Capabilities', 'Automated Report Generation (PDF/CSV)', 'Role-based Access Control for Data Security'],
      technologies: ['React', 'D3.js', 'Node.js', 'Redis (for caching)', 'Socket.io'],
      color: 'pink',
    },
    {
      title: 'Social Media Platform',
      category: 'Web Development',
      description: 'Social networking site with messaging, posts, and media sharing.',
      longDescription: 'A full-fledged social media platform that enables users to connect, share, and interact. Users can create profiles, post updates (text, images, videos), follow other users, like and comment on posts, and send direct messages. It includes a personalized news feed algorithm and notifications for relevant activities.',
      keyFeatures: ['User Profiles and Social Connections (Follow/Friend)', 'News Feed with Personalized Content Algorithm', 'Post Creation with Media Attachments', 'Like, Comment, and Share Functionality', 'Real-time Direct Messaging System', 'Notifications System'],
      technologies: ['React', 'GraphQL (Apollo Client/Server)', 'PostgreSQL', 'AWS (S3 for media storage)'],
      color: 'yellow',
    },
  ];

  const colorMap: any = {
    blue: {
      gradient: 'from-blue-500 to-indigo-600',
      gradientOverlay: 'from-blue-500/10 to-indigo-500/10',
      bg: 'bg-blue-500/10',
      bgHover: 'hover:bg-blue-500/20',
      text: 'text-blue-400',
      textHover: 'group-hover:text-blue-300',
      border: 'border-blue-500/20',
      borderHover: 'hover:border-blue-400/40',
      pill: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      pillHover: 'group-hover:bg-blue-500/20 group-hover:border-blue-400/50',
      accent: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      number: 'from-blue-500/30 to-indigo-500/30',
      numberHover: 'group-hover:from-blue-400/60 group-hover:to-indigo-400/60'
    },
    pink: {
      gradient: 'from-pink-500 to-purple-600',
      gradientOverlay: 'from-pink-500/10 to-purple-500/10',
      bg: 'bg-pink-500/10',
      bgHover: 'hover:bg-pink-500/20',
      text: 'text-pink-400',
      textHover: 'group-hover:text-pink-300',
      border: 'border-pink-500/20',
      borderHover: 'hover:border-pink-400/40',
      pill: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      pillHover: 'group-hover:bg-pink-500/20 group-hover:border-pink-400/50',
      accent: 'bg-gradient-to-r from-pink-500 to-purple-500',
      number: 'from-pink-500/30 to-purple-500/30',
      numberHover: 'group-hover:from-pink-400/60 group-hover:to-purple-400/60'
    },
    yellow: {
      gradient: 'from-amber-500 to-orange-600',
      gradientOverlay: 'from-amber-500/10 to-orange-500/10',
      bg: 'bg-amber-500/10',
      bgHover: 'hover:bg-amber-500/20',
      text: 'text-amber-400',
      textHover: 'group-hover:text-amber-300',
      border: 'border-amber-500/20',
      borderHover: 'hover:border-amber-400/40',
      pill: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      pillHover: 'group-hover:bg-amber-500/20 group-hover:border-amber-400/50',
      accent: 'bg-gradient-to-r from-amber-500 to-orange-500',
      number: 'from-amber-500/30 to-orange-500/30',
      numberHover: 'group-hover:from-amber-400/60 group-hover:to-orange-400/60'
    },
  };

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const processSteps = [
    {
      icon: <Lightbulb size={32} className="text-neon-blue" />,
      title: 'Ideation & Discovery',
      description: 'We dive into your goals, users, and industry insights to shape the perfect product strategy.',
    },
    {
      icon: <PencilRuler size={32} className="text-neon-purple" />,
      title: 'Design',
      description: 'We craft intuitive UI/UX experiences, wireframes, and prototypes with a user-first approach.',
    },
    {
      icon: <Code2 size={32} className="text-pink-400" />,
      title: 'Development',
      description: 'Using agile methodology, we bring the designs to life with secure, scalable code.',
    },
    {
      icon: <Bug size={32} className="text-human-warmth" />,
      title: 'Testing',
      description: 'We run rigorous QA cycles, user testing, and bug resolution for a flawless final product.',
    },
    {
      icon: <Rocket size={32} className="text-green-400" />,
      title: 'Launch & Support',
      description: 'We ensure a smooth deployment with post-launch monitoring and optimization.',
    },
  ];

  const testimonials = [
    {
      stars: 5,
      quote: "Pavion Techniologies helped us launch our fintech app in record time. Their React Native expertise and backend integration were outstanding.",
      author: "Aakash Sharma",
      role: "Co-founder",
    },
    {
      stars: 5,
      quote: "Pavion Technologies built a robust CRM customized for our real estate operations. It streamlined sales tracking and team management.",
      author: "Gaurav Shokanda",
      role: "Head of IT",
    },
    {
      stars: 5,
      quote: "The telemedicine platform they built for us is secure, scalable, and intuitive. Our patients can now consult doctors remotely with ease.",
      author: "Sonia Rathi",
      role: "Operations Manager ",
    },
    {
      stars: 5,
      quote: "The custom inventory management system developed by otech has significantly reduced our operational costs and improved efficiency.",
      author: "Aaksh Singh",
      role: "Logistics Head",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#0a0a0f] relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/15 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/15 to-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Minimal */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-4">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Selected
              <span className="block text-gradient-accent">Projects</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-gray-400 max-w-md font-light lg:text-right"
          >
            A selection of our most passionately crafted works with forward-thinking clients.
          </motion.p>
        </div>

        {/* Project Cards - Masonry-like Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className={`group cursor-pointer ${index % 3 === 0 ? 'md:row-span-2' : ''}`}
                onClick={() => openModal(project)}
                data-cursor-hover
              >
                <div className={`relative h-full bg-white/[0.03] border ${colors.border} rounded-2xl overflow-hidden ${colors.borderHover} hover:bg-white/[0.05] transition-all duration-700`}>
                  {/* Colored top accent bar - always visible */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent}`} />
                  
                  {/* Corner gradient decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.gradientOverlay} rounded-bl-full opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Number Indicator */}
                  <div className="absolute top-8 left-6 z-10">
                    <span className={`text-6xl font-bold bg-gradient-to-br ${colors.number} ${colors.numberHover} bg-clip-text text-transparent transition-all duration-700`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 md:p-10 h-full flex flex-col justify-end min-h-[320px]">
                    {/* Category Badge */}
                    <span className={`inline-flex self-start px-3 py-1 text-[11px] tracking-[0.15em] uppercase ${colors.text} font-semibold mb-4 rounded-full ${colors.bg} border ${colors.border}`}>
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-semibold text-white mb-4 ${colors.textHover} transition-all duration-500`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 text-[11px] font-medium ${colors.pill} border rounded-full ${colors.pillHover} transition-all duration-500`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1.5 text-[11px] font-medium text-gray-500 bg-white/5 border border-white/10 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Link */}
                    <div className={`flex items-center text-sm font-medium ${colors.text} ${colors.textHover} transition-all duration-500`}>
                      <span>View Project</span>
                      <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradientOverlay} opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="py-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mb-16">
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-purple-400 font-semibold block mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                From Concept to
                <span className="block text-gradient-accent">Launch</span>
              </h2>
            </div>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-500 self-start"
            >
              Start a Project
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/[0.03] p-6 md:p-8 group rounded-xl border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500"
                data-cursor-hover
              >
                <span className="text-3xl font-bold text-indigo-500/50 group-hover:text-indigo-400/70 transition-colors duration-500 block mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-indigo-400 transition-all duration-500">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 hidden md:block">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials - Clean Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="mb-12">
            <span className="text-[11px] tracking-[0.3em] uppercase text-purple-400 font-semibold block mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Clients
              <span className="text-gradient-accent ml-2">Say</span>
            </h2>
          </div>

          <div className="relative overflow-hidden -mx-6 px-6">
            <div className="flex animate-marquee-slow gap-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[340px] p-8 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500"
                  data-cursor-hover
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold mr-4">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                      <p className="text-[11px] text-indigo-400 uppercase tracking-wider font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <p className="text-gray-400 mb-8 text-lg font-light">
            Ready to bring your vision to life?
          </p>
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-500"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* --- Project Modal - Minimal Design --- */}
      <AnimatePresence>
        {selectedProject && (
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
              className="bg-[#0a0a0f] w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl relative border border-white/[0.1]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-20"
                onClick={closeModal}
                data-cursor-hover
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-10">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-indigo-400 mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-10">
                  {/* Features */}
                  <div>
                    <h5 className="text-[11px] tracking-[0.2em] uppercase text-purple-400 mb-6">Key Features</h5>
                    <ul className="space-y-3">
                      {selectedProject.keyFeatures.map((f: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 text-sm font-light">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="text-[11px] tracking-[0.2em] uppercase text-purple-400 mb-6">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-4 py-2 text-sm text-gray-400 border border-white/[0.1] rounded-full hover:border-indigo-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8 border-t border-white/[0.1]">
                  <a
                    href="#contact"
                    data-cursor-hover
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-500"
                    onClick={closeModal}
                  >
                    <Code2 size={16} />
                    Request Similar Project
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

export default Portfolio;