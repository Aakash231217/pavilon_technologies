// src/components/ImageShowcase.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax effects
      const images = [image1Ref.current, image2Ref.current, image3Ref.current];
      
      images.forEach((img, i) => {
        if (!img) return;
        
        const imgElement = img.querySelector('.parallax-img');
        const overlay = img.querySelector('.img-overlay');
        
        // Reveal animation
        gsap.fromTo(overlay,
          { scaleX: 1 },
          {
            scaleX: 0,
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: img,
              start: "top 70%",
            },
          }
        );

        // Parallax effect
        gsap.to(imgElement, {
          y: (i % 2 === 0 ? -80 : 80),
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Text reveal
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section intro */}
        <div ref={textRef} className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
              Where Technology
              <span className="block text-gray-500">Meets Artistry</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-lg text-gray-400 font-light max-w-md lg:ml-auto">
              We believe in the power of design-driven development. 
              Every pixel, every interaction is crafted with purpose and passion.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large image */}
          <div ref={image1Ref} className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-3xl aspect-[16/10]">
            <div className="img-overlay absolute inset-0 bg-indigo-600 z-10 origin-right" />
            <div className="parallax-img absolute inset-0 scale-[1.3]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                alt="Creative Development"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Creative Development</h3>
              <p className="text-gray-300 text-sm">Blending aesthetics with functionality</p>
            </div>
          </div>

          {/* Stacked images */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div ref={image2Ref} className="relative overflow-hidden rounded-3xl aspect-video">
              <div className="img-overlay absolute inset-0 bg-purple-600 z-10 origin-right" />
              <div className="parallax-img absolute inset-0 scale-[1.3]">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
                  alt="High Performance"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h4 className="text-lg font-bold text-white">High Performance</h4>
                <p className="text-gray-400 text-xs">Optimized for speed</p>
              </div>
            </div>

            <div ref={image3Ref} className="relative overflow-hidden rounded-3xl aspect-video">
              <div className="img-overlay absolute inset-0 bg-pink-600 z-10 origin-right" />
              <div className="parallax-img absolute inset-0 scale-[1.3]">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Innovation & AI"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h4 className="text-lg font-bold text-white">Innovation & AI</h4>
                <p className="text-gray-400 text-xs">Future-forward solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Pixel Perfect', desc: 'Every detail meticulously crafted' },
            { title: 'Performance First', desc: 'Lightning-fast load times' },
            { title: 'Future Ready', desc: 'Scalable and maintainable code' },
          ].map((item, i) => (
            <div 
              key={i}
              className="p-8 border border-white/[0.05] rounded-2xl hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500 group"
              data-cursor-hover
            >
              <span className="text-5xl font-bold text-white/10 group-hover:text-indigo-500/20 transition-colors">
                0{i + 1}
              </span>
              <h4 className="text-xl font-semibold text-white mt-4 mb-2 group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
