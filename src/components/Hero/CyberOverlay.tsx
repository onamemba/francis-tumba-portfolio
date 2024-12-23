import React from 'react';

const CyberOverlay = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/0 via-cyber-primary/5 to-cyber-dark" />
    </div>
  );
};

export default CyberOverlay;