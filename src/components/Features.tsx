import { Rocket, Shield, Headphones, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches to solve complex problems',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust error handling',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Delivery',
      description: 'Consistent on-time project delivery with transparent communication',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Headphones size={32} />,
      title: '24/7 Support',
      description: 'Dedicated support and maintenance for all your projects',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that grow with your business needs',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every development stage',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-300">
            Why Work With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-indigo-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional features that set our services apart from the competition
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-colors duration-200"
            >
              <div className="inline-flex p-3 rounded-lg bg-indigo-500/10 text-indigo-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-slate-700">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-500 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-slate-700">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-500 font-medium">Projects Completed</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-slate-700">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24h</div>
            <div className="text-gray-500 font-medium">Average Response</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
