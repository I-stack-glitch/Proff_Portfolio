
import React from 'react';

interface SectionHeaderProps {
  title: string;
  action?: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, action, className }) => {
  return (
    <div className={`flex justify-between items-center mb-4 ${className || ''}`}>
      <h2 className="text-2xl font-bold section-header">{title}</h2>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
