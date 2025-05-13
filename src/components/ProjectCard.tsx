import React, { ReactNode, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  children?: ReactNode;
  size?: 'sm' | 'lg';
}


const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  featured = false,
  size = 'lg',
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isEchoBioNix = title === "EchoBioNix";
  const isJosephusTheorem = title === "Josephus Theorem";
  const isClickable = isEchoBioNix || isJosephusTheorem;
  const echoBioNixUrl = "https://precious-pudding-d8893b.netlify.app/";

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    
    if (!card || !content) return;
    
    const maxTilt = 15;
    const perspective = 1000;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const tiltX = ((y / rect.height) * 2 - 1) * -maxTilt;
      const tiltY = ((x / rect.width) * 2 - 1) * maxTilt;
      
      content.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      content.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const handleMouseDown = () => {
    if (cardRef.current) {
      cardRef.current.classList.add('scale-[0.98]');
    }
  };
  const handleMouseUp = () => {
    if (cardRef.current) {
      cardRef.current.classList.remove('scale-[0.98]');
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`portfolio-card relative overflow-hidden rounded-xl ${size === 'lg' ? 'md:col-span-2' : ''}`}
      style={{ 
        cursor: isClickable ? 'pointer' : 'default',
        backgroundColor: '#1b1311',
        transition: 'transform 0.1s ease-in-out'

      }}
      onClick={isClickable ? () => {
        if (isEchoBioNix) {
          window.open(echoBioNixUrl, "_blank", "noopener,noreferrer");
        } else if (isJosephusTheorem) {
          window.open('https://josephustheorem.netlify.app/', "_blank", "noopener,noreferrer");
        }
      } : undefined}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
     >
      {featured && (
        <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary text-white z-10">
          Featured
        </Badge>
      )}
      
      <div 
        ref={contentRef} 
        className="flex flex-col h-full transition-transform duration-300 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
          transformOrigin: 'center center',
        }}
      >
        {image && (
          <div className="mb-4 rounded-t-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-40 md:h-48 object-cover"
            />
          </div>
        )}
        
        <div className="p-4">
          <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-muted text-muted-foreground hover:bg-muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;