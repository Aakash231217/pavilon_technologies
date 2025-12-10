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
  // Generic icons to use as placeholders for tech stack, as the specific ones are not in lucide-react
  Code,       // For ReactJs, NextJs, AngularJs, VueJs, Svelte (generic code/dev icon)
  Box,        // For ThreeJs (representing 3D/components)
  SquareStack, // For TailwindCss, Bootstrap, MaterialUi (representing frameworks/libraries)
  GitFork,    // For Redux (representing state management/flow)
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

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

  const services = [
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

  const openModal = (service) => {
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

  const getUniqueCategories = () => {
    const categories = techStack.map(tech => tech.category);
    return ['All', ...new Set(categories)].map(cat => cat.charAt(0).toUpperCase() + cat.slice(1));
  };

  const filteredTechStack = activeCategory === 'all'
    ? techStack
    : techStack.filter(tech => tech.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our<span className="text-pink-600"> Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Because in today's market, "good enough" isn't good enough. We architect solutions that drive measurable, tangible results.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent ${colors.hover} cursor-pointer group`}
                onClick={() => openModal(service)}
              >
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${colors.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={colors.text}>{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{service.description}</p>
                <div className={`flex items-center ${colors.text} font-semibold`}>
                  Learn More <ArrowRightCircle size={20} className="ml-2" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Technology Stack Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our<span className="text-pink-600"> Technology Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We utilize cutting-edge technologies to build efficient, scalable, and modern digital solutions.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {getUniqueCategories().map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category.toLowerCase())}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300
                  ${activeCategory === category.toLowerCase()
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {filteredTechStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
          {/* A "View More" button might not be needed if all technologies are displayed based on filters.
              You can re-implement it if you have a partial display for 'All' category and want to show more. */}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and find the perfect solution together
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex justify-center items-start md:items-center bg-black/60 backdrop-blur-sm overflow-y-auto py-4 md:py-8">
          {/* Modal Container */}
          <div className="bg-white w-full mx-4 md:mx-auto md:max-w-5xl rounded-3xl shadow-2xl relative animate-fadeIn overflow-hidden">
            
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 rounded-full p-2 z-10"
              onClick={closeModal}
            >
              <X size={28} />
            </button>

            {(() => {
              const colors = colorMap[selectedService.color];
              return (
                <div className="flex flex-col md:flex-row">
                  {/* Left Sidebar with Gradient and Icon */}
                  <div className={`bg-gradient-to-br ${colors.gradient} p-8 md:p-12 md:w-1/3 flex flex-col justify-between text-white`}>
                    <div>
                      <div className={`inline-block p-4 rounded-2xl ${colors.iconBg} mb-8 shadow-md`}>
                        <div className={colors.text}>{selectedService.icon}</div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{selectedService.title}</h3>
                      <p className="text-lg opacity-90 md:pr-4">{selectedService.description}</p>
                    </div>
                      <div className="mt-12 hidden md:block">
                          <p className="font-semibold uppercase tracking-wider mb-4 opacity-80">Core Competencies</p>
                        <ul className="space-y-3">
                            {selectedService.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                                <CheckCircle2 size={20} className="mr-3 opacity-80" />
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>
                      </div>
                  </div>

                  {/* Right Content Area with Detailed Data */}
                  <div className="p-8 md:p-12 md:w-2/3 bg-white">
                      {/* Detailed Description */}
                    <div className="mb-12">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                        {selectedService.longDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Key Benefits Section */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                Key Benefits
                            </h4>
                            <ul className="space-y-4">
                                {selectedService.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                    {/* Using the service color for the checkmark */}
                                    <CheckCircle2 size={22} className={`${colors.text} mr-3 flex-shrink-0 mt-1`} />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Process Section */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-6"> Our Process</h4>
                            <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-6">
                                {selectedService.process.map((step, idx) => (
                                <li key={idx} className="ml-6">
                                    <span className={`absolute flex items-center justify-center w-8 h-8 ${colors.iconBg} ${colors.text} rounded-full -left-11 ring-4 ring-white font-bold`}>
                                        {idx + 1}
                                    </span>
                                    <h5 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;