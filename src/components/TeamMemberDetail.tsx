// src/components/TeamMemberDetail.tsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Twitter, Facebook } from 'lucide-react';
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

        <div className="border-y border-white/10 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-[320px_1fr] md:gap-14 lg:gap-16 items-start">
            <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
              <div className="aspect-[4/5] overflow-hidden bg-white/[0.03]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex justify-center md:justify-start gap-4 mt-8">
                {member.socials?.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-b border-white/20 pb-1 text-sm text-gray-400 hover:text-white hover:border-indigo-400 transition-colors duration-300"
                  >
                    <SocialIcon label={s.label} />
                    <span className="capitalize">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <span className="text-[11px] tracking-[0.28em] uppercase text-indigo-400 font-medium block mb-4">
                {member.role.replace(' ,', ',')}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">{member.name}</h1>

              <div className="mb-10 space-y-5 border-t border-white/10 pt-8">
                {member.fullBio.split('\n').filter(Boolean).map((paragraph) => (
                  <p key={paragraph} className="text-gray-300 leading-relaxed text-base sm:text-lg font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {member.skills && (
                <div>
                  <h3 className="text-[11px] tracking-[0.28em] uppercase text-gray-500 font-medium mb-5">Expertise</h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 border border-white/10 text-sm text-gray-300 hover:border-indigo-400/50 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
