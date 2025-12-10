import { Twitter, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react';
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
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Services', href: '#' },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/pavion-technologies-565b25392' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/pavion_technologies_pvt_ltd' },
    { icon: <Facebook size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-pink-600 text-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/3 bottom-0 w-px h-full bg-white transform -skew-x-12"></div>
        <div className="absolute right-1/3 bottom-0 w-px h-full bg-white transform -skew-x-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Site Map */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Site Map</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {siteMapLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo & Info - Full width on mobile */}
          <div className="col-span-2 space-y-4 md:space-y-6 text-center md:text-right mt-6 md:mt-0">
            <img src={logo} alt="Pavion Technologies" className="w-48 md:w-64 object-contain mx-auto md:ml-auto md:mr-0" />
            <p className="text-gray-100 max-w-md leading-relaxed mx-auto md:ml-auto md:mr-0 text-xs md:text-sm px-4 md:px-0">
              Empowering businesses with advanced technological solutions to improve efficiency and drive growth.
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-200 hover:text-white transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 border border-white/30 px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-white/10 transition-all duration-300 group text-xs md:text-sm"
              >
                <ArrowUp size={14} className="md:w-4 md:h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="font-medium tracking-wider">BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white text-sm font-semibold">
            Copyright &copy; {currentYear}, Pavion Technologies, All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
