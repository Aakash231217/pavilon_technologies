// src/components/Hero.tsx
import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import {
  User,
  FileCheck,
  Lightbulb,
  Link,
  Building2,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Globe,
} from 'lucide-react';

const services = [
  { icon: <User size={24} />, title: 'AI & ML' },
  { icon: <FileCheck size={24} />, title: 'QA & Software Testing' },
  { icon: <Lightbulb size={24} />, title: 'IT Consulting & Strategy' },
  { icon: <Link size={24} />, title: 'API & System Integrations' },
  { icon: <Building2 size={24} />, title: 'CRM & LMS' },
  { icon: <Smartphone size={24} />, title: 'App Development' },
  { icon: <Cloud size={24} />, title: 'Cloud Solutions' },
  { icon: <Database size={24} />, title: 'Data Analytics' },
  { icon: <Zap size={24} />, title: 'DevOps & Automation' },
  { icon: <Globe size={24} />, title: 'Web Design & UX' },
  { icon: <Globe size={24} />, title: 'ATS & PMS' },
];

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h5 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Transforming Ideas Into Intelligent Products.
            </h5>

            <div className="block bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-6xl font-extrabold mt-2">
              Code. Create. Scale.
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creating exceptional digital experiences through innovative software
              solutions and cutting-edge web development
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Code size={20} />
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">30+</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">5+</div>
                <div className="text-gray-600">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            {/* Google Reviews and Trusted Section */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google Logo"
                  className="w-10 h-10"
                /> */}
                <div className="text-left">
                  <div className="flex items-center">
                    
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
                          clipRule="evenodd"
                        />
                      
                    
                  </div>
                  {/* <p className="text-gray-600 text-sm">50+ reviews</p> */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  Trusted by 20+ Startups
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-[#0A1128] py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of items */}
          <div className="flex min-w-[200%] justify-start items-center space-x-32 px-8 text-white">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-lg font-medium flex-shrink-0"
              >
                {service.icon}
                {service.title}
              </div>
            ))}
          </div>
          {/* Second set of items for seamless loop */}
          <div className="flex min-w-[200%] justify-start items-center space-x-32 px-8 text-white">
            {services.map((service, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center gap-3 text-lg font-medium flex-shrink-0"
              >
                {service.icon}
                {service.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default Hero;
