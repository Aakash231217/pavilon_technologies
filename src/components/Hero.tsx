// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

// Floating 3D Shape Component
const FloatingShape: React.FC<{
  className?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}> = ({ className = '', delay = 0, duration = 8, style }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay },
    }}
    style={style}
  />
);

// Gradient Orb Component
const GradientOrb: React.FC<{
  className?: string;
  color1: string;
  color2: string;
  size?: string;
  blur?: string;
  animate?: boolean;
}> = ({ className = '', color1, color2, size = '400px', blur = '120px', animate = true }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
      filter: `blur(${blur})`,
      opacity: 0.3,
    }}
    animate={animate ? {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.4, 0.3],
    } : {}}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const services = [
  'AI & Machine Learning',
  'Software Development',
  'Web Applications',
  'Mobile Apps',
  'Cloud Solutions',
  'UI/UX Design',
  'DevOps',
  'Data Analytics',
  'API Integration',
  'Consulting',
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    const handleHover = () => cursor.classList.add('cursor-hover');
    const handleUnhover = () => cursor.classList.remove('cursor-hover');

    window.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  const stats = [
    { value: '50+', label: 'Projects' },
    { value: '30+', label: 'Clients' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
      
      {/* Noise Texture */}
      <div className="noise" />

      <section
        ref={containerRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
      >
        {/* Gradient Orbs - More Visible */}
        <GradientOrb 
          color1="rgba(129, 140, 248, 0.6)" 
          color2="rgba(167, 139, 250, 0.4)" 
          size="600px"
          blur="150px"
          className="top-[-200px] left-[-200px]"
        />
        <GradientOrb 
          color1="rgba(244, 114, 182, 0.5)" 
          color2="rgba(251, 146, 195, 0.3)" 
          size="500px"
          blur="130px"
          className="bottom-[-100px] right-[-150px]"
        />
        <GradientOrb 
          color1="rgba(99, 102, 241, 0.4)" 
          color2="rgba(167, 139, 250, 0.3)" 
          size="400px"
          blur="100px"
          className="top-[50%] right-[10%]"
        />

        {/* Floating 3D Shapes - More Visible */}
        <FloatingShape 
          className="top-[15%] left-[10%] w-20 h-20 border border-white/20 rounded-2xl backdrop-blur-sm bg-white/[0.02]"
          delay={0}
          style={{ transform: 'rotateX(45deg) rotateZ(45deg)' }}
        />
        <FloatingShape 
          className="top-[25%] right-[15%] w-16 h-16 border border-white/15 rounded-full backdrop-blur-sm bg-white/[0.02]"
          delay={0.5}
          duration={10}
        />
        <FloatingShape 
          className="bottom-[20%] left-[15%] w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-xl backdrop-blur-sm border border-white/10"
          delay={1}
          duration={7}
        />
        <FloatingShape 
          className="bottom-[30%] right-[10%] w-24 h-24 border border-white/10 rounded-3xl backdrop-blur-sm bg-white/[0.02]"
          delay={1.5}
          duration={9}
          style={{ transform: 'rotateY(30deg)' }}
        />

        {/* Subtle Grid - More Visible */}
        <div className="absolute inset-0 grid-overlay opacity-40" />

        {/* Main Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
          style={{ y: smoothY, opacity, scale }}
        >
          <div className="text-center">
            {/* Minimal Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-gray-400 font-medium">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-indigo-400/50" />
                Software & AI solutions 
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-indigo-400/50" />
              </span>
            </motion.div>

            {/* Main Heading - Large & Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-[-0.03em]"
            >
              <span className="block text-white text-glow">We Create</span>
              <span className="block text-gradient-accent">
                Digital Magic
              </span>
            </motion.h1>

            {/* Subtitle - Elegant */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Crafting immersive digital experiences through innovative software, 
              AI solutions, and cutting-edge web development.
            </motion.p>

            {/* CTA Buttons - Minimal & Elegant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            >
              <a
                href="#portfolio"
                data-cursor-hover
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                data-cursor-hover
                className="group inline-flex items-center gap-3 px-8 py-4 text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Let's Talk
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Stats - Ultra Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center items-center gap-12 md:gap-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="text-center group"
                  data-cursor-hover
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-gradient-accent transition-all duration-500">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section - Better Visibility */}
      <section className="relative bg-[#0a0a0f] py-6 overflow-hidden border-y border-white/[0.08]">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex min-w-full justify-around items-center space-x-16 px-8">
              {services.map((service, index) => (
                <span
                  key={`${i}-${index}`}
                  className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-500 whitespace-nowrap flex-shrink-0"
                  data-cursor-hover
                >
                  {service}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
