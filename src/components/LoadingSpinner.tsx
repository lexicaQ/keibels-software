
import React, { useEffect } from 'react';

const LoadingSpinner: React.FC = () => {
  // Improve performance by cleaning up animation frames
  useEffect(() => {
    // Reduce loading time by setting a shorter timeout
    const timer = setTimeout(() => {
      const loadingElement = document.getElementById('loading-spinner');
      if (loadingElement) {
        loadingElement.classList.add('opacity-0');
        setTimeout(() => {
          if (loadingElement.parentNode) {
            loadingElement.parentNode.removeChild(loadingElement);
          }
        }, 300);
      }
    }, 800); // Reduced from 1000ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loading-spinner" className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-300">
      <div className="relative">
        {/* Modern circular loading animation with improved performance */}
        <div className="w-16 h-16 relative flex items-center justify-center">
          <div className="absolute w-full h-full border-2 border-t-white border-r-white/20 border-b-white/10 border-l-white/5 rounded-full animate-spin"></div>
          <div className="absolute w-10 h-10 border-2 border-t-transparent border-r-white border-b-white/50 border-l-white/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.6s' }}></div>
          <div className="absolute w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full"></div>
        </div>
      </div>
      
      {/* Modernized background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/3 filter blur-[80px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-white/2 filter blur-[60px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/3"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
