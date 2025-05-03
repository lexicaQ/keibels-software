
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        {/* Modern minimal spinner with double rings */}
        <div className="h-16 w-16 rounded-full border-2 border-t-white border-r-white border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-2 border-t-white/20 border-r-white/20 border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
