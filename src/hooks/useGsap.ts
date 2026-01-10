// src/hooks/useGsap.ts
import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Magnetic element hook - creates attraction effect
export const useMagnetic = (strength: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

// Text reveal animation hook
export const useTextReveal = (delay: number = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y: 100 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay,
          ease: "power4.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [delay]);

  return ref;
};

// Parallax scroll hook
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [speed]);

  return ref;
};

// Horizontal scroll section hook
export const useHorizontalScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const scrollWidth = section.scrollWidth - window.innerWidth;

    gsap.to(section, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return { sectionRef, triggerRef };
};

// Stagger children animation
export const useStaggerReveal = (staggerAmount: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    
    gsap.set(children, { opacity: 0, y: 80 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: staggerAmount,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [staggerAmount]);

  return ref;
};

// Scale on scroll hook
export const useScaleOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(element, 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return ref;
};

// Character split animation
export const useSplitText = () => {
  const ref = useRef<HTMLDivElement>(null);

  const splitChars = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.innerText;
    element.innerHTML = text
      .split('')
      .map((char, i) => 
        `<span class="char inline-block" style="display: inline-block; opacity: 0; transform: translateY(100%);">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    const chars = element.querySelectorAll('.char');
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power4.out",
        });
      },
    });
  }, []);

  useEffect(() => {
    splitChars();
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [splitChars]);

  return ref;
};

// Image reveal animation
export const useImageReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const image = element.querySelector('img');
    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 bg-indigo-600 transform-origin-right z-10';
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(overlay);

    gsap.set(image, { scale: 1.4 });

    ScrollTrigger.create({
      trigger: element,
      start: "top 75%",
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(overlay, {
          scaleX: 0,
          duration: 1.2,
          ease: "power4.inOut",
          transformOrigin: "right center",
        })
        .to(image, {
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
        }, "-=0.8");
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return ref;
};

export default {
  useMagnetic,
  useTextReveal,
  useParallax,
  useHorizontalScroll,
  useStaggerReveal,
  useScaleOnScroll,
  useSplitText,
  useImageReveal,
};
