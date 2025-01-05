import React from 'react';
import { CyberCard } from '../ui/CyberCard';

const ProfileImage = () => {
  return (
    <CyberCard className="group">
      <div className="relative">
        <div className="w-full h-[300px] rounded-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300">
          <img
            src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif"
            alt="Coding Animation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-secondary/80 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 border border-cyber-primary/20 rounded-lg" />
      </div>
    </CyberCard>
  );
};

export default ProfileImage;