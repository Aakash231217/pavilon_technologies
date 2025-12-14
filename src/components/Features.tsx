import { Rocket, Shield, Headphones, Clock, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
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
    <section id="features" className="relative py-24 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium text-amber-300">
            <Sparkles size={14} />
            Why Work With Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Why <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
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
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-indigo-500/20 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">99%</div>
            <div className="text-gray-400 font-medium">Client Satisfaction</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-pink-500/20 to-rose-500/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-400 font-medium">Projects Completed</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">24h</div>
            <div className="text-gray-400 font-medium">Average Response</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
