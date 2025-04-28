
import React, { useRef, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };
    
    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            MAXIM KEIBEL
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delayed">
            Software Developer | UI/UX Designer | App Creator
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delayed">
            <a 
              href="#projects" 
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 transform translate-x-4 translate-y-4 border-2 border-white/20 rounded-lg"></div>
          <div className="absolute inset-0 transform translate-x-2 translate-y-2 border-2 border-white/10 rounded-lg"></div>
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/lovable-uploads/e36821f6-318f-46d5-9644-7d65d6ba2cc9.png" 
              alt="Maxim Keibel" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
