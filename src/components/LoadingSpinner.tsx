
import React, { useEffect, useState } from 'react';

const LoadingSpinner: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 800);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex items-center justify-center">
        {/* Creative loading animation */}
        <div className="w-20 h-20 relative">
          <div className="absolute w-full h-full border-4 border-white/10 rounded-full"></div>
          <div className="absolute w-full h-full border-t-4 border-white rounded-full animate-spin"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/3 filter blur-[80px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/2 filter blur-[100px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/3"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
