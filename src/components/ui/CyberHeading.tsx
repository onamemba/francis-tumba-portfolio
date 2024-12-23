import React from 'react';

interface CyberHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const CyberHeading = ({ children, className = '' }: CyberHeadingProps) => {
  return (
    <h2 className={`relative text-4xl font-bold text-white mb-16 ${className}`}>
      <span className="relative z-10">
        {children}
        <span className="absolute -inset-1 bg-cyber-primary/20 blur-lg" />
      </span>
      <div className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyber-primary/50">
        <div className="absolute inset-0 bg-cyber-primary animate-cyber-scan" />
      </div>
    </h2>
  );
};