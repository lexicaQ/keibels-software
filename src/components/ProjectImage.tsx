
import React from 'react';
import MacOSAppImage from './MacOSAppImage';
import { isCustomImage, getCustomImageType } from '../utils/projectImages';

interface ProjectImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ imageUrl, alt, className = '' }) => {
  if (!imageUrl) return null;
  
  if (isCustomImage(imageUrl)) {
    const variant = getCustomImageType(imageUrl);
    return <MacOSAppImage appName={alt} variant={variant} className={className} />;
  }
  
  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={`w-full h-full object-contain ${className}`}
    />
  );
};

export default ProjectImage;
