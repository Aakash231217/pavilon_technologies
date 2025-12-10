import React from 'react';
import { 
  Layout, 
  Database, 
  Palette, 
  Zap, 
  CheckSquare, 
  ArrowLeft 
} from 'lucide-react';

interface TaskStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const TaskAppView: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features: TaskStep[] = [
    {
      id: 1,
      title: 'Architecture & Setup',
      description: 'Built on a robust foundation using React and TypeScript to ensure type safety, scalability, and maintainable code structure.',
      icon: <Layout size={24} />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Real-time Database',
      description: 'Integrated Firebase Firestore to enable instant data synchronization, allowing teams to see updates in real-time without refreshing.',
      icon: <Database size={24} />,
      color: 'yellow'
    },
    {
      id: 3,
      title: 'Modern UI/UX',
      description: 'Designed with Tailwind CSS for a mobile-first, responsive interface that supports Dark Mode and provides a seamless user experience.',
      icon: <Palette size={24} />,
      color: 'pink'
    },
    {
      id: 4,
      title: 'Performance Optimization',
      description: 'Implemented lazy loading and efficient state management to ensure the app runs smoothly even with complex project boards.',
      icon: <Zap size={24} />,
      color: 'cyan'
    },
    {
      id: 5,
      title: 'Task Collaboration',
      description: 'Core functionality allowing users to create, assign, and track tasks with drag-and-drop capabilities and team comments.',
      icon: <CheckSquare size={24} />,
      color: 'emerald'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-slate-700 font-sans py-10 px-6 md:px-12 animate-fadeIn">
      
      {/* Navigation Back Button */}
      {onBack && (
        <div className="max-w-6xl mx-auto mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer bg-white border border-slate-200 shadow-sm"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      )}

      {/* --- Header --- */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-bold uppercase tracking-widest mb-6">
          <CheckSquare size={16} />
          Project Details
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Task Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">System</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A productivity powerhouse built with React, TypeScript, and Firebase.
        </p>
      </div>

      {/* --- Feature Timeline --- */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Connecting Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2"></div>
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/30 blur-[2px] -translate-x-1/2"></div>

        <div className="space-y-16">
          {features.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={step.id} className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                
                <div className={`flex md:contents ${!isEven && 'flex-row-reverse md:flex-row'}`}>
                  
                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[45%] group relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative bg-white border border-slate-200 p-6 md:p-8 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-slate-200/50">
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

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-200 shadow-lg z-10 flex items-center justify-center group hover:scale-110 transition-transform duration-300 hover:border-blue-500">
                      <div className={`text-slate-500 group-hover:text-blue-500 transition-colors`}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute w-16 h-16 bg-blue-500/10 rounded-full animate-pulse blur-md z-0"></div>
                  </div>

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

export default TaskAppView;