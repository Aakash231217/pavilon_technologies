// src/components/StatsSection.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCounter } from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully completed for clients worldwide',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Building lasting partnerships',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Client happiness guaranteed',
  },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    // Parallax text effect
    gsap.to(text, {
      x: '-30%',
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Large background text */}
      <div 
        ref={textRef}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
      >
        <span className="text-[20vw] font-bold text-white/[0.02] tracking-[-0.05em]">
          PAVION TECHNOLOGIES • DIGITAL EXCELLENCE • 
        </span>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Numbers That
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Speak Volumes
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-[#0a0a0f] p-8 md:p-12 group hover:bg-white/[0.02] transition-all duration-500"
              data-cursor-hover
            >
              <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-500 font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Ready to be our next success story?
          </p>
          <a 
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-white hover:text-indigo-400 transition-colors group"
          >
            <span className="relative">
              Let's discuss your project
              <span className="absolute bottom-0 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
