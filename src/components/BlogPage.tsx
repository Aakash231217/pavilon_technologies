// src/components/BlogPage.tsx
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Shield, Lightbulb, Users, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  icon: React.ElementType;
  readTime: string;
  date: string;
  author: string;
  gradient: string;
  tags: string[];
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Why Pavion Technologies Leads in AI Innovation",
    excerpt: "Discover how our cutting-edge AI solutions are transforming businesses across industries with intelligent automation and machine learning.",
    content: `At Pavion Technologies, we're not just following AI trends – we're setting them. Our team of expert data scientists and AI engineers work tirelessly to develop solutions that don't just meet current needs but anticipate future challenges.

Our AI-powered platforms have helped businesses achieve:
• 40% reduction in operational costs through intelligent automation
• 3x faster decision-making with real-time analytics
• 95% accuracy in predictive modeling

What sets us apart is our commitment to ethical AI development. We believe technology should enhance human capabilities, not replace them. Our AI solutions are designed to augment your workforce, providing them with powerful tools that make their jobs easier and more impactful.

From natural language processing to computer vision, our AI capabilities span the entire spectrum of modern machine learning. We've successfully deployed AI solutions across healthcare, finance, manufacturing, and retail sectors, each time customizing our approach to meet the unique challenges of the industry.

Our proprietary AI frameworks are built on years of research and development, incorporating the latest advances in deep learning, reinforcement learning, and neural network architectures. This foundation allows us to deliver solutions that are not only powerful but also scalable and maintainable.`,
    category: "AI & Innovation",
    icon: Lightbulb,
    readTime: "5 min read",
    date: "December 10, 2024",
    author: "Pavion Tech Team",
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Artificial Intelligence", "Machine Learning", "Innovation"]
  },
  {
    id: 2,
    title: "Our Client-Centric Approach: The Pavion Difference",
    excerpt: "Learn about our unique methodology that puts clients at the center of everything we do, ensuring solutions that truly fit your needs.",
    content: `At the heart of Pavion Technologies lies an unwavering commitment to our clients. We don't just build software – we build partnerships that last.

Our client-centric approach begins with deep listening. Before we write a single line of code, we invest significant time understanding your business, your challenges, and your vision for the future. This discovery phase is crucial because it ensures that every solution we develop is precisely aligned with your strategic objectives.

What makes our approach unique:

**Dedicated Teams**: Every client gets a dedicated team that becomes an extension of your organization. Our team members take the time to understand your industry, your competitive landscape, and your internal processes.

**Transparent Communication**: We believe in radical transparency. You'll always know where your project stands, what challenges we're facing, and how we're addressing them. Our project management dashboards give you real-time visibility into every aspect of development.

**Iterative Development**: We don't disappear for months and return with a finished product. Instead, we work in short sprints, delivering working software every two weeks. This allows you to provide feedback early and often, ensuring the final product exceeds your expectations.

**Post-Launch Support**: Our relationship doesn't end at launch. We provide comprehensive support and maintenance, continuously monitoring and optimizing your solution to ensure it delivers maximum value.

The result? A 98% client satisfaction rate and an average partnership duration of over 4 years.`,
    category: "Client Success",
    icon: Users,
    readTime: "4 min read",
    date: "December 8, 2024",
    author: "Pavion Tech Team",
    gradient: "from-purple-600 to-pink-500",
    tags: ["Client Success", "Methodology", "Partnership"]
  },
  {
    id: 3,
    title: "Enterprise-Grade Security: Protecting Your Digital Assets",
    excerpt: "Security isn't an afterthought at Pavion. Explore our comprehensive security framework that keeps your data safe.",
    content: `In today's digital landscape, security breaches can devastate businesses. At Pavion Technologies, we've built security into the DNA of everything we create.

Our security-first approach encompasses:

**Multi-Layer Protection**: Every solution we develop features multiple layers of security, from encrypted data transmission to secure authentication protocols. We implement defense-in-depth strategies that protect against both external threats and internal vulnerabilities.

**Compliance Expertise**: Whether you need HIPAA compliance for healthcare, PCI DSS for payment processing, or GDPR for European data protection, our team has the expertise to ensure your solution meets all regulatory requirements. We stay current with evolving regulations so you don't have to.

**Regular Security Audits**: We don't just build secure systems – we continuously test them. Our security team conducts regular penetration testing, vulnerability assessments, and code reviews to identify and address potential weaknesses before they can be exploited.

**Zero-Trust Architecture**: We implement zero-trust security principles, verifying every user, device, and transaction regardless of where they originate. This approach minimizes the attack surface and limits the potential damage from any single compromise.

**24/7 Monitoring**: Our security operations center monitors your systems around the clock, using advanced threat detection algorithms to identify and respond to suspicious activity in real-time.

With Pavion, you're not just getting a technology partner – you're getting a security partner committed to protecting your most valuable digital assets.`,
    category: "Security",
    icon: Shield,
    readTime: "6 min read",
    date: "December 5, 2024",
    author: "Pavion Tech Team",
    gradient: "from-green-500 to-emerald-500",
    tags: ["Cybersecurity", "Data Protection", "Compliance"]
  },
  {
    id: 4,
    title: "Scaling Success: How We Help Startups Become Enterprises",
    excerpt: "From MVP to market leader – discover how Pavion Technologies supports businesses through every stage of growth.",
    content: `Every enterprise was once a startup with a dream. At Pavion Technologies, we specialize in turning those dreams into scalable realities.

Our growth partnership model is designed to support businesses at every stage:

**Startup Phase**: When you're just starting out, speed to market is everything. We help you build MVPs quickly and cost-effectively, focusing on the core features that will validate your concept and attract early users. Our lean development approach ensures you're not burning through capital on features you don't need yet.

**Growth Phase**: As your user base expands, your technology needs to keep pace. We help you scale your infrastructure to handle increased load, optimize your codebase for performance, and add the features your growing customer base demands. Our cloud-native architectures are designed to scale horizontally, allowing you to grow without hitting technical ceilings.

**Enterprise Phase**: When you've established market presence, the focus shifts to optimization, integration, and expansion. We help you integrate with enterprise systems, implement advanced analytics, and expand into new markets with localized solutions.

Success stories that inspire us:
• A fintech startup we helped grew from 1,000 to 1 million users in 18 months
• An e-commerce platform we built handled 10x traffic during holiday peaks without breaking a sweat
• A healthcare app we developed is now used by over 500 hospitals nationwide

Your growth is our growth. When you succeed, we succeed.`,
    category: "Growth & Scaling",
    icon: TrendingUp,
    readTime: "5 min read",
    date: "December 3, 2024",
    author: "Pavion Tech Team",
    gradient: "from-orange-500 to-red-500",
    tags: ["Startups", "Scaling", "Enterprise"]
  },
  {
    id: 5,
    title: "Innovation Lab: Where Tomorrow's Technology is Born Today",
    excerpt: "Take a peek inside our innovation lab where we experiment with emerging technologies before they hit the mainstream.",
    content: `While many companies are still catching up with today's technology, Pavion Technologies is already building tomorrow's. Our Innovation Lab is where the future takes shape.

Our R&D team dedicates 20% of their time to experimental projects, exploring emerging technologies and their potential applications. This investment in innovation ensures that our clients always have access to cutting-edge solutions.

Current areas of exploration:

**Quantum Computing Applications**: We're developing algorithms that will be ready when quantum computing becomes commercially viable, giving our clients a head start in leveraging this transformative technology.

**Extended Reality (XR)**: From AR-enhanced maintenance guides to VR training simulations, we're exploring how immersive technologies can transform business operations and customer experiences.

**Edge Computing**: As IoT devices proliferate, processing power is moving to the edge. We're developing frameworks that enable real-time processing at the device level, reducing latency and bandwidth costs.

**Blockchain Solutions**: Beyond cryptocurrency, blockchain offers revolutionary potential for supply chain tracking, identity verification, and secure data sharing. We're building enterprise-ready blockchain solutions.

**Generative AI**: We're at the forefront of integrating large language models and generative AI into business applications, creating intelligent assistants and automated content generation systems.

When you partner with Pavion, you're not just getting today's best practices – you're getting a window into tomorrow's possibilities.`,
    category: "Innovation",
    icon: Rocket,
    readTime: "4 min read",
    date: "November 28, 2024",
    author: "Pavion Tech Team",
    gradient: "from-indigo-500 to-violet-500",
    tags: ["R&D", "Emerging Tech", "Future"]
  },
  {
    id: 6,
    title: "Award-Winning Excellence: Recognition of Our Commitment",
    excerpt: "Our trophy case tells a story of relentless pursuit of excellence. Learn about the recognition we've earned.",
    content: `At Pavion Technologies, excellence isn't just a goal – it's a standard. Our commitment to quality has been recognized by industry leaders, clients, and peers alike.

Recent accolades include:

**Industry Recognition**:
• Top 10 IT Solutions Provider 2024
• Best AI Implementation Award
• Innovation Excellence Award for Healthcare Technology
• Cybersecurity Champion Award

**Client Testimonials That Motivate Us**:

"Pavion Technologies transformed our operations. Their team's expertise and dedication exceeded all expectations. They didn't just deliver a solution – they delivered a competitive advantage." – Fortune 500 Healthcare Company

"Working with Pavion has been a game-changer. Their ability to understand our unique challenges and craft tailored solutions has been invaluable." – Leading Fintech Startup

"The security and scalability of the platform Pavion built for us has allowed us to grow without worry. They're true partners in our success." – E-commerce Leader

**What These Awards Mean to Us**:

While we're honored by industry recognition, the awards that matter most are the outcomes we achieve for our clients:
• $50M+ in cost savings delivered to clients
• 500+ successful projects completed
• 99.9% uptime across all managed solutions
• 150+ enterprise clients served

These numbers represent real impact – businesses transformed, challenges overcome, and goals achieved. They're why we do what we do, and they drive us to keep raising the bar.

When you choose Pavion Technologies, you're choosing a partner with a proven track record of excellence.`,
    category: "Awards & Recognition",
    icon: Award,
    readTime: "5 min read",
    date: "November 25, 2024",
    author: "Pavion Tech Team",
    gradient: "from-yellow-500 to-amber-500",
    tags: ["Awards", "Excellence", "Recognition"]
  }
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

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

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedBlog(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to all blogs
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Blog Header */}
            <div className={`h-2 w-full bg-gradient-to-r ${selectedBlog.gradient} rounded-t-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]`} />
            <div className="glass-panel border-t-0 rounded-b-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white`}>
                  {selectedBlog.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-10 pb-8 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-neon-blue" />
                  {selectedBlog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-neon-purple" />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-pink-400" />
                  {selectedBlog.readTime}
                </span>
              </div>

              {/* Blog Content */}
              <div className="prose prose-invert prose-lg max-w-none">
                {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-white/10">
                <Tag size={16} className="text-gray-400 mr-2" />
                {selectedBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Related Blogs */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">More from Pavion Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogs
                .filter((b) => b.id !== selectedBlog.id)
                .slice(0, 2)
                .map((blog) => (
                  <motion.div
                    key={blog.id}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedBlog(blog)}
                    className="glass-card rounded-xl p-6 cursor-pointer hover:border-neon-blue/30"
                  >
                    <span className={`text-xs font-bold bg-gradient-to-r ${blog.gradient} bg-clip-text text-transparent`}>
                      {blog.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-2 line-clamp-2">{blog.title}</h4>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => {
            const IconComponent = blog.icon;
            return (
              <motion.article
                key={blog.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedBlog(blog)}
                className="group cursor-pointer h-full"
              >
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
                    <h2 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors line-clamp-2">
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
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-black transition-colors">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
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
