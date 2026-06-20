import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 12+ years in tech strategy and digital transformation.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@techflow.com'
      },
      skills: ['Strategic Planning', 'Digital Transformation', 'Team Leadership']
    },
    {
      name: 'David Rodriguez',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack architect passionate about scalable solutions and emerging technologies.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@techflow.com'
      },
      skills: ['Software Architecture', 'Cloud Computing', 'DevOps']
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative director focused on user-centered design and brand experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@techflow.com'
      },
      skills: ['UI/UX Design', 'Brand Strategy', 'User Research']
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3781538/pexels-photo-3781538.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Senior developer with expertise in modern web technologies and mobile development.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'marcus@techflow.com'
      },
      skills: ['React/Node.js', 'Mobile Development', 'Database Design']
    },
    {
      name: 'Lisa Park',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Agile project manager ensuring smooth delivery and client satisfaction.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@techflow.com'
      },
      skills: ['Agile Management', 'Client Relations', 'Process Optimization']
    },
    {
      name: 'Alex Thompson',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Digital marketing expert driving growth through innovative strategies.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@techflow.com'
      },
      skills: ['Digital Marketing', 'SEO/SEM', 'Analytics']
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together years of experience, creative thinking, 
            and technical excellence to deliver outstanding results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
              
              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Twitter size={20} />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Github size={20} />
                  </a>
                )}
                {member.social.email && (
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="opacity-90">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;