// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import AISection from './components/AISection';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamMemberDetail from './components/TeamMemberDetail';
import ProcessView from './components/ProcessView';
import BlogPage from './components/BlogPage';
import Careers from './components/Careers';
import SEO from './components/SEO';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        
        {/* Navbar har page par dikhega, isliye Routes ke bahar hai */}
        <Navbar />
        
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={
            <>
              <SEO />
              <Hero />
              <About />
              <Services />
              <AISection />
              <Features />
              <Portfolio />
              <Contact />
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

        {/* Footer bhi har page par dikhega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
