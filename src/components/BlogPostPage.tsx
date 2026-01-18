// src/components/BlogPostPage.tsx
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag, Share2, Twitter, Linkedin, Facebook, Copy } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogBySlug, getRelatedPosts, BlogPost } from '../data/blogData';
import SEO from './SEO';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(slug, 2));
        // Scroll to top when post changes
        window.scrollTo(0, 0);
      } else {
        navigate('/blog');
      }
    }
  }, [slug, navigate]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    if (post) {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    }
  };

  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-400/30 border-t-indigo-400 rounded-full animate-spin" />
      </div>
    );
  }

  const IconComponent = post.icon;

  return (
    <>
      <SEO
        title={`${post.title} | Pavion Technologies Blog`}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        canonical={`https://paviontechnologies.com/blog/${post.slug}`}
        ogUrl={`https://paviontechnologies.com/blog/${post.slug}`}
        ogType="article"
      />

      <div className="min-h-screen bg-background pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Article Header */}
            <header className="mb-12">
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <IconComponent size={20} className="text-white" />
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent border border-white/10`}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm pb-8 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-indigo-400" />
                  <span>{post.author}</span>
                  {post.authorRole && (
                    <span className="text-gray-500">• {post.authorRole}</span>
                  )}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-pink-400" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Article Content */}
            <div className="glass-panel rounded-2xl p-8 md:p-12 mb-12">
              <div className="prose prose-invert prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Handle bold headers like **Header**
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h2>
                    );
                  }
                  
                  // Handle headers followed by content
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={index} className="text-gray-300 leading-relaxed mb-6">
                        {parts.map((part, partIndex) => (
                          partIndex % 2 === 1 
                            ? <strong key={partIndex} className="text-white font-semibold">{part}</strong>
                            : part
                        ))}
                      </p>
                    );
                  }

                  // Handle bullet points
                  if (paragraph.includes('• ')) {
                    const items = paragraph.split('• ').filter(item => item.trim());
                    return (
                      <ul key={index} className="list-disc list-inside text-gray-300 leading-relaxed mb-6 space-y-2">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="pl-2">{item.trim()}</li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-white/10">
                <Tag size={16} className="text-gray-400 mr-2" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-indigo-400/50 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-8 border-t border-white/10">
                <span className="flex items-center gap-2 text-gray-400 text-sm">
                  <Share2 size={16} />
                  Share this article
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={shareOnTwitter}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  <button
                    onClick={shareOnLinkedin}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button
                    onClick={shareOnFacebook}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-600 hover:bg-blue-500/10 transition-all"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </button>
                  <button
                    onClick={copyLink}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-all relative"
                    aria-label="Copy link"
                  >
                    <Copy size={18} />
                    {copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-indigo-500 text-white text-xs rounded whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => {
                    const RelatedIcon = relatedPost.icon;
                    return (
                      <motion.div
                        key={relatedPost.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="block glass-card rounded-xl overflow-hidden hover:border-indigo-400/30 transition-all"
                        >
                          <div className={`h-24 bg-gradient-to-br ${relatedPost.gradient} relative`}>
                            <div className="absolute bottom-3 left-4">
                              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <RelatedIcon size={16} className="text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <span className={`text-xs font-bold bg-gradient-to-r ${relatedPost.gradient} bg-clip-text text-transparent`}>
                              {relatedPost.category}
                            </span>
                            <h3 className="text-lg font-bold text-white mt-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
                              <span>{relatedPost.readTime}</span>
                              <ArrowRight size={14} />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16"
            >
              <div className="glass-panel rounded-3xl p-10 md:p-14 border border-white/10 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
                  Let's discuss how Pavion Technologies can help you leverage cutting-edge AI solutions for your specific needs.
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
          </motion.div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
