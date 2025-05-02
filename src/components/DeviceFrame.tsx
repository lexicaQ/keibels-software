
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Image, Upload, Plus } from 'lucide-react';

interface DeviceFrameProps {
  type?: 'ios' | 'macos';
  imageUrl?: string;
  aspectRatio?: 'portrait' | 'landscape';
  altText?: string;
  className?: string;
  onImageSelect?: (file: File) => void;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  type = 'ios',
  imageUrl,
  aspectRatio = 'portrait',
  altText = 'Device screenshot',
  className = '',
  onImageSelect
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
          ${isHovered ? 'shadow-2xl' : ''}
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
            <div className="h-[calc(100%-44px)] overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={altText}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gray-900">
                  <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-lg flex items-center justify-center mb-4 border border-white/10">
                    <Image size={32} className="text-white/70" />
                  </div>
                  <p className="text-white/80 text-sm mb-2">Bildbereich</p>
                  <p className="text-white/50 text-xs mb-6">Hier wird Ihre App-Vorschau angezeigt</p>
                  
                  <div className="grid grid-cols-4 gap-3 w-full px-5 mt-8">
                    {Array(8).fill(0).map((_, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-6 h-6 bg-white/20 rounded-md"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-10 w-full flex justify-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center">
                        <div className="w-5 h-5 rounded-md bg-white/50"></div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center">
                        <div className="w-5 h-1 rounded-md bg-white/50"></div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center">
                        <div className="w-1 h-5 rounded-md bg-white/50"></div>
                      </div>
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
          ${isHovered ? 'shadow-2xl' : ''}
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
              <div className="absolute inset-0 mt-[28px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-16 h-16 border-2 border-gray-400/30 rounded-lg mb-4 flex items-center justify-center">
                  <Plus className="w-8 h-8 text-gray-400/70" />
                </div>
                <p className="text-gray-600 text-sm">Bild hier einfügen</p>
                <p className="text-gray-400 text-xs mt-2">Klicken Sie, um ein Bild hochzuladen</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceFrame;
