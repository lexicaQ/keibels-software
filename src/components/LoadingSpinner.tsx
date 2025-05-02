
import React, { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 - prev) * 0.2;
        return newProgress > 99 ? 100 : newProgress;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
      </div>
      <div className="mt-6 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-sm text-gray-600">Wird geladen...</p>
    </div>
  );
};

export default LoadingSpinner;
