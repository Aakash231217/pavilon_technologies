import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '#home', isAnchor: true },
    { name: 'About', href: '#about', isAnchor: true },
    { name: 'Services', href: '#services', isAnchor: true },
    { name: 'Features', href: '#features', isAnchor: true },
    { name: 'Portfolio', href: '#portfolio', isAnchor: true },
    { name: 'Blog', href: '/blog', isAnchor: false },
    { name: 'Careers', href: '/careers', isAnchor: false },
    { name: 'Contact', href: '#contact', isAnchor: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-neon-blue/5'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center -ml-26 md:-ml-28"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a href="#home" className="flex items-center gap-3">
              <img
                className="w-48 h-auto object-contain brightness-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                src={logoImage}
                alt="Pavion Technologies"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const LinkComponent = link.isAnchor ? motion.a : Link;
              const props = link.isAnchor
                ? { href: isHomePage ? link.href : `/${link.href}` }
                : { to: link.href };

              return (
                <LinkComponent
                  key={link.name}
                  {...props}
                  // @ts-ignore
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group overflow-hidden rounded-lg"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Hover Glow Background */}
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-md" />
                  {/* Bottom Line */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-3/4 transition-all duration-300 shadow-[0_0_10px_#00f3ff]" />
                </LinkComponent>
              );
            })}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
              className="ml-4 px-6 py-2 bg-transparent border border-neon-blue/30 text-neon-blue rounded-full font-semibold hover:bg-neon-blue/10 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-3xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => {
                const LinkComponent = link.isAnchor ? motion.a : Link;
                const props = link.isAnchor
                  ? { href: isHomePage ? link.href : `/${link.href}` }
                  : { to: link.href };

                return (
                  <LinkComponent
                    key={link.name}
                    {...props}
                    // @ts-ignore
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </LinkComponent>
                )
              })}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 hover:border-neon-blue/50 text-white text-center font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;