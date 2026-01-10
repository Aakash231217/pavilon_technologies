// src/components/ContactNew.tsx
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Clock, CheckCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const ContactNew: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate form fields
      const fields = formRef.current?.querySelectorAll('.form-field');
      if (fields) {
        gsap.fromTo(fields,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Contact@paviontechnologies.com',
      href: 'mailto:Contact@paviontechnologies.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7455975301',
      href: 'tel:+917455975301',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-indigo-400 font-medium block mb-6">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Build
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Something Great
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. 
            Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="form-field">
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white text-lg focus:border-indigo-400 focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="John Doe"
                    data-cursor-hover
                  />
                </div>

                <div className="form-field">
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white text-lg focus:border-indigo-400 focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="john@company.com"
                    data-cursor-hover
                  />
                </div>

                <div className="form-field">
                  <label className="block text-sm text-gray-400 mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white text-lg focus:border-indigo-400 focus:outline-none transition-colors placeholder-gray-600"
                    placeholder="Your Company"
                    data-cursor-hover
                  />
                </div>

                <div className="form-field">
                  <label className="block text-sm text-gray-400 mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white text-lg focus:border-indigo-400 focus:outline-none transition-colors placeholder-gray-600 resize-none"
                    placeholder="I need a website that..."
                    data-cursor-hover
                  />
                </div>

                <div className="form-field pt-6 flex justify-center">
                  <MagneticButton
                    as="button"
                    className={`px-10 py-4 rounded-full font-medium text-base transition-all duration-500 inline-flex items-center justify-center gap-2 whitespace-nowrap ${
                      isSubmitting 
                        ? 'bg-indigo-500/50 text-white/50 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white'
                    }`}
                    strength={0.3}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="lg:pl-12">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={i}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors group"
                      data-cursor-hover
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block">{info.label}</span>
                        <span className="text-white group-hover:text-indigo-400 transition-colors">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gray-900 to-black border border-white/[0.08]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={40} className="mx-auto mb-4 text-indigo-400/50" />
                    <span className="text-gray-500 text-sm">Gurugram, Haryana, India</span>
                  </div>
                </div>
                {/* Location pin animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping opacity-20" />
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/company/pavion-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all text-sm"
                  data-cursor-hover
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.instagram.com/pavion_technologies_pvt_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all text-sm"
                  data-cursor-hover
                >
                  Instagram
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
