
import React, { useEffect, useState } from 'react';

const LoadingSpinner: React.FC = () => {
  const [showElements, setShowElements] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative">
        {/* Moving blur elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full blur-3xl bg-white/10 transition-all duration-1000 ${showElements ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${-100 - i * 25 + Math.sin(i * 0.5) * 50}px`,
                top: `${-100 - i * 25 + Math.cos(i * 0.5) * 50}px`,
                animationDelay: `${i * 0.2}s`,
                transform: `translate(${Math.sin(i) * 10}px, ${Math.cos(i) * 10}px)`,
                animation: `float${i % 2 === 0 ? '1' : '2'} ${5 + i * 2}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <span className="loader"></span>
          
          {showElements && (
            <div className="mt-8 text-white text-center animate-fade-in">
              <p className="text-lg mb-1">Lade Inhalte...</p>
              <p className="text-sm text-gray-400">Bitte warten</p>
            </div>
          )}
        </div>
      </div>

      {/* Add keyframes for floating animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(0, -40px) rotate(0deg); }
          75% { transform: translate(-20px, -20px) rotate(-5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, -10px) rotate(-5deg); }
          50% { transform: translate(0, -30px) rotate(0deg); }
          75% { transform: translate(20px, -10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
