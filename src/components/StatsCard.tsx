
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card flex items-center justify-center border-2 border-secondary">
      {icon}
    </div>
    <div className="text-lg md:text-xl font-bold">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

interface StatsCardProps {
  totalHours: string;
  stats: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
}

const StatsCard: React.FC<StatsCardProps> = ({ totalHours, stats }) => {
  return (
    <div className="portfolio-card p-4 md:p-6 bg-[#1b1311]">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold">Your Statistics</h3>
        <button className="text-secondary">→</button>
      </div>
      
      <div className="flex flex-col items-center ">
        <div className="w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-6">
          <div className="stats-ring">
            <div className="stats-ring-inner">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Total hours</div>
                <div className="text-2xl md:text-3xl font-bold">{totalHours}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-2 md:mt-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
