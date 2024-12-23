import React from 'react';
import CyberCircle from './CyberCircle';
import CyberOverlay from './CyberOverlay';
import CyberTitle from './CyberTitle';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  const roles = ['Engineer', 'Programmer', 'Leader'];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark">
      <CyberOverlay />
      <CyberCircle />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-1 bg-cyber-primary/30 animate-cyber-scan" />
      <div className="absolute bottom-10 right-10 w-32 h-1 bg-cyber-primary/30 animate-cyber-scan" />
      
      {/* Corner Frames */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyber-primary/50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyber-primary/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyber-primary/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyber-primary/50" />

      <CyberTitle 
        title="Hi, I am Francis Tumba"
        roles={roles}
      />
      <ScrollIndicator />
    </div>
  );
};

export default Hero;