
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
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-[60px] opacity-60 z-0"></div>
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
        <div className="relative">
          <div className="absolute -inset-4 bg-white/20 rounded-full blur-[60px] opacity-60 z-0"></div>
          <img 
            src={imageUrl} 
            alt={alt} 
            className={`w-full h-full object-contain shadow-xl rounded-md ${className}`}
            style={{ maxHeight: '350px' }} // Increased height
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectImage;
