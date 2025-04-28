
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
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/lovable-uploads/e36821f6-318f-46d5-9644-7d65d6ba2cc9.png" 
          alt="Maxim Keibel" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      
      <div ref={containerRef} className="container mx-auto px-4 relative z-10 transition-transform duration-300 ease-out">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            MAXIM KEIBEL
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delayed">
            Software Developer | UI/UX Designer | App Creator
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delayed">
            <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
              View Projects
            </a>
            <a href="/contact" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
