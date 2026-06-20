import React from 'react';
import { Target, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that align with your business goals and drive measurable results.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. We build lasting partnerships based on trust and excellence.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every project undergoes rigorous testing and quality checks to ensure exceptional standards.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TechFlow</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate innovators, designers, and developers who believe in the power 
            of technology to transform businesses and create meaningful impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2018, TechFlow emerged from a simple belief: that every business deserves 
              access to world-class digital solutions. What started as a small team of developers 
              has grown into a full-service digital agency trusted by companies worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we combine strategic thinking with technical expertise to deliver solutions 
              that don't just meet expectations—they exceed them. Our collaborative approach ensures 
              that every project reflects our clients' unique vision and goals.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-3xl font-bold text-blue-600">7+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;