// src/components/BlogPage.tsx
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pavion{' '}
            <span className="text-gradient">
              Insights
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on technology, innovation, and digital transformation from our engineering team.
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
              <div className="glass-card rounded-3xl overflow-hidden hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-300 border border-white/5 hover:border-white/20">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image/Gradient */}
                  <div className={`h-64 md:h-auto min-h-[300px] bg-gradient-to-br ${blogPosts[0].gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-8 left-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        {(() => {
                          const IconComponent = blogPosts[0].icon;
                          return <IconComponent size={32} className="text-white" />;
                        })()}
                      </div>
                    </div>
                    <div className="absolute top-8 left-8">
                      <span className="px-4 py-2 rounded-xl text-sm font-bold bg-black/30 backdrop-blur-md border border-white/20 text-white">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  
                  {/* Featured Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className={`text-sm font-bold bg-gradient-to-r ${blogPosts[0].gradient} bg-clip-text text-transparent mb-4`}>
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(1).map((blog) => {
            const IconComponent = blog.icon;
            return (
              <motion.article
                key={blog.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <Link to={`/blog/${blog.slug}`} className="block h-full">
                  <div className="h-full glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 border border-white/5 hover:border-white/20">
                    {/* Card Header Gradient */}
                    <div className={`h-40 bg-gradient-to-br ${blog.gradient} relative overflow-hidden`}>
                      {/* Overlay texture */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-black/10" />

                      <div className="absolute bottom-5 left-5">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                          <IconComponent size={24} className="text-white" />
                        </div>
                      </div>
                      <div className="absolute top-5 right-5">
                        <span className="px-3 py-1 rounded-lg text-xs font-bold bg-black/20 backdrop-blur-md border border-white/10 text-white tracking-wide">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8 flex flex-col h-[calc(100%-160px)]">
                      <h2 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {blog.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-6 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {blog.readTime}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="glass-panel rounded-3xl p-10 md:p-14 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50" />
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg relative z-10">
              Let's discuss how Pavion Technologies can help you achieve your goals with innovative technology solutions.
            </p>
            <Link
              to="/#contact"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
