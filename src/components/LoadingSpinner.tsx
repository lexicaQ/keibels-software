
import React, { useEffect, useState } from 'react';

const LoadingSpinner: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showElements, setShowElements] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 300);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="relative w-full max-w-md px-8">
        {/* Logo */}
        <div className={`text-center mb-10 transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img 
            src="/lovable-uploads/c0d5dc91-7451-4e20-a60d-82c907cfd8b6.png" 
            alt="MK Logo" 
            className="h-20 mx-auto"
          />
        </div>
        
        {/* Progress bar */}
        <div className="relative w-full h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Moving elements */}
        <div className="absolute inset-0 overflow-hidden -z-10 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl bg-white/10"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                left: `${-150 - i * 50 + Math.sin(i) * 30}px`,
                top: `${-150 - i * 50 + Math.cos(i) * 30}px`,
                animation: `floatAnim${i + 1} ${8 + i * 2}s infinite ease-in-out`,
                opacity: 0.1 + i * 0.05
              }}
            />
          ))}
        </div>
        
        {showElements && (
          <div className="mt-6 text-white/80 text-center animate-fade-in flex flex-col items-center">
            <p className="text-sm font-light">{progress < 100 ? 'Lade Inhalte...' : 'Bereit'}</p>
          </div>
        )}
      </div>
      
      {/* Custom keyframes for the floating animations */}
      <style>
        {`
          @keyframes floatAnim1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(30px, -20px) rotate(5deg); }
          }
          @keyframes floatAnim2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -30px) rotate(-5deg); }
          }
          @keyframes floatAnim3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(10px, -40px) rotate(3deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
