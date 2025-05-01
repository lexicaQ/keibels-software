
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
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
          rounded-[45px] 
          bg-black 
          shadow-xl 
          overflow-hidden
          transition-all 
          duration-300
          ${isHovered ? 'shadow-2xl transform scale-[1.02]' : ''}
        `}>
          {/* Dynamic notch for newer iOS devices */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-b-[14px] z-20"></div>
          
          {/* Screen */}
          <div className="absolute inset-[3px] rounded-[42px] bg-gray-900 overflow-hidden">
            {/* Status bar */}
            <div className="h-[44px] w-full bg-black flex justify-between items-center px-6 pt-3">
              <div className="text-white text-xs font-medium">22:08</div>
              <div className="absolute top-[14px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-black rounded-full"></div>
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-[2px]">
                  <div className="w-[3px] h-[10px] bg-white rounded-sm"></div>
                  <div className="w-[3px] h-[7px] bg-white rounded-sm"></div>
                  <div className="w-[3px] h-[5px] bg-white rounded-sm"></div>
                  <div className="w-[3px] h-[3px] bg-white rounded-sm"></div>
                </div>
                <div className="w-4 h-3 flex items-center justify-end">
                  <div className="w-3 h-3 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white text-xs">94%</div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="h-[calc(100%-44px)] overflow-hidden bg-gradient-to-br from-pink-300 via-purple-200 to-blue-400 relative">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={altText}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="grid grid-cols-4 gap-4 mb-12 px-8 pt-14">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-gray-800/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-1">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-xs">Settings</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center mb-1">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-xs">Files</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-blue-500/70 backdrop-blur-sm rounded-xl flex items-center justify-center mb-1">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-xs">Safari</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-black/70 backdrop-blur-sm rounded-xl flex items-center justify-center mb-1">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-xs">StarLog</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <div className="w-[140px] h-[40px] bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-white/70 text-sm">Search</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[120px] h-1 bg-white/80 rounded-full"></div>
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
              KEIBEL APP
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
