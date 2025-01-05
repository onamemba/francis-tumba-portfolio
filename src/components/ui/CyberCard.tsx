import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const CyberCard = ({ children, className = '', hover = true }: CyberCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Folder Tab */}
      <div className="absolute -top-3 left-6 w-24 h-3 bg-cyber-primary/20 
        before:absolute before:top-0 before:-left-3 before:border-t-[12px] before:border-r-[12px] before:border-t-cyber-primary/20 before:border-r-transparent
        after:absolute after:top-0 after:-right-3 after:border-t-[12px] after:border-l-[12px] after:border-t-cyber-primary/20 after:border-l-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/0 via-cyber-primary/30 to-cyber-primary/0" />
      </div>

      {/* Main Folder Body */}
      <div className={`
        relative p-6 bg-cyber-secondary/80 backdrop-blur-sm
        before:absolute before:inset-0 before:border before:border-cyber-primary/30
        after:absolute after:inset-[-1px] after:bg-gradient-to-r after:from-cyber-primary/0 after:via-cyber-primary/20 after:to-cyber-primary/0
        ${hover ? 'hover:scale-105 hover:shadow-lg hover:shadow-cyber-primary/20' : ''}
        transition-all duration-300
      `}>
        {/* Angled Corners */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyber-primary/40 transform -skew-x-12" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyber-primary/40 transform skew-x-12" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyber-primary/40 transform skew-x-12" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyber-primary/40 transform -skew-x-12" />

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-8 w-[1px] h-full bg-cyber-primary/20" />
        <div className="absolute top-0 right-8 w-[1px] h-full bg-cyber-primary/20" />
      </div>
    </div>
  );
};