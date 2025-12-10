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
      blue: 'bg-blue-100',
      pink: 'bg-pink-100',
      yellow: 'bg-yellow-100',
    };
    const textMap: Record<string, string> = {
      blue: 'text-blue-600',
      pink: 'text-pink-600',
      yellow: 'text-yellow-600',
    };

    return `${bgMap[color]} ${textMap[color]}`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-pink-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let&apos;s discuss your project and bring your ideas to life
          </p>
        </div>

        {/* Submission Status Message */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-4 rounded-lg bg-green-100 text-green-700 font-medium flex items-center gap-3 shadow-md">
            <CheckCircle size={24} className="text-green-600" />
            Thank you for your message! It has been successfully sent.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-8 p-4 rounded-lg bg-red-100 text-red-700 font-medium flex items-center gap-3 shadow-md">
            <XCircle size={24} className="text-red-600" />
            Oops! Something went wrong. Please try again or contact us directly via email.
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I&apos;m always excited to work on new projects and collaborate with innovative teams.
              Whether you have a question or want to discuss a potential project, feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${getInfoColorClass(
                      info.color as 'blue' | 'pink' | 'yellow'
                    )}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{info.title}</div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
