
import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

const LoadingSpinner: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showElements, setShowElements] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    // Zeige Elemente nach kurzer Verzögerung
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 100);
    
    // Simuliere schnelleren Ladefortschritt
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = (100 - prev) * 0.2; // Schnellere Progression am Ende
        const newProgress = prev + increment;
        
        if (newProgress >= 99) {
          clearInterval(progressInterval);
          setTimeout(() => setIsComplete(true), 400); // Kurze Pause bevor Animation beendet
          return 100;
        }
        return newProgress;
      });
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);
  
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-full max-w-sm px-8">
        {/* Logo mit Fade-In Animation */}
        <div className={`text-center mb-12 transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img 
            src="/lovable-uploads/40fa92db-30b5-4792-8cc6-583ca4e26aa0.png" 
            alt="KEIBEL SOFTWARE Logo" 
            className="h-24 mx-auto"
          />
        </div>
        
        {/* Moderner Ladebalken */}
        <div className="relative w-full mb-4">
          <Progress value={progress} className="h-[2px] bg-white/10" />
        </div>
        
        {/* Status Text */}
        {showElements && (
          <div className="text-white/70 text-center animate-fade-in text-sm font-light tracking-wider">
            <p>{progress < 100 ? 'LÄDT...' : 'BEREIT'}</p>
          </div>
        )}
      </div>
      
      {/* Hintergrund-Elemente */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/3 filter blur-[80px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/2 filter blur-[100px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/3"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
