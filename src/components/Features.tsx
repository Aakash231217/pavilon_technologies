// src/components/Features.tsx
import { Rocket, Shield, Headphones, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative approaches to solve complex problems',
      color: 'text-neon-blue',
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust error handling',
      color: 'text-neon-purple',
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Delivery',
      description: 'Consistent on-time project delivery with transparent communication',
      color: 'text-human-warmth',
    },
    {
      icon: <Headphones size={32} />,
      title: '24/7 Support',
      description: 'Dedicated support and maintenance for all your projects',
      color: 'text-green-400',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that grow with your business needs',
      color: 'text-indigo-400',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every development stage',
      color: 'text-cyan-400',
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
    <section id="features" className="relative py-16 md:py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-neon-blue backdrop-blur-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            Why Work With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6" />
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
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 hover:border-neon-blue/30 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-white/5 ${feature.color} mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
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
          {[
            { value: '100%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Projects Completed' },
            { value: '24h', label: 'Average Response' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">{stat.value}</div>
              <div className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
