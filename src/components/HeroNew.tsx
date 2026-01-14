// src/components/HeroNew.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, ArrowUpRight } from 'lucide-react';
import Marquee from './Marquee';

gsap.registerPlugin(ScrollTrigger);

const HeroNew: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const gridRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Use refs instead of state to avoid re-renders on mouse move
  const mousePosRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);

  // Optimized mouse parallax - throttled and using refs
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const updateOrbs = () => {
      const { x, y } = mousePosRef.current;
      
      // Batch all transforms together for better performance
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(calc(-50% + ${x * 100}px), calc(-50% + ${y * 80}px))`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle to ~30fps for performance
      const now = Date.now();
      if (now - lastUpdateRef.current < 33) return;
      lastUpdateRef.current = now;
      
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mousePosRef.current = { x, y };
      
      // Use RAF for smooth updates
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateOrbs);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Initial animations with 3D effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states with 3D transforms
      gsap.set(showcaseRef.current, { opacity: 0 });
      gsap.set(phoneRef.current, { 
        opacity: 0, 
        scale: 0.8, 
        rotateY: -15,
        rotateX: 10,
        transformPerspective: 1200,
      });
      // Different initial states based on screen size
      const isMobile = window.innerWidth < 1024;
      
      gsap.set(leftCardRef.current, { 
        opacity: 0, 
        x: isMobile ? -50 : -100, 
        rotateY: isMobile ? 15 : 25,
        rotateX: -5,
        transformPerspective: 1000,
      });
      gsap.set(rightCardRef.current, { 
        opacity: 0, 
        x: isMobile ? 50 : 100, 
        rotateY: isMobile ? -15 : -25,
        rotateX: -5,
        transformPerspective: 1000,
      });
      


      // Create master timeline
      const tl = gsap.timeline({ delay: 3.2 });

      // Fade in showcase container
      tl.to(showcaseRef.current, {
        opacity: 1,
        duration: 0.5,
      });

      // Animate phone with 3D rotation
      tl.to(phoneRef.current, {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        duration: 1.4,
        ease: "power4.out",
      }, "-=0.3");

      // Animate left card sliding in with 3D
      tl.to(leftCardRef.current, {
        opacity: isMobile ? 0.5 : 1,
        x: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=1");

      // Animate right card sliding in with 3D
      tl.to(rightCardRef.current, {
        opacity: isMobile ? 0.5 : 1,
        x: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.9");



      // Continuous 3D floating animations
      gsap.to(phoneRef.current, {
        y: "+=10",
        rotateY: 2,
        rotateX: -1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 5,
      });

      gsap.to(leftCardRef.current, {
        y: "+=15",
        rotateY: 3,
        rotateX: 2,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 5.2,
      });

      gsap.to(rightCardRef.current, {
        y: "+=12",
        rotateY: -3,
        rotateX: 2,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 5.4,
      });

      // Scroll animations
      gsap.to(gridRef.current, {
        opacity: 0.5,
        scale: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Parallax on scroll for 3D depth - phones move apart and closer
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        animation: gsap.timeline()
          .to(phoneRef.current, { y: -80, rotateX: 5 }, 0)
          .to(leftCardRef.current, { y: -120, x: -30 }, 0)
          .to(rightCardRef.current, { y: -100, x: 30 }, 0)
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    'Custom Software',
    'AI Solutions', 
    'Web Applications',
    'Mobile Development',
    'Cloud Architecture',
    'UI/UX Design',
    'DevOps & CI/CD',
    'Data Engineering',
  ];



  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Animated Grid Background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Orbs with Mouse Parallax - GPU accelerated */}
      <div 
        ref={orb1Ref}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />
      <div 
        ref={orb2Ref}
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />
      <div 
        ref={orb3Ref}
        className="absolute top-[40%] right-[30%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-24 pb-20">
        {/* Showcase Section with Phone Mockup and Service Cards */}
        <div ref={showcaseRef} className="relative max-w-7xl mx-auto px-4" style={{ perspective: '1500px' }}>
          {/* Glassmorphism glow that follows mouse */}
          <div 
            ref={glowRef}
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0 hidden lg:block"
            style={{
              background: 'radial-gradient(circle, rgba(132, 204, 22, 0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* ===== SPARKLE & SHINE EFFECTS BEHIND PHONES ===== */}
          
          {/* Central glow burst behind main phone - reduced blur for performance */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0" style={{ contain: 'layout style paint' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 via-cyan-500/10 to-purple-500/20 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '4s' }} />
          </div>

          {/* Radial light rays - reduced count for performance */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 opacity-30" style={{ contain: 'layout style paint' }}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute left-1/2 top-1/2 w-1 h-[300px] origin-bottom"
                style={{
                  background: `linear-gradient(to top, ${i % 3 === 0 ? 'rgba(132, 204, 22, 0.3)' : i % 3 === 1 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(168, 85, 247, 0.3)'}, transparent)`,
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>

          {/* Floating sparkle particles - reduced and optimized */}
          <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" style={{ contain: 'layout style paint' }}>
            {/* Sparkle 1 */}
            <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-white rounded-full animate-pulse opacity-60" style={{ animationDuration: '2s' }} />
            
            {/* Sparkle 2 */}
            <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-50" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            
            {/* Sparkle 3 */}
            <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDuration: '3s', animationDelay: '1s' }} />
            
            {/* Sparkle 4 */}
            <div className="absolute top-[70%] right-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-50" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }} />
            
            {/* Sparkle 5 */}
            <div className="absolute top-[15%] left-[40%] w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-40" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }} />
            
            {/* Sparkle 6 */}
            <div className="absolute top-[80%] left-[35%] w-1.5 h-1.5 bg-lime-300 rounded-full animate-pulse opacity-40" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} />
          </div>

          {/* Shimmering stars */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            {/* Star 1 - 4 pointed */}
            <div className="absolute top-[25%] left-[25%]">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-px top-1/2 animate-pulse" style={{ animationDuration: '1.5s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent w-px left-1/2 animate-pulse" style={{ animationDuration: '1.5s' }} />
              </div>
            </div>
            
            {/* Star 2 */}
            <div className="absolute top-[35%] right-[25%]">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent h-px top-1/2 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400 to-transparent w-px left-1/2 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
              </div>
            </div>
            
            {/* Star 3 */}
            <div className="absolute top-[65%] left-[20%]">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px top-1/2 animate-pulse" style={{ animationDuration: '1.8s', animationDelay: '1s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent w-px left-1/2 animate-pulse" style={{ animationDuration: '1.8s', animationDelay: '1s' }} />
              </div>
            </div>
            
            {/* Star 4 */}
            <div className="absolute top-[55%] right-[18%]">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px top-1/2 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent w-px left-1/2 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }} />
              </div>
            </div>
            
            {/* Star 5 - larger */}
            <div className="absolute top-[40%] left-[8%]">
              <div className="relative w-5 h-5 opacity-60">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-px top-1/2 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent w-px left-1/2 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent h-px top-1/2 rotate-45 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent w-px left-1/2 rotate-45 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
              </div>
            </div>
            
            {/* Star 6 - larger */}
            <div className="absolute top-[30%] right-[10%]">
              <div className="relative w-5 h-5 opacity-60">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-300 to-transparent h-px top-1/2 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.2s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-300 to-transparent w-px left-1/2 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.2s' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-300/50 to-transparent h-px top-1/2 rotate-45 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.2s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-300/50 to-transparent w-px left-1/2 rotate-45 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.2s' }} />
              </div>
            </div>
          </div>

          {/* Soft glow orbs behind side phones - reduced blur for performance */}
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[250px] h-[350px] bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-[50px] pointer-events-none z-0" style={{ contain: 'layout style paint' }} />
          <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[250px] h-[350px] bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-[50px] pointer-events-none z-0" style={{ contain: 'layout style paint' }} />

          {/* Floating ring effect behind center phone - optimized */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-0" style={{ contain: 'layout style paint' }}>
            <div className="absolute inset-0 border border-lime-500/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-4 border border-lime-500/10 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute inset-8 border border-lime-500/10 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
          </div>

          {/* ===== END SPARKLE EFFECTS ===== */}

          {/* CSS-based Connection Lines that connect to phones */}

          {/* Mobile Stats Row - Visible only on mobile */}
          <div className="flex lg:hidden justify-center gap-3 mb-6 flex-wrap px-4">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-lime-500/30 rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-black text-[10px] font-bold">✓</span>
                </div>
                <div>
                  <div className="text-lime-400 text-xs font-bold">100%</div>
                  <div className="text-gray-400 text-[8px]">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-[10px]">👥</span>
                </div>
                <div>
                  <div className="text-cyan-400 text-xs font-bold">50+</div>
                  <div className="text-gray-400 text-[8px]">Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-[10px]">⏰</span>
                </div>
                <div>
                  <div className="text-purple-400 text-xs font-bold">24/7</div>
                  <div className="text-gray-400 text-[8px]">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 py-6 lg:py-12">
            
            {/* Mobile: Side phones shown smaller alongside main phone */}
            {/* Left Small Phone - with 3D transform */}
            <div 
              ref={leftCardRef}
              className="absolute lg:relative left-2 sm:left-4 lg:left-auto z-10 w-20 sm:w-24 lg:w-48"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Connection line from left phone to center phone */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[calc(100%+8px)] w-[calc(4rem+30px)] h-6 z-20 hidden lg:flex items-center justify-between">
                {/* Dots */}
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500/60 animate-pulse border border-purple-400/50" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 rounded-full bg-pink-500/60 animate-pulse border border-pink-400/50" style={{ animationDelay: '0.15s' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-pink-400/60 animate-pulse border border-pink-300/50" style={{ animationDelay: '0.3s' }} />
                <div className="w-2 h-2 rounded-full bg-lime-500/60 animate-pulse border border-lime-400/50" style={{ animationDelay: '0.45s' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-lime-400/60 animate-pulse border border-lime-300/50" style={{ animationDelay: '0.6s' }} />
                {/* Traveling particle */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                  style={{ 
                    animation: 'moveLeftToRight 1.5s ease-in-out infinite',
                    boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)'
                  }}
                />
              </div>
              
              {/* Connection dot */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500/30 border-2 border-purple-400/50 hidden lg:flex items-center justify-center z-30">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
              
              <div className="relative aspect-[9/18] bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-[1.2rem] lg:rounded-[1.8rem] border-2 lg:border-4 border-gray-700/80 shadow-2xl shadow-purple-500/20 overflow-hidden group hover:shadow-purple-500/40 transition-all duration-500">
                {/* Metallic frame highlight */}
                <div className="absolute inset-0 rounded-[1rem] lg:rounded-[1.5rem] border border-white/10 pointer-events-none" />
                
                {/* Dynamic Island */}
                <div className="absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 w-10 lg:w-14 h-2.5 lg:h-4 bg-black rounded-full z-10" />
                
                {/* Screen Content - Analytics Dashboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-gray-950 to-gray-900 p-2 lg:p-3 pt-5 lg:pt-7 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
                  
                  {/* Mini chart bars */}
                  <div className="relative z-10 mt-1 lg:mt-2">
                    <div className="text-[6px] lg:text-[8px] text-purple-300 font-medium mb-1">Analytics</div>
                    <div className="flex items-end gap-0.5 h-8 lg:h-12 mb-1 lg:mb-2">
                      <div className="flex-1 bg-purple-500/30 rounded-t" style={{ height: '40%' }} />
                      <div className="flex-1 bg-purple-500/50 rounded-t" style={{ height: '60%' }} />
                      <div className="flex-1 bg-purple-500/70 rounded-t" style={{ height: '80%' }} />
                      <div className="flex-1 bg-purple-400 rounded-t" style={{ height: '100%' }} />
                      <div className="flex-1 bg-purple-500/60 rounded-t" style={{ height: '70%' }} />
                      <div className="flex-1 bg-purple-500/40 rounded-t" style={{ height: '50%' }} />
                    </div>
                    <div className="text-xs lg:text-sm font-bold text-white">+127%</div>
                    <div className="text-[5px] lg:text-[7px] text-gray-500">Growth Rate</div>
                  </div>
                  
                  {/* Stats cards - Hidden on very small screens */}
                  <div className="relative z-10 mt-2 lg:mt-3 space-y-1 lg:space-y-1.5 hidden sm:block">
                    <div className="bg-white/5 backdrop-blur rounded-lg p-1 lg:p-1.5 border border-white/10">
                      <div className="text-[5px] lg:text-[6px] text-gray-400">Users</div>
                      <div className="text-[10px] lg:text-xs font-bold text-white">24.5K</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur rounded-lg p-1 lg:p-1.5 border border-white/10">
                      <div className="text-[5px] lg:text-[6px] text-gray-400">Revenue</div>
                      <div className="text-[10px] lg:text-xs font-bold text-purple-300">$48K</div>
                    </div>
                  </div>

                  {/* Bottom nav indicator */}
                  <div className="absolute bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2 w-8 lg:w-12 h-0.5 lg:h-1 bg-white/20 rounded-full" />
                </div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-purple-500/20 blur-2xl rounded-full" />
            </div>

            {/* Center Phone Mockup - BIGGER with 3D transforms */}
            <div 
              ref={phoneRef}
              className="relative z-20 w-52 sm:w-60 lg:w-80 mx-auto"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Connection line from center phone to right phone */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[calc(100%+8px)] w-[calc(4rem+30px)] h-6 z-20 hidden lg:flex items-center justify-between">
                {/* Dots */}
                <div className="w-2.5 h-2.5 rounded-full bg-lime-500/60 animate-pulse border border-lime-400/50" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 rounded-full bg-lime-400/60 animate-pulse border border-lime-300/50" style={{ animationDelay: '0.15s' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/60 animate-pulse border border-cyan-400/50" style={{ animationDelay: '0.3s' }} />
                <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse border border-cyan-300/50" style={{ animationDelay: '0.45s' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/60 animate-pulse border border-cyan-400/50" style={{ animationDelay: '0.6s' }} />
                {/* Traveling particle */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                  style={{ 
                    animation: 'moveLeftToRight 1.5s ease-in-out infinite 0.5s',
                    boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)'
                  }}
                />
              </div>
              
              {/* Connection dots on sides */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-lime-500/20 border-2 border-lime-400/40 hidden lg:flex items-center justify-center z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
              </div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-lime-500/20 border-2 border-lime-400/40 hidden lg:flex items-center justify-center z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
              </div>

              <div className="relative">
                {/* Phone Frame with metallic border - BIGGER */}
                <div className="relative aspect-[9/19] bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-[2.8rem] border-[6px] border-gray-600/80 shadow-2xl shadow-lime-500/20 overflow-hidden">
                  {/* Metallic frame highlight */}
                  <div className="absolute inset-0 rounded-[2.4rem] border border-white/10 pointer-events-none" />
                  
                  {/* Status Bar */}
                  <div className="absolute top-3 left-6 right-6 flex items-center justify-between text-white text-[10px] z-10 font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-1.5 bg-white rounded-sm" />
                        <div className="w-0.5 h-2 bg-white rounded-sm" />
                        <div className="w-0.5 h-2.5 bg-white rounded-sm" />
                        <div className="w-0.5 h-2 bg-white rounded-sm" />
                      </div>
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3/4 h-full bg-lime-400 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-10 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                  </div>

                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a0c] via-gray-950 to-[#0a1a1a] flex flex-col items-center justify-center p-6 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-cyan-500/5" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-500/10 via-transparent to-transparent" />
                    
                    {/* Glassmorphism Icon Container */}
                    <div className="relative mb-6 group">
                      <div className="w-20 h-20 backdrop-blur-2xl bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl shadow-lime-500/20 relative overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-white/10">
                        {/* Glass shine */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        <MousePointer2 size={36} className="text-lime-400 relative z-10" />
                      </div>
                      {/* Outer glow */}
                      <div className="absolute inset-0 rounded-2xl bg-lime-500/30 blur-xl scale-125 animate-pulse opacity-60" />
                    </div>

                    {/* Main Text */}
                    <h2 className="text-2xl font-bold text-center mb-2 leading-tight relative">
                      <span className="text-white">Bring Your Product</span><br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                        To Millions
                      </span>
                    </h2>
                    
                    <p className="text-gray-500 text-xs text-center mb-6 max-w-[200px]">
                      Scale your digital presence with enterprise solutions
                    </p>

                    {/* CTA Button - Glassmorphism style */}
                    <a 
                      href="#contact"
                      className="px-6 py-3 backdrop-blur-xl bg-lime-500 hover:bg-lime-400 text-black text-sm font-semibold rounded-xl border border-lime-400/30 transition-all duration-300 shadow-lg shadow-lime-500/30 hover:shadow-lime-400/50 hover:scale-105 flex items-center gap-2 group relative overflow-hidden"
                      data-cursor-hover
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>

                    {/* Animated decorative dots - optimized */}
                    <div className="absolute top-20 left-6 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
                    <div className="absolute bottom-24 right-8 w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* Reflection/Shadow - optimized blur */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-lime-500/15 blur-xl rounded-full" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-lime-400/20 blur-lg rounded-full" />
              </div>
            </div>

            {/* Right Small Phone - with 3D transform */}
            <div 
              ref={rightCardRef}
              className="absolute lg:relative right-2 sm:right-4 lg:right-auto z-10 w-20 sm:w-24 lg:w-48"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Connection dot */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cyan-500/30 border-2 border-cyan-400/50 hidden lg:flex items-center justify-center z-30">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              
              <div className="relative aspect-[9/18] bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-[1.2rem] lg:rounded-[1.8rem] border-2 lg:border-4 border-gray-700/80 shadow-2xl shadow-cyan-500/20 overflow-hidden group hover:shadow-cyan-500/40 transition-all duration-500">
                {/* Metallic frame highlight */}
                <div className="absolute inset-0 rounded-[1rem] lg:rounded-[1.5rem] border border-white/10 pointer-events-none" />
                
                {/* Dynamic Island */}
                <div className="absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 w-10 lg:w-14 h-2.5 lg:h-4 bg-black rounded-full z-10" />
                
                {/* Screen Content - Design/Tasks App */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 via-gray-950 to-gray-900 p-2 lg:p-3 pt-5 lg:pt-7 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
                  
                  {/* Header */}
                  <div className="relative z-10 mt-1 lg:mt-2">
                    <div className="text-[6px] lg:text-[8px] text-cyan-300 font-medium mb-1 lg:mb-2">Projects</div>
                    
                    {/* Task cards */}
                    <div className="space-y-1 lg:space-y-2">
                      <div className="bg-white/5 backdrop-blur rounded-lg p-1.5 lg:p-2 border border-cyan-500/20">
                        <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                          <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-lime-400" />
                          <span className="text-[5px] lg:text-[7px] text-gray-400">In Progress</span>
                        </div>
                        <div className="text-[7px] lg:text-[9px] font-medium text-white">UI Design</div>
                        <div className="mt-1 lg:mt-1.5 w-full h-0.5 lg:h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-cyan-500 to-lime-400 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="bg-white/5 backdrop-blur rounded-lg p-1.5 lg:p-2 border border-cyan-500/20 hidden sm:block">
                        <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                          <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-purple-400" />
                          <span className="text-[5px] lg:text-[7px] text-gray-400">Review</span>
                        </div>
                        <div className="text-[7px] lg:text-[9px] font-medium text-white">Mobile App</div>
                        <div className="mt-1 lg:mt-1.5 w-full h-0.5 lg:h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur rounded-lg p-1.5 lg:p-2 border border-cyan-500/20 hidden sm:block">
                        <div className="flex items-center gap-1 lg:gap-1.5 mb-0.5 lg:mb-1">
                          <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-cyan-400" />
                          <span className="text-[5px] lg:text-[7px] text-gray-400">Complete</span>
                        </div>
                        <div className="text-[7px] lg:text-[9px] font-medium text-white">Branding</div>
                        <div className="mt-1 lg:mt-1.5 w-full h-0.5 lg:h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav indicator */}
                  <div className="absolute bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2 w-8 lg:w-12 h-0.5 lg:h-1 bg-white/20 rounded-full" />
                </div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-cyan-500/20 blur-2xl rounded-full" />
            </div>
          </div>

          {/* Mobile Stats Row 2 - Visible only on mobile */}
          <div className="flex lg:hidden justify-center gap-3 mt-6 flex-wrap px-4">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center">
                  <span className="text-white text-[10px]">📁</span>
                </div>
                <div>
                  <div className="text-indigo-400 text-xs font-bold">200+</div>
                  <div className="text-gray-400 text-[8px]">Projects</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-amber-500/30 rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-[10px]">⭐</span>
                </div>
                <div>
                  <div className="text-amber-400 text-xs font-bold">5.0</div>
                  <div className="text-gray-400 text-[8px]">Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-rose-500/30 rounded-xl px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-[10px]">💡</span>
                </div>
                <div>
                  <div className="text-rose-400 text-xs font-bold">AI</div>
                  <div className="text-gray-400 text-[8px]">Powered</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== FLOATING STAT BADGES - CIRCULAR ARRANGEMENT ===== */}
      {/* Badges orbit around the center - positioned using circular coordinates */}
      
      {/* Badge 1 - 100% Client Satisfaction - Top Center (12 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '12%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          animationDuration: '3s', 
          animationDelay: '0s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500/30 to-emerald-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-lime-500/30 rounded-xl px-3 py-2 shadow-lg shadow-lime-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-lime-400 to-emerald-500 flex items-center justify-center">
                <span className="text-black text-xs font-bold">✓</span>
              </div>
              <div>
                <div className="text-lime-400 text-sm font-bold">100%</div>
                <div className="text-gray-400 text-[9px]">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 2 - 50+ Clients - Top Right (2 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '20%', 
          right: '12%',
          animationDuration: '3.5s', 
          animationDelay: '0.5s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-xl px-3 py-2 shadow-lg shadow-cyan-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xs">👥</span>
              </div>
              <div>
                <div className="text-cyan-400 text-sm font-bold">50+</div>
                <div className="text-gray-400 text-[9px]">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 3 - 24/7 Support - Right Center (3 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '45%', 
          right: '5%',
          animationDuration: '4s', 
          animationDelay: '1s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-xl px-3 py-2 shadow-lg shadow-purple-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs">⏰</span>
              </div>
              <div>
                <div className="text-purple-400 text-sm font-bold">24/7</div>
                <div className="text-gray-400 text-[9px]">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 4 - Fast Delivery - Bottom Right (5 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '68%', 
          right: '12%',
          animationDuration: '3.2s', 
          animationDelay: '1.5s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-orange-500/30 rounded-xl px-3 py-2 shadow-lg shadow-orange-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-xs">🚀</span>
              </div>
              <div>
                <div className="text-orange-400 text-sm font-bold">Fast</div>
                <div className="text-gray-400 text-[9px]">Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 5 - 200+ Projects - Bottom Left (7 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '68%', 
          left: '12%',
          animationDuration: '3.8s', 
          animationDelay: '0.3s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-xl px-3 py-2 shadow-lg shadow-indigo-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center">
                <span className="text-white text-xs">📁</span>
              </div>
              <div>
                <div className="text-indigo-400 text-sm font-bold">200+</div>
                <div className="text-gray-400 text-[9px]">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 6 - Left Center (9 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '45%', 
          left: '5%',
          animationDuration: '4.2s', 
          animationDelay: '0.8s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-amber-500/30 rounded-xl px-3 py-2 shadow-lg shadow-amber-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xs">⭐</span>
              </div>
              <div>
                <div className="text-amber-400 text-sm font-bold flex items-center gap-0.5">
                  5.0 <span className="text-[8px] text-gray-500">★★★★★</span>
                </div>
                <div className="text-gray-400 text-[9px]">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge 7 - Top Left (10 o'clock) */}
      <div 
        className="absolute z-30 hidden lg:block animate-bounce"
        style={{ 
          top: '20%', 
          left: '12%',
          animationDuration: '3.6s', 
          animationDelay: '1.2s' 
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 to-pink-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all" />
          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-rose-500/30 rounded-xl px-3 py-2 shadow-lg shadow-rose-500/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs">💡</span>
              </div>
              <div>
                <div className="text-rose-400 text-sm font-bold">AI</div>
                <div className="text-gray-400 text-[9px]">Powered Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== END FLOATING STAT BADGES ===== */}

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-3 lg:py-5 border-t border-white/[0.05] bg-black/30 backdrop-blur-sm">
        <Marquee 
          items={services}
          speed={35}
          className="text-sm lg:text-base font-medium text-gray-500 hover:text-gray-300 transition-colors"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-[8px] lg:text-[10px] tracking-[0.2em] lg:tracking-[0.3em] uppercase text-gray-600">Explore</span>
        <div className="w-4 lg:w-5 h-7 lg:h-9 rounded-full border border-white/20 flex justify-center pt-1.5 lg:pt-2">
          <div className="w-0.5 lg:w-1 h-2 lg:h-2.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-28 left-8 w-32 h-32 border-l border-t border-white/[0.04] hidden lg:block" />
      <div className="absolute top-28 right-8 w-32 h-32 border-r border-t border-white/[0.04] hidden lg:block" />
    </section>
  );
};

export default HeroNew;
