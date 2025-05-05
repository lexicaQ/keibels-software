
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
      <div className="relative flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-11/12 md:w-4/5 lg:w-3/4"
        >
          <MacOSAppImage appName={alt} variant={variant} className={className} />
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="relative flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-11/12 md:w-4/5 lg:w-3/4"
      >
        <img 
          src={imageUrl} 
          alt={alt} 
          className={`w-full h-full object-contain ${className}`}
        />
      </motion.div>
    </div>
  );
};

export default ProjectImage;
