import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../Images/logo.png';

const MotionLink = motion(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: 'Portfolio', href: '#portfolio', isAnchor: true },
    { name: 'Blog', href: '/blog', isAnchor: false },
    { name: 'Careers', href: '/careers', isAnchor: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b border-gray-200' 
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#home" className="flex items-center" data-cursor-hover>
              <img
                className="w-36 h-auto object-contain"
                src={logoImage}
                alt="Pavion"
                style={{ filter: 'contrast(1.1) saturate(1.2)' }}
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const commonProps = {
                key: link.name,
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 + index * 0.05, duration: 0.5 },
                className: "relative px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-black transition-colors duration-500 group",
                'data-cursor-hover': true
              };

              const content = (
                <>
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </>
              );

              if (link.isAnchor) {
                return (
                  <motion.a
                    {...commonProps}
                    href={isHomePage ? link.href : `/${link.href}`}
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <MotionLink
                  {...commonProps}
                  to={link.href}
                >
                  {content}
                </MotionLink>
              );
            })}

            {/* CTA */}
            <motion.a
              href="#contact"
              data-cursor-hover
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="ml-6 px-5 py-2 text-[13px] font-normal text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-500"
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black"
            data-cursor-hover
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - White theme */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white z-[100]"
          >
            <div className="flex flex-col items-center justify-center h-full px-8 pt-24 pb-20">
              {navLinks.map((link, index) => {
                const commonProps = {
                  key: link.name,
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { delay: index * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                  className: "block py-4 text-3xl font-light text-gray-600 hover:text-black transition-colors duration-300",
                  onClick: () => setIsOpen(false)
                };

                if (link.isAnchor) {
                  return (
                    <motion.a
                      {...commonProps}
                      href={isHomePage ? link.href : `/${link.href}`}
                    >
                      {link.name}
                    </motion.a>
                  );
                }

                return (
                  <MotionLink
                    {...commonProps}
                    to={link.href}
                  >
                    {link.name}
                  </MotionLink>
                );
              })}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 px-8 py-3 text-lg font-normal text-white bg-black rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;