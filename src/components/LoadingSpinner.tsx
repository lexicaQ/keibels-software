
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="loader"></div>
      <div className="text-white mt-6 text-sm tracking-widest uppercase font-light">Lädt</div>
    </div>
  );
};

export default LoadingSpinner;
