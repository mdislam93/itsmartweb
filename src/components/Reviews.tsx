import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Jennifer Liu',
      company: 'StartupXYZ',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'TechFlow transformed our entire digital presence. Their team delivered beyond our expectations with a beautiful, functional website that increased our conversions by 300%. The attention to detail and ongoing support has been exceptional.',
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Working with TechFlow was a game-changer for our company. They built a scalable mobile app that our users love, and the development process was smooth and transparent. Highly recommend their services.',
      project: 'Mobile Application'
    },
    {
      id: 3,
      name: 'Sarah Davis',
      company: 'InnovateLab',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The strategic insights and technical expertise TechFlow provided helped us launch successfully in a competitive market. Their data-driven approach and creative solutions exceeded all our goals.',
      project: 'Digital Strategy'
    },
    {
      id: 4,
      name: 'Robert Martinez',
      company: 'TechVentures',
      role: 'VP of Product',
      image: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'TechFlow delivered a complex web application on time and within budget. Their agile methodology and constant communication made the entire process seamless. The end result speaks for itself.',
      project: 'Web Application'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentData = reviews[currentReview];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with TechFlow.
          </p>
        </div>

        {/* Featured Review */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src={currentData.image} 
                alt={currentData.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              {/* Stars */}
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{currentData.text}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-900">{currentData.name}</div>
                <div className="text-blue-600">{currentData.role} at {currentData.company}</div>
                <div className="text-sm text-gray-500">Project: {currentData.project}</div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevReview}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextReview}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Review Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">250+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Project Success Rate</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;