import React from 'react';
import { Code, Smartphone, Globe, BarChart3, Palette, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'Cross-platform', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that align with your business goals and market opportunities.',
      features: ['Market Analysis', 'User Research', 'Technology Roadmap', 'Growth Planning']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven insights and analytics to optimize performance and drive informed decisions.',
      features: ['Performance Tracking', 'User Behavior', 'Conversion Optimization', 'Custom Dashboards']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences and drive engagement.',
      features: ['User Interface Design', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Robust security measures and compliance frameworks to protect your digital assets.',
      features: ['Security Audits', 'GDPR Compliance', 'Data Protection', 'Risk Assessment']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we offer comprehensive digital solutions 
            tailored to your unique business needs and objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your digital presence and drive your business forward.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;