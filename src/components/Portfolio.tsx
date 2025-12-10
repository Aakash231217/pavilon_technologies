// src/components/Portfolio.tsx
import { ExternalLink, Github, X, CheckCircle2, ArrowRightCircle, Lightbulb, PencilRuler, Code2, Bug, Rocket, Star } from 'lucide-react'; // Added Star icon
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      gradient: 'from-blue-500 to-blue-700',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-300',
      iconBg: 'bg-blue-200',
    },
    pink: {
      gradient: 'from-pink-500 to-pink-700',
      bg: 'bg-pink-100',
      text: 'text-pink-700',
      border: 'border-pink-300',
      iconBg: 'bg-pink-200',
    },
    yellow: {
      gradient: 'from-yellow-400 to-yellow-600',
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      border: 'border-yellow-300',
      iconBg: 'bg-yellow-200',
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
      icon: <Lightbulb size={40} className="text-blue-600" />,
      title: 'Ideation & Discovery',
      description: 'We dive into your goals, users, and industry insights to shape the perfect product strategy.',
    },
    {
      icon: <PencilRuler size={40} className="text-blue-600" />,
      title: 'Design',
      description: 'We craft intuitive UI/UX experiences, wireframes, and prototypes with a user-first approach.',
    },
    {
      icon: <Code2 size={40} className="text-blue-600" />,
      title: 'Development',
      description: 'Using agile methodology, we bring the designs to life with secure, scalable code.',
    },
    {
      icon: <Bug size={40} className="text-blue-600" />,
      title: 'Testing',
      description: 'We run rigorous QA cycles, user testing, and bug resolution for a flawless final product.',
    },
    {
      icon: <Rocket size={40} className="text-blue-600" />,
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing recent projects and successful collaborations
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Safety check: colorMap exists
            const colors = colorMap[project.color] || colorMap['blue'];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Card Header */}
                <div className={`h-48 bg-gradient-to-br ${colors.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-6xl font-bold opacity-20 absolute">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-white text-center z-10">
                    <div className="text-2xl font-bold mb-2">{project.title}</div>
                    <div className={`inline-block px-4 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center ${colors.text} font-semibold mt-auto`}>
                    View Project Details <ArrowRightCircle size={20} className="ml-2" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- NEW SECTION: We Build With Process & Precision --- */}
        <div className="mt-20 py-20 bg-gradient-to-r from-blue-700 to-pink-700 rounded-3xl overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
              <div className="md:w-1/2 text-left mb-8 md:mb-0">
                <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">
                  We Build With<br /><span className="text-white">Process & Precision</span>
                </h2>
                <p className="text-lg text-gray-200 max-w-md">
                  We simplify complex tech into clear, efficient steps from concept to post-launch growth.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
>
  Know More
</button>

              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index}
                  className="p-6 text-center border border-blue-200 rounded-2xl
                                        bg-white shadow-lg
                                        hover:border-blue-400 
                                        transition-all duration-300 transform hover:-translate-y-2 group"> {/* Changed to white background with blue border */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-200 transition-all duration-300"> {/* Blue icon circle and icon */}
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{step.title}</h3> {/* Blue title */}
                  <p className="text-blue-600 text-sm leading-relaxed"> {/* Blue description */}
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* --- END NEW SECTION --- */}

        {/* --- NEW SECTION: What Our Clients Say (Testimonials) --- */}
        <div className="mt-20 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Fixed Header for Testimonials */}
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What <span className="text-blue-600">Our Clients</span> Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Hear directly from our partners across industries and geographies.
              </p>
            </div>

            {/* Testimonials Marquee */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-marquee-slow"> {/* Added custom animation class */}
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-80 md:w-96 p-6 mx-4 bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={20} fill="gold" stroke="gold" className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                ))}
                {/* Duplicate content for seamless looping */}
                {testimonials.map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 md:w-96 p-6 mx-4 bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={20} fill="gold" stroke="gold" className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* --- END NEW SECTION --- */}


        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Want to see more projects or discuss your ideas?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* --- Full Screen Modal for Projects --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex justify-center items-start md:items-center bg-black/60 backdrop-blur-sm overflow-y-auto py-4 md:py-8">
          <div className="bg-white w-full mx-4 md:mx-auto md:max-w-5xl rounded-3xl shadow-2xl relative animate-fadeIn overflow-hidden">

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 rounded-full p-2 z-20"
              onClick={closeModal}
            >
              <X size={28} />
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
                      <div className={`inline-block px-4 py-1 ${colors.iconBg} ${colors.text} rounded-full text-sm font-medium mb-6 shadow-sm`}>
                        {selectedProject.category}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{selectedProject.title}</h3>
                      <p className="text-lg opacity-90 md:pr-4 mb-8">{selectedProject.description}</p>
                    </div>

                    {/* --- BUTTON SECTION --- */}
                    <div className="flex flex-col gap-4 relative z-10 mt-auto">

                      {/* UPDATED: Link ko Button mein change kiya aur onClick lagaya */}
                      <button
                        onClick={handleLiveDemoClick} // <--- Navigate to /process
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-md cursor-pointer"
                      >
                        <ExternalLink size={20} className={colors.text} />
                        <span>Live Demo</span>
                      </button>

                      <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold">
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Content Area */}
                  <div className="p-8 md:p-12 md:w-2/3 bg-white flex flex-col">
                    <div className="mb-10">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.keyFeatures.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 size={20} className={`${colors.text} mr-3 flex-shrink-0 mt-1`} />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;