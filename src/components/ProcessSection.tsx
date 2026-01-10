// src/components/ProcessSection.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, PencilRuler, Code2, Bug, Rocket, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Understanding Your Vision',
    description: 'We dive deep into your goals, target audience, and market to craft the perfect strategy for your project.',
    icon: Lightbulb,
    color: 'from-blue-500 to-indigo-600',
    details: ['Requirement Analysis', 'Market Research', 'User Personas', 'Technical Feasibility'],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Crafting the Experience',
    description: 'Our designers create intuitive interfaces and engaging experiences that users love.',
    icon: PencilRuler,
    color: 'from-purple-500 to-pink-600',
    details: ['Wireframing', 'UI/UX Design', 'Prototyping', 'Design System'],
  },
  {
    number: '03',
    title: 'Development',
    subtitle: 'Building with Precision',
    description: 'Using agile methodology, we transform designs into robust, scalable applications.',
    icon: Code2,
    color: 'from-cyan-500 to-blue-600',
    details: ['Frontend Development', 'Backend Architecture', 'API Integration', 'Database Design'],
  },
  {
    number: '04',
    title: 'Testing',
    subtitle: 'Ensuring Quality',
    description: 'Rigorous QA testing ensures your product is flawless before launch.',
    icon: Bug,
    color: 'from-amber-500 to-orange-600',
    details: ['Unit Testing', 'Integration Tests', 'User Acceptance', 'Performance Audit'],
  },
  {
    number: '05',
    title: 'Launch',
    subtitle: 'Going Live',
    description: 'Smooth deployment with post-launch monitoring and continuous optimization.',
    icon: Rocket,
    color: 'from-emerald-500 to-teal-600',
    details: ['Deployment', 'Monitoring', 'Documentation', 'Ongoing Support'],
  },
];

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.process-title',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Progress line animation on scroll
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: stepsContainerRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      // Animate each step
      const steps = document.querySelectorAll('.process-step');
      steps.forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              onEnter: () => setActiveStep(i),
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="process-title text-center mb-24">
          <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
            Our Process
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            From Concept
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              to Launch
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Our proven 5-step process ensures every project is delivered with excellence, 
            on time, and exceeds expectations.
          </p>
        </div>

        {/* Process Timeline */}
        <div ref={stepsContainerRef} className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden lg:block">
            <div 
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top scale-y-0"
              style={{ height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-20 lg:space-y-32">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`process-step relative grid lg:grid-cols-2 gap-8 items-center ${
                    isLeft ? '' : 'lg:text-right'
                  }`}
                >
                  {/* Number indicator for mobile */}
                  <div className="lg:hidden flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold`}>
                      {step.number}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>

                  {/* Content - alternating sides */}
                  <div className={`${isLeft ? 'lg:pr-20' : 'lg:order-2 lg:pl-20'}`}>
                    {/* Step number */}
                    <span className={`text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} opacity-20 absolute -top-8 ${isLeft ? 'left-0' : 'right-0'} hidden lg:block`}>
                      {step.number}
                    </span>
                    
                    <div className="relative">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">{step.subtitle}</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className={`flex flex-wrap gap-3 ${!isLeft ? 'lg:justify-end' : ''}`}>
                        {step.details.map((detail, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-400"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center node for desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-${step.color.split(' ')[0].replace('from-', '')}/20`}>
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Visual card - alternating sides */}
                  <div className={`${isLeft ? 'lg:order-2 lg:pl-20' : 'lg:pr-20'}`}>
                    <div className={`relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 group`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mb-6 lg:hidden`}>
                        <Icon size={24} className="text-white" />
                      </div>

                      {/* Step visualization */}
                      <div className="space-y-4">
                        {step.details.map((detail, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${step.color} bg-opacity-10 flex items-center justify-center text-xs font-medium text-white/60`}>
                              {i + 1}
                            </div>
                            <span className="text-gray-400 text-sm">{detail}</span>
                            <ChevronRight size={14} className="text-gray-600 ml-auto" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/[0.02] border border-white/[0.08] rounded-3xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">Ready to start your project?</h3>
              <p className="text-gray-500">Let's discuss how we can help bring your vision to life.</p>
            </div>
            <a
              href="#contact"
              data-cursor-hover
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
