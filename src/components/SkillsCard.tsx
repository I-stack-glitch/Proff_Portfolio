import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillsCard = () => {
  const navigate = useNavigate();
  const skills = [
    { name: 'C++', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'HTML', percentage: 90 },
    { name: 'SQL', percentage: 75 },
    { name: 'Problem Solving', percentage: 88 }
  ];

  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          const index = parseInt(target.dataset.index || "0", 10);
          const fillDiv = target.querySelector('.fill') as HTMLElement;
          if (fillDiv) {
            setTimeout(() => {
              fillDiv.style.width = `${skills[index].percentage}%`;
              fillDiv.style.opacity = '1';
            }, index * 150);
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    skillBarsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => {
      skillBarsRef.current.forEach(bar => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const handleDirectNavigation = () => {
    navigate('/computer-science', { replace: true });
    // Ensure the page scrolls to the top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="portfolio-card p-4 md:p-6 bg-[#1b1311] rounded-xl mt-6">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold text-white">My Skills</h3>
        <button 
          onClick={handleDirectNavigation} 
          className="text-secondary"
          aria-label="Go to Computer Science page"
        >
          →
        </button>
      </div>

      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-white">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm font-medium text-secondary">{skill.percentage}%</span>
            </div>

            {/* Progress bar container */}
            <div
              className="w-full h-4 rounded-full overflow-hidden flex shadow-inner"
              ref={el => skillBarsRef.current[index] = el}
              data-index={index.toString()}
              style={{ backgroundColor: '#f88f25' }}
            >
              {/* Filled part */}
              <div
                className="fill h-full opacity-0 transition-all duration-1000 ease-out"
                style={{
                  width: '0%',
                  backgroundColor: '#ef4343'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;