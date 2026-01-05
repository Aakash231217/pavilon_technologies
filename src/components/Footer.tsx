import { Twitter, Linkedin, Instagram, Facebook, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const siteMapLinks = [
    { name: 'Home', href: '#home', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'AI', href: '#ai', isRoute: false },
    { name: 'Portfolio', href: '#portfolio', isRoute: false },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Contact', href: '#contact', isRoute: false },
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
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-800" />

      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <div className="text-center md:text-left">
              <span className="text-indigo-400 text-sm font-medium">Stay Updated</span>
              <h3 className="text-2xl font-bold mb-2 mt-1">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates, news and special offers.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:outline-none text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
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
                <span className="text-sm">Contact@paviontechnologies.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <Phone size={16} className="text-pink-400" />
                </div>
                <span className="text-sm">+91 7455975301 , +91 9528991434</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/5 mt-0.5">
                  <MapPin size={16} className="text-amber-400" />
                </div>
                <span className="text-sm">1st Floor, Plus Offices, Landmark Cyber Park, Sector 67, Gurugam, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {siteMapLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-indigo-400 transition-colors"></span>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-indigo-400 transition-colors"></span>
                      {link.name}
                    </a>
                  )}
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
                  <a 
                    key={index} 
                    href={link.href}
                    className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
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
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors duration-200"
            >
              <ArrowUp size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-gray-300">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
