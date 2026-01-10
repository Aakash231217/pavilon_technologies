// src/components/PortfolioNew.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  color: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built to provide seamless shopping experiences with dynamic product catalog, secure cart, user authentication, and robust admin panel.',
    features: ['Product Catalog with Filtering', 'Stripe Payment Integration', 'Admin Dashboard', 'User Accounts & Order History'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    color: 'from-blue-500 to-indigo-600',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Software Development',
    description: 'Productivity app with real-time collaboration and team management features.',
    longDescription: 'Modern task management application with boards, lists, and cards to organize tasks. Features drag-and-drop, real-time updates, and team collaboration.',
    features: ['Real-time Sync', 'Drag-and-Drop', 'Team Collaboration', 'Activity Logs'],
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    color: 'from-pink-500 to-purple-600',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80',
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    category: 'Healthcare',
    description: 'Patient management system with appointment scheduling and medical records.',
    longDescription: 'Secure healthcare portal bridging patients and providers with appointment booking, medical history access, and secure messaging.',
    features: ['Appointment Scheduling', 'EHR Access', 'Secure Messaging', 'HIPAA Compliant'],
    technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
    color: 'from-emerald-500 to-teal-600',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure mobile banking application with biometric authentication.',
    longDescription: 'Feature-rich mobile banking with biometric auth, account management, fund transfers, and real-time notifications.',
    features: ['Biometric Auth', 'Fund Transfers', 'Bill Payments', 'Push Notifications'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
    color: 'from-amber-500 to-orange-600',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    category: 'Software Development',
    description: 'Real-time analytics platform with data visualization and reporting.',
    longDescription: 'Interactive analytics dashboard transforming raw data into actionable insights with dynamic charts and automated reporting.',
    features: ['Real-time Visualization', 'Interactive Charts', 'Custom Dashboards', 'Auto Reports'],
    technologies: ['React', 'D3.js', 'Node.js', 'Socket.io'],
    color: 'from-violet-500 to-purple-600',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 6,
    title: 'AI Chatbot Platform',
    category: 'AI & Machine Learning',
    description: 'Intelligent chatbot with natural language processing and custom training.',
    longDescription: 'Advanced AI chatbot platform with NLP capabilities, custom training, and seamless integration with business systems.',
    features: ['Natural Language Processing', 'Custom Training', 'Multi-channel Support', 'Analytics'],
    technologies: ['Python', 'OpenAI', 'React', 'FastAPI', 'Redis'],
    color: 'from-cyan-500 to-blue-600',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

const PortfolioNew: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo('.portfolio-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  // Modal animation
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.modal-content',
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Selected
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            A showcase of our most passionately crafted works with forward-thinking clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              data-cursor-hover
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`portfolio-card group cursor-pointer ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
              data-cursor-hover
              data-cursor-text="View"
            >
              <div className="relative h-full min-h-[300px] bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-700">
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
                </div>
                
                {/* Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />

                {/* Content */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div>
                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
                        {project.category}
                      </span>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl ${index === 0 ? 'lg:text-4xl' : ''} font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${project.color} transition-all duration-500`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs text-gray-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Large Number */}
                <div className="absolute bottom-4 left-4 text-[100px] font-bold text-white/[0.03] leading-none pointer-events-none">
                  0{project.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          
          {/* Modal Content */}
          <div 
            className="modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d14] border border-white/10 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Image */}
            <div className="relative">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/70 to-transparent" />
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-10"
                data-cursor-hover
              >
                <X size={18} />
              </button>
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="text-sm text-indigo-400 uppercase tracking-wider">{selectedProject.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mt-2">{selectedProject.title}</h3>
                <span className="text-gray-500 text-sm mt-2 block">{selectedProject.year}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Description */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Overview</h4>
                <p className="text-lg text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <p className="text-gray-500">Interested in a similar project?</p>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
                  data-cursor-hover
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioNew;
