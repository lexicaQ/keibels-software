
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-2 border-r-2 border-white animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-2 border-white animate-spin opacity-30" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
