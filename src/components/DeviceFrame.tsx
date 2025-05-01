
import React, { useState } from 'react';

interface DeviceFrameProps {
  type?: 'ios' | 'macos';
  imageUrl?: string;
  aspectRatio?: 'portrait' | 'landscape';
  altText?: string;
  className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  type = 'ios',
  imageUrl,
  aspectRatio = 'portrait',
  altText = 'Device screenshot',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Device Frame */}
      {type === 'ios' ? (
        <div className={`
          relative 
          ${aspectRatio === 'portrait' ? 'w-[280px] h-[570px]' : 'w-[570px] h-[280px]'}
          rounded-[40px] 
          bg-black 
          shadow-xl 
          transition-all 
          duration-300
          ${isHovered ? 'shadow-2xl transform scale-[1.02]' : ''}
        `}>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[14px] z-20"></div>
          
          {/* Screen */}
          <div className="absolute inset-[3px] rounded-[38px] bg-gray-900 overflow-hidden">
            {/* Status bar */}
            <div className="h-[40px] w-full bg-black flex justify-between items-center px-6 pt-2">
              <div className="text-white text-xs">9:41</div>
              <div className="flex space-x-2">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="text-white text-xs">100%</div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="h-[calc(100%-40px)] overflow-hidden bg-gray-800 relative">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={altText}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 border-2 border-dashed border-white/40 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm">Bild hier einfügen</p>
                  <p className="text-white/40 text-xs mt-2">Klicken Sie, um ein Bild hochzuladen</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[100px] h-1 bg-white/80 rounded-full"></div>
          
          {/* Reflection effect */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px] pointer-events-none"></div>
        </div>
      ) : (
        // macOS frame
        <div className={`
          relative 
          ${aspectRatio === 'landscape' ? 'w-[580px] h-[360px]' : 'w-[360px] h-[580px]'}
          rounded-lg 
          bg-gray-900 
          p-1
          shadow-xl 
          transition-all 
          duration-300
          ${isHovered ? 'shadow-2xl transform scale-[1.02]' : ''}
        `}>
          {/* Menu Bar */}
          <div className="h-[28px] w-full bg-gradient-to-b from-gray-800 to-gray-700 rounded-t-lg flex items-center px-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-grow text-center text-white/80 text-xs font-medium">
              Meine App
            </div>
            <div className="w-4"></div>
          </div>
          
          {/* Screen Content */}
          <div className="h-[calc(100%-28px)] bg-gray-100 rounded-b-lg overflow-hidden">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={altText}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 mt-[28px] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 border-2 border-dashed border-black/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-black/60 text-sm">Bild hier einfügen</p>
                <p className="text-black/40 text-xs mt-2">Klicken Sie, um ein Bild hochzuladen</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceFrame;
