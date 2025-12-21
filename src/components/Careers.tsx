import React, { useState } from 'react';
import {
  Briefcase,
  Send,
  CheckCircle,
  XCircle,
  Sparkles,
  Upload,
  User,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  FileText,
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
const API_BASE_URL = 'https://pavion-backend-1.onrender.com/';

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
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950 relative overflow-hidden min-h-screen">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/40 z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-600/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Briefcase size={16} />
            Join Our Team
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Your <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Career</span> With Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            Submit your application and let's create the future together.
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
              Thank you for your application! We'll review it and get back to you soon.
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Application Form</h2>
            <p className="text-gray-300 leading-relaxed">
              Fill out the form below to submit your application. We're excited to learn more about you 
              and explore how you can contribute to our innovative team.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <User size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Mail size={18} />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Phone size={18} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="location" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <MapPin size={18} />
                  Current Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-400"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="linkedinUrl" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                <Linkedin size={18} />
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-400"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="resume" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                <Upload size={18} />
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
                  className="flex items-center justify-center gap-3 w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 hover:border-indigo-400 hover:bg-white/15 transition-all text-gray-300 cursor-pointer"
                >
                  <FileText size={20} />
                  {resumeFileName || 'Choose file (PDF, DOC, DOCX)'}
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="coverLetter" className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                <Sparkles size={18} />
                Cover Letter / Why Join Us? *
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all text-white placeholder-gray-400 resize-none"
                placeholder="Tell us about yourself, your experience, skills, and why you'd like to join Pavion Technologies..."
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
              {submitStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 mb-3">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-semibold text-white mb-2">Review</h4>
                <p className="text-gray-300 text-sm">We'll carefully review your application</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 mb-3">
                  <Mail size={24} />
                </div>
                <h4 className="font-semibold text-white mb-2">Contact</h4>
                <p className="text-gray-300 text-sm">Shortlisted candidates will be contacted</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 mb-3">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-semibold text-white mb-2">Interview</h4>
                <p className="text-gray-300 text-sm">We'll schedule interviews with selected candidates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
