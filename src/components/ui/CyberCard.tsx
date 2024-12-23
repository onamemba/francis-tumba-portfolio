import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const CyberCard = ({ children, className = '', hover = true }: CyberCardProps) => {
  return (
    <div 
      className={`
        relative p-6 bg-cyber-secondary/80 rounded-lg 
        before:absolute before:inset-0 before:border before:border-cyber-primary/30 before:rounded-lg
        after:absolute after:inset-[-1px] after:bg-gradient-to-r after:from-cyber-primary/0 after:via-cyber-primary/20 after:to-cyber-primary/0 after:rounded-lg after:blur-sm
        ${hover ? 'hover:scale-105 hover:shadow-lg hover:shadow-cyber-primary/20' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};