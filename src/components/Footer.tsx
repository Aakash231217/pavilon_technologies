import { Twitter, Linkedin, Instagram, Facebook, ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../Images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const siteMapLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'AI', href: '#ai' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI Solutions', href: '#ai' },
    { name: 'Cloud Services', href: '#services' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Services', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/pavion-technologies-565b25392', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/pavion_technologies_pvt_ltd', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 blur-[150px] rounded-full" />
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-indigo-500 to-transparent"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-pink-500 to-transparent"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-white/10 backdrop-blur-xl"
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 text-sm font-medium">Stay Updated</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates, news and special offers.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none text-white placeholder-gray-500"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-pink-500/25 transition-shadow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <img src={logo} alt="Pavion Technologies" className="w-48 object-contain mb-6" />
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Empowering businesses with advanced technological solutions to improve efficiency and drive exponential growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <Mail size={16} className="text-indigo-400" />
                </div>
                <span className="text-sm">account@paviontechnologies.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <Phone size={16} className="text-pink-400" />
                </div>
                <span className="text-sm">+91 7455975301</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 mt-0.5">
                  <MapPin size={16} className="text-amber-400" />
                </div>
                <span className="text-sm">Sector 67, Gurugram, Haryana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {siteMapLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-indigo-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-pink-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index} 
                    href={link.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Pavion Technologies. All Rights Reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <ArrowUp size={16} className="text-indigo-400 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium text-gray-300">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
