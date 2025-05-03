
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-t-4 border-white/50 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
