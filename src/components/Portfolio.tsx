// src/components/Portfolio.tsx
import { ExternalLink, Github, X, CheckCircle2, ArrowRightCircle, Lightbulb, PencilRuler, Code2, Bug, Rocket, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const navigate = useNavigate();
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
      gradient: 'from-blue-600 to-indigo-600',
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-300',
      border: 'border-indigo-500/20',
      glow: 'shadow-[0_0_15px_rgba(99,102,241,0.3)]'
    },
    pink: {
      gradient: 'from-pink-600 to-purple-600',
      bg: 'bg-pink-500/10',
      text: 'text-pink-300',
      border: 'border-pink-500/20',
      glow: 'shadow-[0_0_15px_rgba(236,72,153,0.3)]'
    },
    yellow: {
      gradient: 'from-amber-600 to-orange-600',
      bg: 'bg-amber-500/10',
      text: 'text-amber-300',
      border: 'border-amber-500/20',
      glow: 'shadow-[0_0_15px_rgba(245,158,11,0.3)]'
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
    <section id="portfolio" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-blue text-sm font-medium mb-6 backdrop-blur-sm"
          >
            🚀 Our Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Showcasing recent projects and successful collaborations that drive real business results
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorMap[project.color] || colorMap['blue'];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer group"
                onClick={() => openModal(project)}
              >
                {/* Card Header */}
                <div className={`h-48 bg-gradient-to-br ${colors.gradient} flex items-center justify-center relative overflow-hidden`}>

                  {/* Abstract Background pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover mix-blend-overlay"></div>

                  <div className="text-white text-8xl font-bold opacity-10 absolute -bottom-5 -right-5 transform rotate-12 scale-150 pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="text-white text-center z-10 relative px-4">
                    <div className="text-2xl font-bold mb-3 drop-shadow-md">{project.title}</div>
                    <div className="inline-block px-3 py-1 bg-black/20 backdrop-blur-md text-white border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10`}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center text-white font-semibold group-hover:text-neon-blue transition-colors`}>
                    View Details <ArrowRightCircle size={20} className="ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 py-16 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="md:w-1/2 text-left mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  We Build With<br />
                  <span className="text-gradient">Process & Precision</span>
                </h2>
                <p className="text-gray-400 max-w-md">
                  We simplify complex tech into clear, efficient steps from concept to post-launch growth.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg"
                >
                  Start Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 text-center border border-white/5 rounded-xl bg-black/20 hover:border-white/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 mb-4 shadow-inner">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-left mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-purple text-sm font-medium mb-6">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-gradient">Partners Say</span>
            </h2>
          </div>

          <div className="relative overflow-hidden py-4 -mx-4 sm:-mx-8">
            <div className="flex animate-marquee-slow">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-96 p-8 mx-4 glass-card rounded-2xl border border-white/10 hover:border-neon-blue/30 transition-colors">
                  <div className="text-neon-blue mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" className="inline-block mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{testimonial.author}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Want to see more projects or discuss your ideas?
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-neon-blue to-indigo-600 text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* --- Project Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center items-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0a0a0f] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-white/10 scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 z-20 outline-none"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              {(() => {
                const colors = colorMap[selectedProject.color] || colorMap['blue'];
                return (
                  <div className="flex flex-col md:flex-row min-h-full">
                    {/* Left Sidebar */}
                    <div className={`md:w-1/3 p-10 bg-gradient-to-br ${colors.gradient} text-white relative overflow-hidden flex flex-col`}>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                      <div className="relative z-10 flex-grow">
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                          {selectedProject.category}
                        </div>
                        <h3 className="text-4xl font-extrabold mb-6 leading-tight">{selectedProject.title}</h3>
                        <p className="opacity-90 leading-relaxed text-sm mb-8">{selectedProject.description}</p>
                      </div>

                      <div className="relative z-10 mt-auto pt-8">
                        <a href="#contact" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors">
                          <Code2 size={20} /> Request Similar
                        </a>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:w-2/3 p-10 bg-transparent">
                      <div className="mb-10">
                        <h4 className="text-xl font-bold text-white mb-4">Vision & Execution</h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                            <Star size={18} className="text-neon-blue" /> Key Features
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.keyFeatures.map((f: string, idx: number) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                            <Code2 size={18} className="text-neon-purple" /> Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech: string, idx: number) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
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

export default Portfolio;