// src/components/TestimonialsNew.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "Pavion Technologies transformed our vision into reality. Their attention to detail and technical expertise exceeded all expectations.",
    author: "Aakash Sharma",
    role: "Co-founder, FinTech Startup",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote: "The custom CRM they built streamlined our entire sales process. ROI was visible within the first month of deployment.",
    author: "Gaurav Shokanda",
    role: "Head of IT, Real Estate Corp",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote: "Their AI solutions have revolutionized how we handle customer support. Response times dropped by 70%.",
    author: "Sonia Rathi",
    role: "Operations Manager, Healthcare",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    quote: "Professional, innovative, and incredibly reliable. Pavion is our go-to partner for all digital initiatives.",
    author: "Aaksh Singh",
    role: "Logistics Head, E-commerce",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialsNew: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animate quote change
  useEffect(() => {
    const quote = quoteRef.current;
    if (!quote) return;

    gsap.fromTo(quote,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal
      gsap.fromTo(containerRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Large quote mark */}
      <div className="absolute top-1/4 left-1/4 opacity-[0.02] pointer-events-none">
        <Quote size={400} strokeWidth={0.5} />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients
            <span className="block text-gray-500">Say About Us</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative">
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            {/* Rating */}
            <div className="flex gap-1 mb-8 justify-center">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <div ref={quoteRef} className="text-center">
              <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-12 max-w-4xl mx-auto">
                "{currentTestimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 ring-2 ring-indigo-500/30 ring-offset-2 ring-offset-[#0a0a0f]">
                  <span className="text-white font-bold text-lg">
                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {currentTestimonial.author}
                </h4>
                <p className="text-gray-500 text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              data-cursor-hover
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'w-8 bg-indigo-500' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  data-cursor-hover
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
              data-cursor-hover
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialsNew;
