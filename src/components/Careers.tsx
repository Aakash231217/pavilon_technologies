// src/components/Careers.tsx
import React, { useState } from 'react';
import {
  Briefcase,
  Send,
  CheckCircle,
  XCircle,
  Upload,
  User,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SubmitStatus = 'loading' | 'success' | 'error' | null;

interface CareerFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  coverLetter: string;
  resume: File | null;
}

const FRONTEND_API_KEY = 'my-secret-key-123';
const API_BASE_URL = 'https://pavilon-technologies-tqaq.onrender.com';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    coverLetter: '',
    resume: null,
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [resumeFileName, setResumeFileName] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('linkedinUrl', formData.linkedinUrl);
      formDataToSend.append('coverLetter', formData.coverLetter);

      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch(`${API_BASE_URL}/api/careers`, {
        method: 'POST',
        headers: {
          'x-api-key': FRONTEND_API_KEY,
        },
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          linkedinUrl: '',
          coverLetter: '',
          resume: null,
        });
        setResumeFileName('');
      } else {
        console.error('Career API error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch error during career form submission:', error);
      setSubmitStatus('error');
    }

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        resume: file,
      });
      setResumeFileName(file.name);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-blue text-sm font-medium mb-6 backdrop-blur-sm">
            <Briefcase size={16} />
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build Your Career <span className="text-gradient">With Us</span>
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
            Submit your application and let's create the future together.
          </p>
        </motion.div>

        {/* Submission Status Message */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-8 p-4 rounded-xl font-medium flex items-center gap-3 backdrop-blur-md border ${submitStatus === 'success'
                  ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/20 border-red-500/30 text-red-300'
                }`}
            >
              {submitStatus === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
              {submitStatus === 'success' ? 'Thank you for your application! We will be in touch soon.' : 'Oops! Something went wrong. Please try again.'}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px]" />

          <div className="mb-10 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Application Form</h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Fill out the form below to submit your application. We're excited to learn more about you
              and explore how you can contribute to our innovative team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="fullName" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                  <User size={16} className="text-neon-blue" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                  <Mail size={16} className="text-neon-blue" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                  <Phone size={16} className="text-neon-blue" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="location" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                  <MapPin size={16} className="text-neon-blue" />
                  Current Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="linkedinUrl" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                <Linkedin size={16} className="text-neon-blue" />
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="resume" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                <Upload size={16} className="text-neon-blue" />
                Upload Resume/CV *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center gap-3 w-full px-5 py-8 rounded-xl bg-black/40 border-2 border-dashed border-white/10 hover:border-neon-blue/50 hover:bg-white/5 transition-all text-gray-400 cursor-pointer group"
                >
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-blue/10 transition-colors">
                    <FileText size={24} className="group-hover:text-neon-blue transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white font-medium mb-1">{resumeFileName || 'Click to upload your resume'}</span>
                    <span className="block text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="coverLetter" className="flex items-center gap-2 text-gray-300 font-medium mb-3 text-sm">
                <MessageSquare size={16} className="text-neon-blue" />
                Cover Letter / Why Join Us? *
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 focus:outline-none transition-all text-white placeholder-gray-600 resize-none"
                placeholder="Tell us about yourself, your experience, skills, and why you'd like to join Pavion Technologies..."
              />
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-indigo-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
            >
              {submitStatus === 'loading' ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <Send size={20} />
              )}
              {submitStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-neon-blue mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle size={28} />
                </div>
                <h4 className="font-bold text-white mb-2">Review</h4>
                <p className="text-gray-400 text-sm">We'll carefully review your application</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-neon-purple mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <h4 className="font-bold text-white mb-2">Contact</h4>
                <p className="text-gray-400 text-sm">Shortlisted candidates will be contacted</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase size={28} />
                </div>
                <h4 className="font-bold text-white mb-2">Interview</h4>
                <p className="text-gray-400 text-sm">We'll schedule interviews with selected candidates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
