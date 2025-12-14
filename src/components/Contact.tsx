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
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

// 3D Background Scene
const Scene3D = () => (
  <>
    <ambientLight intensity={0.3} />
    <pointLight position={[10, 10, 10]} intensity={0.8} color="#818cf8" />
    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f472b6" />
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[-5, 2, -6]} scale={1.5}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <MeshDistortMaterial color="#6366f1" transparent opacity={0.3} distort={0.3} speed={2} />
      </mesh>
    </Float>
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={[5, -2, -5]} scale={1.2}>
        <octahedronGeometry args={[1]} />
        <MeshDistortMaterial color="#ec4899" transparent opacity={0.3} distort={0.4} speed={3} />
      </mesh>
    </Float>
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[0, 3, -7]} scale={0.9}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color="#f59e0b" transparent opacity={0.25} distort={0.5} speed={2.5} />
      </mesh>
    </Float>
  </>
);

type SubmitStatus = 'loading' | 'success' | 'error' | null;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 👇 Ye pass-key frontend wali (backend ke CONTACT_API_KEY se match honi chahiye)
const FRONTEND_API_KEY = 'my-secret-key-123'; // ✅ same as backend .env

const API_BASE_URL = 'https://pavion-backend-1.onrender.com/'; 

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
      value: 'account@paviontechnologies.com',
      color: 'blue',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '7455975301 , 9528991434',
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

  // Helper function to dynamically construct Tailwind classes
  const getInfoColorClass = (color: 'blue' | 'pink' | 'yellow') => {
    const bgMap: Record<string, string> = {
      blue: 'bg-indigo-500/20',
      pink: 'bg-pink-500/20',
      yellow: 'bg-amber-500/20',
    };
    const textMap: Record<string, string> = {
      blue: 'text-indigo-400',
      pink: 'text-pink-400',
      yellow: 'text-amber-400',
    };

    return `${bgMap[color]} ${textMap[color]}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/50 to-slate-950 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80 z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Let's Connect
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your project and bring your ideas to life
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
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              We're always excited to work on new projects and collaborate with innovative teams.
              Whether you have a question or want to discuss a potential project, feel free to reach out!
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div
                    className={`p-3 rounded-xl ${getInfoColorClass(
                      info.color as 'blue' | 'pink' | 'yellow'
                    )} border border-white/10 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{info.title}</div>
                    <div className="text-gray-400">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
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
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
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
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-pink-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
