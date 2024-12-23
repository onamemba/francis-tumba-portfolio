import React from 'react';

const CyberCircle = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
      <div className="absolute inset-0 border-2 border-cyber-primary rounded-full animate-spin-slow opacity-20" />
      <div className="absolute inset-2 border border-cyber-primary rounded-full animate-reverse-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-cyber-primary rounded-full animate-cyber-pulse" />
      </div>
    </div>
  );
};

export default CyberCircle;