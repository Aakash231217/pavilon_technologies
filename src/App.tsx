// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroNew from './components/HeroNew';
import About from './components/About';
import HorizontalShowcase from './components/HorizontalShowcase';
import ImageShowcase from './components/ImageShowcase';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import Features from './components/Features';
import AISection from './components/AISection';
import PortfolioNew from './components/PortfolioNew';
import TestimonialsNew from './components/TestimonialsNew';
import ContactNew from './components/ContactNew';
import FooterNew from './components/FooterNew';
import TeamMemberDetail from './components/TeamMemberDetail';
import ProcessView from './components/ProcessView';
import BlogPage from './components/BlogPage';
import Careers from './components/Careers';
import SEO from './components/SEO';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

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
              </>
            } />

            {/* Team Detail Route */}
            <Route path="/team/:id" element={<TeamMemberDetail />} />

            {/* ProcessView Route */}
            <Route path="/process" element={
              <>
                <SEO 
                  title="Our Development Process - Pavion Technologies"
                  description="Discover Pavion Technologies' proven software development methodology. From consultation to deployment, we ensure quality, transparency, and timely delivery."
                  canonical="https://paviontechnologies.com/process"
                  ogUrl="https://paviontechnologies.com/process"
                />
                <ProcessView />
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
                <BlogPage />
              </>
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
                <Careers />
              </>
            } />
            
          </Routes>

          {/* Footer */}
          <FooterNew />
          
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
