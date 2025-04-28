
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative">
        {/* Animated blur elements */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl bg-white/5 animate-pulse"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${-50 - i * 25}px`,
              top: `${-50 - i * 25}px`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
