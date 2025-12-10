import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Layout, 
  Code2, 
  Cloud, 
  ArrowLeft,
  Stethoscope
} from 'lucide-react';

const HealthcarePortalView: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { id: 1, title: 'Compliance & Security', description: 'HIPAA/GDPR compliant protocols with AWS security.', icon: <ShieldCheck size={24} />, color: 'blue' },
    { id: 2, title: 'Secure Architecture', description: 'Python (Django) backend with encrypted PostgreSQL DB.', icon: <Lock size={24} />, color: 'purple' },
    { id: 3, title: 'Frontend Dashboards', description: 'React-based patient & doctor interfaces.', icon: <Layout size={24} />, color: 'cyan' },
    { id: 4, title: 'Integration & Testing', description: 'API integration and rigorous security testing.', icon: <Code2 size={24} />, color: 'emerald' },
    { id: 5, title: 'Cloud Deployment', description: 'Scalable deployment on AWS EC2 and S3.', icon: <Cloud size={24} />, color: 'rose' }
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-700 font-sans py-10 px-6 md:px-12 animate-fadeIn">
      {onBack && (
        <div className="max-w-6xl mx-auto mb-8">
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:text-emerald-600 bg-white border shadow-sm">
            <ArrowLeft size={20} /> Back to Portfolio
          </button>
        </div>
      )}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-bold uppercase tracking-widest mb-6">
          <Stethoscope size={16} /> Medical System
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Healthcare Portal</h1>
      </div>
      <div className="max-w-4xl mx-auto relative space-y-16">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2"></div>
        {features.map((step, i) => (
          <div key={step.id} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`flex md:contents ${i % 2 !== 0 && 'flex-row-reverse md:flex-row'}`}>
              <div className="ml-20 md:ml-0 md:w-[45%] bg-white p-6 rounded-xl shadow-lg border border-emerald-100">
                <h3 className="text-xl font-bold mb-2 text-emerald-900">{step.title}</h3><p>{step.description}</p>
              </div>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex justify-center items-center w-16 h-16 bg-white rounded-full border-4 border-emerald-100 shadow-lg z-10 text-emerald-500">{step.icon}</div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcarePortalView;