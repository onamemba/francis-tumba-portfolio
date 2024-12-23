import React from 'react';

interface CyberFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const CyberFrame = ({ children, className = '' }: CyberFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-cyber-secondary border border-cyber-primary/30 rounded-lg before:absolute before:inset-[-2px] before:rounded-lg before:border before:border-cyber-primary/20 before:bg-gradient-to-r before:from-transparent before:via-cyber-primary/10 before:to-transparent" />
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-[-1px] bg-gradient-to-r from-cyber-primary/0 via-cyber-primary/20 to-cyber-primary/0 rounded-lg blur-sm" />
    </div>
  );
};