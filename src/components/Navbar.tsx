import { Menu, X, } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../Images/logo.png';

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
    { name: 'Features', href: '#features', isAnchor: true },
    { name: 'Portfolio', href: '#portfolio', isAnchor: true },
    { name: 'Blog', href: '/blog', isAnchor: false },
    { name: 'Contact', href: '#contact', isAnchor: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg'
          : 'bg-white/80 backdrop-blur-xl border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a href="#home" className="flex items-center gap-3">
              <img
                className="w-40 h-auto object-contain"
                src={logoImage}
                alt="Pavion Technologies"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              link.isAnchor ? (
                <motion.a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </motion.a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 group inline-block"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </motion.span>
                </Link>
              )
            ))}
            
            {/* CTA Button */}
            
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-gray-200 transition-colors"
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
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200 px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                link.isAnchor ? (
                  <motion.a
                    key={link.name}
                    href={isHomePage ? link.href : `/${link.href}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                )
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-center font-semibold rounded-xl"
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