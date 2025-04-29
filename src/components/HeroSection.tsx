
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-24">
      {/* Static background elements with fixed positioning */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl bg-white/5"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            opacity: 0.03 + i * 0.01,
            animation: `heroPulse${i} ${8 + i}s infinite ease-in-out`
          }}
        />
      ))}

      <div className="relative w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            MAXIM KEIBEL
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in-delayed">
            Software Developer | UI/UX Designer | App Creator
          </p>
          <p className="text-gray-400 mb-8 animate-fade-in-delayed">
            Kreative Lösungen für moderne Herausforderungen
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delayed">
            <Link 
              to="#projects" 
              className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold transition-colors duration-300 hover:bg-white/20"
            >
              Projekte ansehen
              <span className="absolute inset-0 border border-white/20 rounded-lg group-hover:scale-95 transition-transform duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="group relative px-8 py-3 border border-white/20 rounded-lg font-semibold transition-colors duration-300 hover:bg-white/5"
            >
              Kontakt
              <span className="absolute inset-0 border border-white/20 rounded-lg group-hover:scale-95 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Stable frames without wobble effects */}
          <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-white/20 rounded-lg"></div>
          <div className="absolute inset-0 transform translate-x-2 translate-y-2 border border-white/10 rounded-lg"></div>
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/lovable-uploads/e36821f6-318f-46d5-9644-7d65d6ba2cc9.png" 
              alt="Maxim Keibel" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Animation styles for hero blurs */}
      <style>
        {`
          @keyframes heroPulse0 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.05); opacity: 0.05; }
          }
          @keyframes heroPulse1 {
            0%, 100% { transform: scale(1); opacity: 0.04; }
            50% { transform: scale(1.08); opacity: 0.06; }
          }
          @keyframes heroPulse2 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.03); opacity: 0.05; }
          }
          @keyframes heroPulse3 {
            0%, 100% { transform: scale(1); opacity: 0.04; }
            50% { transform: scale(1.06); opacity: 0.07; }
          }
          @keyframes heroPulse4 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.04); opacity: 0.05; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
