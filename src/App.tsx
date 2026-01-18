// src/App.tsx
import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroNew from './components/HeroNew';
import SEO from './components/SEO';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

// Lazy load components below the fold for better initial performance
const About = lazy(() => import('./components/About'));
const HorizontalShowcase = lazy(() => import('./components/HorizontalShowcase'));
const ImageShowcase = lazy(() => import('./components/ImageShowcase'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const Features = lazy(() => import('./components/Features'));
const AISection = lazy(() => import('./components/AISection'));
const PortfolioNew = lazy(() => import('./components/PortfolioNew'));
const TestimonialsNew = lazy(() => import('./components/TestimonialsNew'));
const ContactNew = lazy(() => import('./components/ContactNew'));
const FooterNew = lazy(() => import('./components/FooterNew'));
const TeamMemberDetail = lazy(() => import('./components/TeamMemberDetail'));
const ProcessView = lazy(() => import('./components/ProcessView'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogPostPage = lazy(() => import('./components/BlogPostPage'));
const Careers = lazy(() => import('./components/Careers'));

// Minimal loading fallback
const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-lime-400/30 border-t-lime-400 rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add lenis class to html
    document.documentElement.classList.add('lenis');
  }, []);

  return (
    <Router>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* Custom Cursor - GSAP powered */}
      <CustomCursor />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      <SmoothScroll>
        <div className={`min-h-screen ${isLoading ? 'overflow-hidden' : ''}`}>
          
          {/* Navbar */}
          <Navbar />
          
          <Routes>
            {/* Main Home Page Route */}
            <Route path="/" element={
              <>
                <SEO />
                <HeroNew />
                <Suspense fallback={<SectionLoader />}>
                  <About />
                  <ProcessSection />
                  <HorizontalShowcase />
                  <ImageShowcase />
                  <StatsSection />
                  <AISection />
                  <Features />
                  <PortfolioNew />
                  <TestimonialsNew />
                  <ContactNew />
                </Suspense>
              </>
            } />

            {/* Team Detail Route */}
            <Route path="/team/:id" element={
              <Suspense fallback={<SectionLoader />}>
                <TeamMemberDetail />
              </Suspense>
            } />

            {/* ProcessView Route */}
            <Route path="/process" element={
              <>
                <SEO 
                  title="Our Development Process - Pavion Technologies"
                  description="Discover Pavion Technologies' proven software development methodology. From consultation to deployment, we ensure quality, transparency, and timely delivery."
                  canonical="https://paviontechnologies.com/process"
                  ogUrl="https://paviontechnologies.com/process"
                />
                <Suspense fallback={<SectionLoader />}>
                  <ProcessView />
                </Suspense>
              </>
            } />

            {/* Blog Page Route */}
            <Route path="/blog" element={
              <>
                <SEO 
                  title="Tech Insights & Blog - Pavion Technologies"
                  description="Stay updated with latest technology trends, AI innovations, software development best practices, and industry insights from Pavion Technologies experts."
                  keywords="technology blog, AI insights, software development trends, tech articles, programming best practices, digital transformation"
                  canonical="https://paviontechnologies.com/blog"
                  ogUrl="https://paviontechnologies.com/blog"
                />
                <Suspense fallback={<SectionLoader />}>
                  <BlogPage />
                </Suspense>
              </>
            } />

            {/* Individual Blog Post Route */}
            <Route path="/blog/:slug" element={
              <Suspense fallback={<SectionLoader />}>
                <BlogPostPage />
              </Suspense>
            } />

            {/* Careers Page Route */}
            <Route path="/careers" element={
              <>
                <SEO 
                  title="Careers - Join Pavion Technologies"
                  description="Build your career with Pavion Technologies. Explore exciting opportunities in software development, AI, and innovation. Apply now to join our talented team."
                  keywords="careers, jobs, software developer jobs, AI careers, tech jobs, join pavion technologies"
                  canonical="https://paviontechnologies.com/careers"
                  ogUrl="https://paviontechnologies.com/careers"
                />
                <Suspense fallback={<SectionLoader />}>
                  <Careers />
                </Suspense>
              </>
            } />
            
          </Routes>

          {/* Footer */}
          <Suspense fallback={<SectionLoader />}>
            <FooterNew />
          </Suspense>
          
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
