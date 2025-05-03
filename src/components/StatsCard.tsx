
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center mb-2 border-2 border-secondary">
      {icon}
    </div>
    <div className="text-xl font-bold">{value}</div>
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
    <div className="portfolio-card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Your Statistics</h3>
        <button className="text-secondary">→</button>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 mb-6">
          <div className="stats-ring">
            <div className="stats-ring-inner">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Total hours</div>
                <div className="text-3xl font-bold">{totalHours}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 w-full mt-4">
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
