// src/components/TeamMemberDetail.tsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // ⬅️ useNavigate add kiya
import { ArrowLeft, Linkedin, Twitter, Facebook } from 'lucide-react';
import { teamMembers } from '../data/teamData';

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // ⬅️ yahan instance banaya
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const member = teamMembers.find((m) => m.id === id);

  function SocialIcon({ label }: { label: string }) {
    if (label === 'linkedin') return <Linkedin size={20} />;
    if (label === 'twitter') return <Twitter size={20} />;
    return <Facebook size={20} />;
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-bg text-text-light">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Member Not Found</h2>
          <Link to="/about" className="text-accent-yellow hover:underline">
            Return to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-primary-bg text-text-light min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-accent-yellow/5 opacity-20 pointer-events-none blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🔙 Back Button – updated */}
        <button
  type="button"
  onClick={() => navigate('/#team')}   // ⬅️ AB YE USE KARO
  className="inline-flex items-center text-text-medium hover:text-accent-yellow mb-10 transition-colors duration-200 group"
>
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Team
        </button>

        <div className="bg-secondary-bg rounded-3xl p-8 md:p-12 border border-border-light shadow-2xl">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Image Column */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-pink-500 shadow-xl mx-auto border-4 border-pink-500">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Socials (Desktop) */}
              <div className="hidden md:flex justify-center gap-3 mt-6">
                {member.socials?.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    className="p-3 rounded-lg bg-tertiary-bg text-text-light hover:bg-accent-yellow hover:text-primary-bg transition-all duration-300 border border-border-light hover:scale-110"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{member.name}</h1>
              <div className="inline-block px-4 py-1.5 rounded-full bg-tertiary-bg text-accent-yellow border border-accent-yellow/50 mb-8 font-medium tracking-wide">
                {member.role}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-text-light border-b border-border-light pb-2 inline-block md:block">
                About
              </h3>
              <p className="text-text-medium leading-relaxed text-lg mb-8">
                {member.fullBio}
              </p>

              {/* Skills Section */}
              {member.skills && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-text-light">Expertise</h3>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary-bg rounded-lg text-sm text-text-medium border border-border-light shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Socials */}
              <div className="md:hidden flex justify-center gap-4 mt-8 pt-8 border-t border-border-light">
                {member.socials?.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    className="p-3 rounded-lg bg-tertiary-bg text-text-light hover:bg-accent-yellow hover:text-primary-bg border border-border-light"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
