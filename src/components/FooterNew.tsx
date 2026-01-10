// src/components/FooterNew.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import logo from '../Images/logo.png';
import Marquee from './Marquee';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const FooterNew: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate big text
      gsap.to(bigTextRef.current, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'Portfolio', href: '#portfolio', isRoute: false },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Careers', href: '/careers', isRoute: true },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'AI Solutions',
    'Cloud Services',
    'UI/UX Design',
    'DevOps',
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/pavion-technologies/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/pavion_technologies_pvt_ltd', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-[#0a0a0f] overflow-hidden">
      {/* Big scrolling text */}
      <div className="absolute top-1/3 left-0 w-full overflow-hidden pointer-events-none">
        <div 
          ref={bigTextRef}
          className="whitespace-nowrap text-[15vw] font-bold text-white/[0.02] tracking-[-0.05em]"
        >
          PAVION TECHNOLOGIES • DIGITAL INNOVATION • BUILD THE FUTURE •
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
                Let's Create Together
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Have a project in mind?
              </h2>
              <p className="text-xl text-gray-400 font-light">
                We'd love to hear about it. Get in touch and let's make something amazing.
              </p>
            </div>
            <div className="lg:text-right">
              <MagneticButton
                as="a"
                href="#contact"
                className="inline-flex items-center gap-4 px-10 py-6 bg-white text-black rounded-full text-lg font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-500 group"
                strength={0.4}
              >
                Start a Project
                <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="py-8 border-b border-white/[0.05] bg-black/20">
        <Marquee 
          items={['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'AI/ML', 'Tailwind']}
          speed={30}
          className="text-sm text-gray-600"
          separator={<span className="mx-6 text-indigo-500/30">◆</span>}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <img src={logo} alt="Pavion Technologies" className="w-40 object-contain mb-6" />
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm font-light">
              Empowering businesses with innovative digital solutions that drive growth and create lasting impact.
            </p>
            <div className="space-y-4">
              <a href="mailto:Contact@paviontechnologies.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group" data-cursor-hover>
                <Mail size={16} className="text-indigo-400" />
                <span className="text-sm">Contact@paviontechnologies.com</span>
              </a>
              <a href="tel:+917455975301" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors" data-cursor-hover>
                <Phone size={16} className="text-indigo-400" />
                <span className="text-sm">+91 7455975301</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-indigo-400" />
                <span className="text-sm">Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-indigo-400 font-medium mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm underline-grow"
                      data-cursor-hover
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm underline-grow"
                      data-cursor-hover
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-indigo-400 font-medium mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-cursor-hover
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="col-span-2">
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-indigo-400 font-medium mb-6">
              Stay Connected
            </h3>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] focus:border-indigo-400/50 focus:outline-none text-white placeholder-gray-500 text-sm transition-all"
                  data-cursor-hover
                />
                <button 
                  className="px-6 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 transition-colors text-sm"
                  data-cursor-hover
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gray-600 font-medium mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
                    aria-label={social.label}
                    data-cursor-hover
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>© {currentYear} Pavion Technologies</span>
              <span className="hidden md:block">•</span>
              <a href="#" className="hover:text-white transition-colors" data-cursor-hover>Privacy Policy</a>
              <span className="hidden md:block">•</span>
              <a href="#" className="hover:text-white transition-colors" data-cursor-hover>Terms of Service</a>
            </div>

            <MagneticButton
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              strength={0.3}
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-indigo-400 group-hover:bg-indigo-500/10 transition-all">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </div>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
