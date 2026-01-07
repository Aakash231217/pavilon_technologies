// src/components/TeamMemberDetail.tsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';
import { teamMembers } from '../data/teamData';

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Member Not Found</h2>
          <Link to="/#about" className="text-neon-blue hover:text-white transition-colors">
            Return to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 bg-background text-white min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button
          type="button"
          onClick={() => navigate('/#team')}
          className="inline-flex items-center text-gray-400 hover:text-white mb-10 transition-colors duration-200 group"
        >
          <div className="p-2 rounded-full bg-white/5 mr-3 group-hover:bg-neon-blue group-hover:text-black transition-all">
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </div>
          Back to Team
        </button>

        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Glow Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-pink-500" />

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Image Column */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-[20px] opacity-40" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl mx-auto">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Socials (Desktop) */}
              <div className="hidden md:flex justify-center gap-4 mt-8">
                {member.socials?.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-neon-blue hover:text-black transition-all duration-300 border border-white/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  >
                    <SocialIcon label={s.label} />
                  </a>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{member.name}</h1>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-neon-blue border border-neon-blue/20 mb-8 font-medium tracking-wide">
                {member.role}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-opacity-80">
                  About
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {member.fullBio}
                </p>
              </div>

              {/* Skills Section */}
              {member.skills && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-opacity-80">Expertise</h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 shadow-sm hover:border-neon-purple/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Socials */}
              <div className="md:hidden flex justify-center gap-4 mt-8 pt-8 border-t border-white/10">
                {member.socials?.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-neon-blue hover:text-black transition-all duration-300 border border-white/10"
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
