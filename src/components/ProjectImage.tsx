
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
      <div className="relative flex items-center justify-center py-4">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full mx-auto"
        >
          <MacOSAppImage appName={alt} variant={variant} className={className} />
        </motion.div>
        
        {/* Enhanced reflection effect */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/70 to-transparent z-0"></div>
      </div>
    );
  }
  
  return (
    <div className="relative flex items-center justify-center py-4">
      <motion.div 
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full mx-auto"
      >
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={alt} 
            className={`w-full h-full object-contain shadow-xl rounded-md ${className}`}
          />
          
          {/* Image enhancement effects */}
          <div className="absolute inset-0 rounded-md shadow-inner pointer-events-none border border-white/10"></div>
        </div>
      </motion.div>
      
      {/* Shadow effect */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-white/5 blur-xl rounded-full z-0"></div>
    </div>
  );
};

export default ProjectImage;
