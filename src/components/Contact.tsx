import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SubmitStatus = 'loading' | 'success' | 'error' | null;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 👇 Ye pass-key frontend wali (backend ke CONTACT_API_KEY se match honi chahiye)
const FRONTEND_API_KEY = 'my-secret-key-123'; // ✅ same as backend .env

const API_BASE_URL = 'https://pavilon-technologies-tqaq.onrender.com'; 

const Contact: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for submission status (null, 'loading', 'success', 'error')
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // 👇 yahan tumhara backend ka URL
     const response = await fetch(`${API_BASE_URL}/api/contact`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': FRONTEND_API_KEY,
  },
  body: JSON.stringify(formData),
});

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Contact API error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch error during form submission:', error);
      setSubmitStatus('error');
    }

    // Hide status after 5s
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'Contact@paviontechnologies.com',
      color: 'blue',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7455975301 , +91 9528991434',
      color: 'pink',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: '1st Floor, Plus Offices, Landmark Cyber Park, Sector 67, Gurugam, Haryana, India',
      color: 'yellow',
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: '#', color: 'gray' },
    { icon: <Linkedin size={24} />, url:'https://www.linkedin.com/in/pavion-technologies-565b25392' , color: 'blue' },
    { icon: <Twitter size={24} />, url: '#', color: 'sky' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            Ready to Transform Your Business?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your Project
          </h2>
          <div className="w-16 h-0.5 bg-indigo-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Partner with us to build innovative digital solutions that drive your business forward
          </p>
        </motion.div>

        {/* Submission Status Message */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium flex items-center gap-3 backdrop-blur-md"
            >
              <CheckCircle size={24} className="text-emerald-400" />
              Thank you for your message! It has been successfully sent.
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 font-medium flex items-center gap-3 backdrop-blur-md"
            >
              <XCircle size={24} className="text-red-400" />
              Oops! Something went wrong. Please try again or contact us directly via email.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Start Your Digital Journey</h3>
            <p className="text-gray-200 mb-8 leading-relaxed text-lg">
              Ready to elevate your business with cutting-edge technology? We're here to help you build 
              custom software solutions, AI-powered applications, and scalable platforms. Share your vision 
              with us, and let's create something extraordinary together.
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors duration-200"
                >
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{info.title}</div>
                    <div className="text-gray-400">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 rounded-xl p-8 border border-slate-800"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Project Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="e.g., Web Development, Mobile App, AI Solution"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <Send size={20} />
                )}
                {submitStatus === 'loading' ? 'Sending...' : 'Start Your Project'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
