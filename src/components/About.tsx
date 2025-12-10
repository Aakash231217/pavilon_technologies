// src/components/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Zap, Users } from 'lucide-react';
import { teamMembers } from '../data/teamData'; // Importing the data
import creativeImg from '../Images/pavion1.png'
type Highlight = { icon: React.ReactNode; title: string; description: string };

const About: React.FC = () => {
  const highlights: Highlight[] = [
    { icon: <Target size={28} />, title: 'Mission Driven', description: 'Committed to delivering excellence' },
    { icon: <Zap size={28} />, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { icon: <Award size={28} />, title: 'Quality First', description: 'High standards in code and design' },
    { icon: <Users size={28} />, title: 'Client Focused', description: 'Your success is our priority' },
  ];

  return (
    <>
      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-pink-600">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              A passionate team dedicated to crafting innovative solutions
            </p>
          </div>

          {/* Main two-column content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left block (creative development) */}
            <div className="relative rounded-2xl h-96 overflow-hidden shadow-xl border border-gray-800">
              <img
                src={creativeImg}
                alt="Creative Development"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                  Creative Development
                </div>
                <p className="text-gray-100 text-lg">
                  Building Digital Excellence
                </p>
              </div>
            </div>

            {/* Right block (text + tech chips) */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Ideas Into Reality
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">
                At Pavion Technologies, we believe in purposeful innovation. Our team crafts powerful
                solutions by merging deep technical expertise with creative strategy. We specialize in
                end-to-end software development, transformative AI/ML projects, and engaging web development.
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                Our expertise spans across modern frameworks, clean code principles, and best practices in software engineering.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-blue-600 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-pink-500"
              >
                <div className="mb-4 text-pink-600">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION (Clickable Cards) --- */}
      <section
        id="team"
        className="relative py-20 bg-gray-50 text-gray-900 overflow-hidden"
      >
        {/* Soft background accents (same style as other sections) */}
        <div className="absolute -left-32 -top-20 w-96 h-96 rounded-full bg-pink-500/10 opacity-40 pointer-events-none blur-3xl"></div>
        <div className="absolute right-0 -bottom-32 w-96 h-96 rounded-full bg-blue-500/10 opacity-30 pointer-events-none blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-pink-600">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mt-3 max-w-3xl mx-auto">
              Click on a profile to view full details.
            </p>
          </div>

          {/* Team cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((m) => (
              <Link to={`/team/${m.id}`} key={m.id} className="group block">
                <article
                  className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-gray-200 shadow-lg hover:shadow-2xl hover:border-pink-500/60 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
                >
                  {/* Left vertical accent bar */}
                  <div className="absolute -left-2 top-6 bottom-6 w-1 rounded-r-xl bg-gradient-to-b from-blue-600 to-pink-600 opacity-90 group-hover:w-2 transition-all duration-300"></div>

                  {/* Avatar */}
                  <div className="relative z-10 -mt-12">
                    <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-pink-500/40 group-hover:ring-pink-500 transition-all duration-300">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Name & role */}
                  <div className="mt-6 z-10">
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {m.name}
                    </h3>
                    <div className="mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-blue-700 border border-blue-200">
                      {m.role}
                    </div>
                  </div>

                  {/* Short bio */}
                  <p className="mt-4 text-gray-600 max-w-xl mx-auto line-clamp-3 group-hover:text-gray-800 transition-colors">
                    {m.shortBio}
                  </p>

                  {/* Hover CTA */}
                  <div className="mt-6 text-pink-600 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Full Profile &rarr;
                  </div>

                  {/* Bottom accent strip */}
                  <div className="absolute left-0 right-0 bottom-0 h-2 rounded-b-2xl bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Work with our team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
