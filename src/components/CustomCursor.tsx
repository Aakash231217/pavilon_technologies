// src/components/CustomCursor.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  
  // Use ref to track hover state without causing re-renders
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    // GSAP quick setters for smooth performance
    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");
    const xDotSetter = gsap.quickSetter(cursorDot, "x", "px");
    const yDotSetter = gsap.quickSetter(cursorDot, "y", "px");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let rafId: number;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth cursor animation loop
    const animate = () => {
      // Outer cursor (slower follow)
      const diffX = mouseX - cursorX;
      const diffY = mouseY - cursorY;
      cursorX += diffX * 0.15;
      cursorY += diffY * 0.15;
      xSetter(cursorX);
      ySetter(cursorY);

      // Inner dot (faster follow)
      const diffDotX = mouseX - dotX;
      const diffDotY = mouseY - dotY;
      dotX += diffDotX * 0.5;
      dotY += diffDotY * 0.5;
      xDotSetter(dotX);
      yDotSetter(dotY);

      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', updateMouse);

    // Hover effects
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      isHoveringRef.current = true;
      setIsHovering(true);
      
      const text = target.getAttribute('data-cursor-text');
      if (text) {
        setCursorText(text);
      }

      if (target.hasAttribute('data-cursor-magnetic')) {
        setIsMagnetic(true);
      }

      gsap.to(cursor, {
        scale: 2,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(cursorDot, {
        scale: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      setIsHovering(false);
      setCursorText('');
      setIsMagnetic(false);

      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    // Attach listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor-hover], [data-cursor-text], [data-cursor-magnetic]'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Click animation
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: isHoveringRef.current ? 2 : 1,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []); // Empty dependency array - runs once on mount

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[99999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div 
          className={`w-full h-full rounded-full border-2 border-white transition-all duration-300 ${
            isHovering ? 'bg-white/10' : 'bg-transparent'
          }`}
        />
        {/* Cursor text */}
        <div
          ref={cursorTextRef}
          className={`absolute text-[10px] font-medium text-white uppercase tracking-wider transition-opacity duration-300 ${
            cursorText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {cursorText}
        </div>
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] hidden md:block mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
