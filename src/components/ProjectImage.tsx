
import React from 'react';
import MacOSAppImage from './MacOSAppImage';
import { isCustomImage, getCustomImageType } from '../utils/projectImages';
import { motion } from 'framer-motion';

interface ProjectImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ imageUrl, alt, className = '' }) => {
  if (!imageUrl) return null;
  
  if (isCustomImage(imageUrl)) {
    const variant = getCustomImageType(imageUrl);
    return (
      <div className="relative flex items-center justify-center py-6">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden">
            {/* Improved background effect with gradient and better positioning */}
            <div className="absolute -inset-[15%] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-[60px] opacity-30 z-0"></div>
            <MacOSAppImage appName={alt} variant={variant} className={className} />
          </div>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="relative flex items-center justify-center py-6">
      <motion.div 
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full mx-auto"
      >
        {/* Added proper shadow and border styling */}
        <div className="relative rounded-xl overflow-hidden">
          {/* Improved background glow with better positioning and opacity */}
          <div className="absolute -inset-[15%] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-[60px] opacity-30 z-0"></div>
          <img 
            src={imageUrl} 
            alt={alt} 
            className={`w-full h-full object-contain rounded-xl ${className}`}
            style={{ maxHeight: '400px' }} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectImage;
