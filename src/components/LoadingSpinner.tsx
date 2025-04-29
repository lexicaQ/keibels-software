
import React, { useEffect, useState } from 'react';

const LoadingSpinner: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showElements, setShowElements] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 300);
    
    // Simulate progress with a smoother animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);
    
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
            src="/lovable-uploads/d125fca8-54df-4c60-8508-951b68ecde5d.png" 
            alt="Keibel Software Logo" 
            className="h-16 mx-auto" 
          />
        </div>
        
        {/* Progress bar - thinner, more elegant design */}
        <div className="relative w-full h-[1px] bg-white/10 overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Modern animated elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl bg-white/5"
              style={{
                width: `${150 + i * 50}px`,
                height: `${150 + i * 50}px`,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                opacity: 0.03 + i * 0.01,
                transform: 'scale(1)',
                transition: 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out',
                animation: `pulse${i} ${6 + i}s infinite ease-in-out`
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
      
      {/* Custom keyframes for subtler pulse animations */}
      <style>
        {`
          @keyframes pulse0 {
            0%, 100% { transform: scale(1); opacity: 0.03; }
            50% { transform: scale(1.1); opacity: 0.05; }
          }
          @keyframes pulse1 {
            0%, 100% { transform: scale(1); opacity: 0.04; }
            50% { transform: scale(1.15); opacity: 0.07; }
          }
          @keyframes pulse2 {
            0%, 100% { transform: scale(1); opacity: 0.05; }
            50% { transform: scale(1.1); opacity: 0.08; }
          }
          @keyframes pulse3 {
            0%, 100% { transform: scale(1); opacity: 0.06; }
            50% { transform: scale(1.2); opacity: 0.1; }
          }
          @keyframes pulse4 {
            0%, 100% { transform: scale(1); opacity: 0.05; }
            50% { transform: scale(1.15); opacity: 0.09; }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
