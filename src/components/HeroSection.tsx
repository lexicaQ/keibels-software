
import React, { useRef, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      blurElementsRef.current.forEach((element, index) => {
        const speed = 1 + index * 0.5;
        element.style.transform = `translate(${x * 50 * speed}px, ${y * 50 * speed}px)`;
      });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated blur elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={el => el && (blurElementsRef.current[i] = el)}
          className="absolute rounded-full blur-3xl bg-white/5"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
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
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold transition-all duration-300 hover:bg-white/20"
            >
              Projekte ansehen
              <span className="absolute inset-0 border border-white/20 rounded-lg group-hover:scale-95 transition-transform duration-300"></span>
            </a>
            <a 
              href="/contact" 
              className="group relative px-8 py-3 border border-white/20 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5"
            >
              Kontakt
              <span className="absolute inset-0 border border-white/20 rounded-lg group-hover:scale-95 transition-transform duration-300"></span>
            </a>
          </div>
        </div>

        <div className="relative">
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
    </section>
  );
};

export default HeroSection;
