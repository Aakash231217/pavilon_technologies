// src/components/HorizontalShowcase.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, Palette, Smartphone, Cloud, Brain, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions engineered for your unique challenges with clean, scalable architecture.',
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    number: '01',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Web Applications',
    description: 'Lightning-fast, responsive web experiences built with cutting-edge technologies.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    number: '02',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love and that drive engagement.',
    icon: Palette,
    color: 'from-pink-500 to-purple-600',
    number: '03',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that deliver native-like performance.',
    icon: Smartphone,
    color: 'from-amber-500 to-orange-500',
    number: '04',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern businesses.',
    icon: Cloud,
    color: 'from-emerald-500 to-teal-500',
    number: '05',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent AI solutions powered by cutting-edge LLMs and ML models.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    number: '06',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

const HorizontalShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const progress = progressRef.current;
    if (!section || !trigger || !progress) return;

    // Calculate scroll distance
    const scrollDistance = section.scrollWidth - window.innerWidth;

    // Create horizontal scroll animation
    const scrollTween = gsap.to(section, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.to(progress, {
            scaleX: self.progress,
            duration: 0.1,
          });
        },
      },
    });

    // Animate cards on scroll
    const cards = section.querySelectorAll('.service-card');
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { 
          opacity: 0.5, 
          scale: 0.9,
          rotateY: 10,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 30%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="services" ref={triggerRef} className="relative bg-[#0a0a0f] overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 origin-left scale-x-0"
        />
      </div>

      {/* Section Header - Fixed */}
      <div className="absolute top-8 left-8 z-20">
        <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium">
          Services
        </span>
      </div>

      {/* Horizontal scroll container */}
      <div 
        ref={sectionRef}
        className="flex items-center h-screen"
        style={{ width: `${services.length * 100}vw` }}
      >
        {/* First panel - Title */}
        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
          <div className="max-w-4xl">
            <h2 className="text-[10vw] md:text-[8vw] font-bold text-white leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">What We</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Build
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-xl">
              We architect digital solutions that drive measurable results. 
              Each service is tailored to your unique needs.
            </p>
            <div className="mt-8 flex items-center gap-2 text-gray-500">
              <span className="text-sm">Scroll to explore</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div 
              key={i}
              className="service-card flex-shrink-0 w-screen h-full flex items-center justify-center px-8"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer"
                data-cursor-hover
                data-cursor-text="Explore"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/40" />
                </div>
                
                {/* Top gradient overlay for color accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 mix-blend-overlay`} />
                
                {/* Border overlay */}
                <div className="absolute inset-0 border border-white/[0.1] rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10 h-full p-6 md:p-16 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[80px] md:text-[180px] font-bold text-white/[0.05] leading-none">
                      {service.number}
                    </span>
                    <a 
                      href="#contact"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <div>
                    <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} mb-4 md:mb-6 shadow-lg`}>
                      <Icon size={24} className="text-white md:hidden" />
                      <Icon size={32} className="text-white hidden md:block" />
                    </div>
                    <h3 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-lg text-gray-400 max-w-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/5 rounded-tl-3xl" />
              </div>
            </div>
          );
        })}

        {/* Final CTA panel */}
        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start?
            </h3>
            <p className="text-xl text-gray-400 mb-10 max-w-md mx-auto">
              Let's transform your vision into reality with cutting-edge technology.
            </p>
            <a 
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
