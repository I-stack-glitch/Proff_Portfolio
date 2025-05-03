
import React from 'react';

interface SectionHeaderProps {
  title: string;
  action?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, action }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
