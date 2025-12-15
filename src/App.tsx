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
          <Route path="/process" element={<ProcessView />} />

          {/* Blog Page Route */}
          <Route path="/blog" element={<BlogPage />} />
          
        </Routes>

        {/* Footer bhi har page par dikhega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
