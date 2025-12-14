// src/components/Portfolio.tsx
import { ExternalLink, Github, X, CheckCircle2, ArrowRightCircle, Lightbulb, PencilRuler, Code2, Bug, Rocket, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

// 3D Background Scene
const Scene3D = () => (
  <>
    <ambientLight intensity={0.3} />
    <pointLight position={[10, 10, 10]} intensity={0.8} color="#818cf8" />
    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f472b6" />
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[-4, 2, -5]} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color="#6366f1" transparent opacity={0.3} distort={0.4} speed={2} />
      </mesh>
    </Float>
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={[4, -1, -4]} scale={1.2}>
        <octahedronGeometry args={[1]} />
        <MeshDistortMaterial color="#ec4899" transparent opacity={0.3} distort={0.3} speed={3} />
      </mesh>
    </Float>
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[0, 3, -6]} scale={0.8}>
        <dodecahedronGeometry args={[1]} />
        <MeshDistortMaterial color="#f59e0b" transparent opacity={0.25} distort={0.5} speed={2.5} />
      </mesh>
    </Float>
  </>
);

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

  // --- Projects Data ---



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
      gradient: 'from-indigo-600 to-purple-600',
      bg: 'bg-indigo-500/20',
      text: 'text-indigo-300',
      border: 'border-indigo-400/30',
      iconBg: 'bg-indigo-500/30',
      glow: 'shadow-indigo-500/25',
    },
    pink: {
      gradient: 'from-pink-500 to-rose-600',
      bg: 'bg-pink-500/20',
      text: 'text-pink-300',
      border: 'border-pink-400/30',
      iconBg: 'bg-pink-500/30',
      glow: 'shadow-pink-500/25',
    },
    yellow: {
      gradient: 'from-amber-500 to-orange-600',
      bg: 'bg-amber-500/20',
      text: 'text-amber-300',
      border: 'border-amber-400/30',
      iconBg: 'bg-amber-500/30',
      glow: 'shadow-amber-500/25',
    },
  };

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Navigate to ProcessView when Live Demo pressed
  const handleLiveDemoClick = () => {
    // always navigate to /process (ProcessView)
    navigate('/process');
  };

  // Data for the "We Build With Process & Precision" section
  const processSteps = [
    {
      icon: <Lightbulb size={32} className="text-indigo-400" />,
      title: 'Ideation & Discovery',
      description: 'We dive into your goals, users, and industry insights to shape the perfect product strategy.',
    },
    {
      icon: <PencilRuler size={32} className="text-pink-400" />,
      title: 'Design',
      description: 'We craft intuitive UI/UX experiences, wireframes, and prototypes with a user-first approach.',
    },
    {
      icon: <Code2 size={32} className="text-purple-400" />,
      title: 'Development',
      description: 'Using agile methodology, we bring the designs to life with secure, scalable code.',
    },
    {
      icon: <Bug size={32} className="text-amber-400" />,
      title: 'Testing',
      description: 'We run rigorous QA cycles, user testing, and bug resolution for a flawless final product.',
    },
    {
      icon: <Rocket size={32} className="text-emerald-400" />,
      title: 'Launch & Support',
      description: 'We ensure a smooth deployment with post-launch monitoring and optimization.',
    },
  ];

  // Data for "What Our Clients Say" section
  const testimonials = [
    {
      stars: 5,
      quote: "Pavion Techniologies helped us launch our fintech app in record time. Their React Native expertise and backend integration were outstanding.",
      author: "Aakash Sharma",
      role: "Co-founder of Alpha Labs",
    },
    {
      stars: 5,
      quote: "Pavion Technologies built a robust CRM customized for our real estate operations. It streamlined sales tracking and team management.",
      author: "Gaurav Shokanda",
      role: "Head of IT Company",
    },
    {
      stars: 5,
      quote: "The telemedicine platform they built for us is secure, scalable, and intuitive. Our patients can now consult doctors remotely with ease.",
      author: "Sonia Rathi",
      role: "Operations Manager ",
    },
    {
      stars: 5,
      quote: "Our e-learning platform needed a major overhaul, and otech delivered beyond expectations. User engagement has skyrocketed!",
      author: "Rajesh Kumar",
      role: "CEO of EduFuture",
    },
    {
      stars: 5,
      quote: "The custom inventory management system developed by otech has significantly reduced our operational costs and improved efficiency.",
      author: "Aaksh Singh",
      role: "Logistics Head at Global Supply",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80 z-[1]" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pink-600/10 blur-[120px] rounded-full z-0" />

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
            className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
          >
            🚀 Our Work
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing recent projects and successful collaborations that drive real business results
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Safety check: colorMap exists
            const colors = colorMap[project.color] || colorMap['blue'];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-slate-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl ${colors.glow}`}
                onClick={() => openModal(project)}
              >
                {/* Card Header */}
                <div className={`h-48 bg-gradient-to-br ${colors.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-8xl font-bold opacity-10 absolute">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="text-white text-center z-10 relative">
                    <div className="text-2xl font-bold mb-3">{project.title}</div>
                    <div className={`inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30`}>
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium border ${colors.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium border ${colors.border}`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center ${colors.text} font-semibold group-hover:gap-2 transition-all`}>
                    View Project Details <ArrowRightCircle size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- NEW SECTION: We Build With Process & Precision --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 py-20 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 relative"
        >
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 blur-[100px] rounded-full" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:w-1/2 text-left mb-8 md:mb-0"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  We Build With<br />
                  <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Process & Precision</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-md">
                  We simplify complex tech into clear, efficient steps from concept to post-launch growth.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:w-1/2 flex justify-end"
              >
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300"
                >
                  Know More
                </button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="p-6 text-center border border-white/10 rounded-2xl bg-slate-900/50 backdrop-blur-md hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-500/20 text-indigo-400 mb-4 group-hover:from-indigo-500/30 group-hover:to-pink-500/30 transition-all duration-300 border border-white/10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* --- END NEW SECTION --- */}

        {/* --- NEW SECTION: What Our Clients Say (Testimonials) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Fixed Header for Testimonials */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6">
                💬 Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What <span className="bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">Our Clients</span> Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl">
                Hear directly from our partners across industries and geographies.
              </p>
            </motion.div>

            {/* Testimonials Marquee */}
            <div className="relative overflow-hidden py-4">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
              
              <div className="flex animate-marquee-slow">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-80 md:w-96 p-6 mx-4 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                    <Quote className="w-10 h-10 text-indigo-400/30 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate content for seamless looping */}
                {testimonials.map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 md:w-96 p-6 mx-4 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                    <Quote className="w-10 h-10 text-indigo-400/30 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {/* --- END NEW SECTION --- */}


        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Want to see more projects or discuss your ideas?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-pink-500/25 transition-all duration-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>

      {/* --- Full Screen Modal for Projects --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center items-start md:items-center bg-black/80 backdrop-blur-md overflow-y-auto py-4 md:py-8"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-slate-900 w-full mx-4 md:mx-auto md:max-w-5xl rounded-3xl shadow-2xl relative overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 z-20 backdrop-blur-sm"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              {(() => {
                // Safety check for colors inside modal
                const projectColor = selectedProject.color || 'blue';
                const colors = colorMap[projectColor] || colorMap['blue'];

                return (
                  <div className="flex flex-col md:flex-row">
                    {/* Left Sidebar */}
                    <div className={`bg-gradient-to-br ${colors.gradient} p-8 md:p-12 md:w-1/3 flex flex-col justify-between text-white relative overflow-hidden`}>
                      <div className="text-white text-9xl font-bold opacity-10 absolute -bottom-10 -left-10 z-0 pointer-events-none">
                        {String(projects.findIndex(p => p.title === selectedProject.title) + 1).padStart(2, '0')}
                      </div>

                      <div className="relative z-10">
                        <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                          {selectedProject.category}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{selectedProject.title}</h3>
                        <p className="text-lg opacity-90 md:pr-4 mb-8">{selectedProject.description}</p>
                      </div>

                      {/* --- BUTTON SECTION --- */}
                      <div className="flex flex-col gap-4 relative z-10 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={handleLiveDemoClick}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-lg cursor-pointer"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </motion.button>

                        <motion.a 
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          href="#" 
                          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold"
                        >
                          <Github size={20} />
                          <span>View Code</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="p-8 md:p-12 md:w-2/3 bg-slate-900 flex flex-col">
                      <div className="mb-10">
                        <h4 className="text-2xl font-bold text-white mb-4">Project Overview</h4>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-10">
                        {/* Key Features */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.keyFeatures.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle2 size={20} className={`${colors.text} mr-3 flex-shrink-0 mt-1`} />
                                <span className="text-gray-300 font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech: string, idx: number) => (
                              <span
                                key={idx}
                                className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
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