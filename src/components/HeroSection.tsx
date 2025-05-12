
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to container
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      blurElementsRef.current.forEach((element, index) => {
        if (!element) return;
        const speed = 0.5 + index * 0.1; // Slower, smoother movement
        const moveX = x * 30 * speed;
        const moveY = y * 30 * speed;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Ensure all background elements are loaded immediately
  useEffect(() => {
    blurElementsRef.current.forEach(element => {
      if (element) {
        element.style.opacity = '1';
        element.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-in';
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-4 md:pt-10">
      {/* Enhanced soft-blurred white circle elements */}
      <div className="absolute w-full h-full overflow-hidden">
        {/* Larger, more prominent blurry elements */}
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-white/3 blur-[120px] opacity-50"></div>
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full bg-white/3 blur-[150px] opacity-50"></div>
        <div className="absolute bottom-[5%] left-[25%] w-[450px] h-[450px] rounded-full bg-white/2 blur-[100px] opacity-40"></div>
        
        {/* Medium-sized elements for depth */}
        <div className="absolute top-[45%] left-[60%] w-[300px] h-[300px] rounded-full bg-white/4 blur-[80px] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-white/3 blur-[90px] opacity-50"></div>
        
        {/* Smaller accent elements */}
        <div className="absolute top-[15%] right-[30%] w-[200px] h-[200px] rounded-full bg-white/5 blur-[60px] opacity-70"></div>
        <div className="absolute bottom-[35%] left-[10%] w-[250px] h-[250px] rounded-full bg-white/4 blur-[70px] opacity-60"></div>
      </div>

      {/* Interactive elements with mouse movement */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          ref={el => el && (blurElementsRef.current[i] = el)} 
          className="absolute rounded-full blur-[150px] bg-white/3 opacity-0" 
          style={{
            width: `${400 + i * 150}px`,
            height: `${400 + i * 150}px`,
            left: `${15 + i % 3 * 25}%`,
            top: `${20 + Math.floor(i / 3) * 30}%`,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-in'
          }} 
        />
      ))}

      <div ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-8 md:mt-16">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 animate-fade-in tracking-tight">
            MAXIM KEIBEL
          </h1>
          <p className="text-xl md:text-2xl mb-3 md:mb-4 text-gray-300 animate-fade-in-delayed tracking-wide">
            Software Developer | UI/UX Designer | App Creator
          </p>
          <p className="text-gray-400 mb-8 md:mb-10 animate-fade-in-delayed">
            Kreative Lösungen für moderne Herausforderungen
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in-delayed">
            <Link to="#projects" className="glass-button group">
              <span className="relative z-10 flex items-center">
                Projekte ansehen
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link to="/contact" className="border border-white/30 backdrop-blur-md px-6 py-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Larger image presentation with glass effect */}
          <div className="absolute inset-0 transform translate-x-2 translate-y-2 rounded-2xl border border-white/5"></div>
          <div className="relative glass-card rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/e36821f6-318f-46d5-9644-7d65d6ba2cc9.png" 
              alt="Maxim Keibel" 
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="eager" // Force eager loading
            />
          </div>
        </div>
      </div>
      
      {/* Scroll-Down-Pfeil */}
      <a href="#projects" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 hover:text-white transition-colors">
        <span className="text-xs uppercase tracking-widest mb-2">Entdecken</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
