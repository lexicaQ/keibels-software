
import React, { useEffect, useState } from 'react';

interface IOSSimulatorProps {
  appContent: React.ReactNode;
  color?: string;
  isAnimated?: boolean;
}

const IOSSimulator: React.FC<IOSSimulatorProps> = ({ 
  appContent, 
  color = 'black', 
  isAnimated = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div 
      className={`relative ${isAnimated ? 'transition-all duration-1000 transform' : ''}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-40px)'
      }}
    >
      {/* Phone frame */}
      <div 
        className="relative w-[300px] h-[600px] rounded-[40px] overflow-hidden shadow-xl"
        style={{ backgroundColor: color }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[14px] z-20"></div>
        
        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[38px] bg-gray-800 overflow-hidden">
          {/* Status bar */}
          <div className="h-[40px] w-full bg-black flex justify-between items-center px-6 pt-2">
            <div className="text-white text-xs">9:41</div>
            <div className="flex space-x-2">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="text-white text-xs">100%</div>
            </div>
          </div>
          
          {/* App content */}
          <div className="h-[calc(100%-40px)] overflow-hidden bg-white relative">
            {!isLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="w-full h-full">
                {appContent}
              </div>
            )}
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/80 rounded-full"></div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px] pointer-events-none"></div>
    </div>
  );
};

export default IOSSimulator;
