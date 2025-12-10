// src/components/ProcessView.tsx
import React from 'react';
import { 
  Search, 
  LayoutTemplate, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  GitBranch 
} from 'lucide-react';

// Define the interface for a single process step
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProcessView: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processes: ProcessStep[] = [
    {
      id: 1,
      title: 'Requirement Analysis',
      description: 'We begin by deep-diving into your business goals, user needs, and technical requirements to build a solid foundation.',
      icon: <Search size={24} />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'System Architecture Design',
      description: 'Architecting scalable, secure, and high-performance systems using modern patterns like Microservices or Serverless.',
      icon: <LayoutTemplate size={24} />,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Agile Development Iterations',
      description: 'Writing clean, maintainable code in 2-week sprints, ensuring rapid delivery and continuous feedback integration.',
      icon: <Code2 size={24} />,
      color: 'cyan'
    },
    {
      id: 4,
      title: 'Rigorous QA & Testing',
      description: 'Automated and manual testing protocols to ensure 99.9% crash-free sessions and robust security compliance.',
      icon: <ShieldCheck size={24} />,
      color: 'emerald'
    },
    {
      id: 5,
      title: 'Deployment & Post-Launch Support',
      description: 'Seamless CI/CD deployment to cloud infrastructure followed by 24/7 monitoring and optimization.',
      icon: <Rocket size={24} />,
      color: 'rose'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-700 font-sans py-10 px-6 md:px-12 animate-fadeIn">
      
      {/* Navigation Back Button - Only shows if onBack is provided */}
      {onBack && (
        <div className="max-w-6xl mx-auto mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer bg-white border border-slate-200 shadow-sm"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Portfolio
          </button>
        </div>
      )}

      {/* --- Header --- */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-bold uppercase tracking-widest mb-6">
          <GitBranch size={16} />
          Workflow
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Excellence</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Our systematic approach transforms complex requirements into robust, scalable software solutions.
        </p>
      </div>

      {/* --- Process Timeline --- */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Connecting Line (The "Circuit") */}
        {/* Solid line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2"></div>
        {/* Glow effect line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/30 blur-[2px] -translate-x-1/2"></div>

        <div className="space-y-16">
          {processes.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={step.id} className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                
                {/* Mobile Adjustment: Always align left on small screens */}
                <div className={`flex md:contents ${!isEven && 'flex-row-reverse md:flex-row'}`}>
                  
                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[45%] group relative`}>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Card Body */}
                    <div className="relative bg-white border border-slate-200 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-slate-200/50">
                      {/* Step Number Watermark */}
                      <div className="absolute top-4 right-4 text-5xl font-black text-slate-100 select-none">
                        0{step.id}
                      </div>
                      
                      <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors`}>
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node (The "Chip") */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-200 shadow-lg z-10 flex items-center justify-center group hover:scale-110 transition-transform duration-300 hover:border-blue-500">
                      <div className={`text-slate-500 group-hover:text-blue-500 transition-colors`}>
                        {step.icon}
                      </div>
                    </div>
                    {/* Glowing Ring */}
                    <div className="absolute w-16 h-16 bg-blue-500/10 rounded-full animate-pulse blur-md z-0"></div>
                  </div>

                  {/* Empty Space for Opposite Side (Desktop Only) */}
                  <div className="hidden md:block md:w-[45%]"></div>

                </div>
              </div>
            );
          })}
        </div>

        {/* End Node */}
        <div className="relative flex justify-center mt-16">
          <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] z-10"></div>
        </div>

      </div>
    </div>
  );
};

export default ProcessView;
