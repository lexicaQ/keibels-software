
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="relative">
        {/* Modern circular loading animation */}
        <div className="w-16 h-16 relative flex items-center justify-center">
          <div className="absolute w-full h-full border-4 border-t-white border-r-white/20 border-b-white/10 border-l-white/5 rounded-full animate-spin"></div>
          <div className="absolute w-10 h-10 border-4 border-t-transparent border-r-white border-b-white/50 border-l-white/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Additional background blur elements */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/3 filter blur-[100px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/2 filter blur-[80px] top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/3"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
