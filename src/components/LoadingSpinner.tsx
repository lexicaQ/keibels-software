
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingSpinner;
