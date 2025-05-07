
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeviceFrame from './DeviceFrame';
import { useIsMobile } from '../hooks/use-mobile';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  slogan?: string;
  year?: string;
  platform?: string;
  delay?: number;
  isLeft?: boolean;
  appImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id,
  title, 
  description, 
  slogan,
  year,
  platform,
  delay = 0,
  isLeft = true,
  appImage
}) => {
  const deviceType = platform?.toLowerCase().includes('ios') ? 'ios' : 'macos';
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div 
      ref={cardRef}
      className="group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-500 animate-fade-in hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="p-6 lg:p-8 lg:col-span-3">
          <div className="mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">{title}</h3>
              {slogan && <p className="text-gray-600 italic mb-3 text-sm">{slogan}</p>}
            </div>
            {(year || platform) && (
              <div className="flex gap-3 mb-4">
                {platform && (
                  <span className="text-xs bg-black text-white px-2.5 py-0.5 rounded-full">
                    {platform}
                  </span>
                )}
                {year && (
                  <span className="text-xs text-gray-500 px-2.5 py-0.5 border border-gray-200 rounded-full">
                    {year}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <p className="text-gray-700 mb-6 line-clamp-3 text-sm md:text-base">
            {description}
          </p>
          
          <Link 
            to={`/projects/${id}`}
            className="inline-flex items-center px-4 py-2 text-sm bg-black text-white rounded-lg border border-black transition-all duration-300 hover:bg-gray-800 hover:border-gray-800"
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                window.history.pushState({}, '', `/projects/${id}`);
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
          >
            Details ansehen <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden bg-gray-50 flex items-center justify-center lg:col-span-2">
          <div className="absolute top-0 left-0 h-full w-px bg-gray-200 hidden lg:block"></div>
          
          <div className="transform transition-all duration-500 group-hover:scale-[1.03] px-3 py-3 w-full h-full flex items-center justify-center">
            <DeviceFrame 
              type={deviceType} 
              imageUrl={appImage}
              className="shadow-xl max-h-[240px] w-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
