import React from 'react';
import { Terminal } from 'lucide-react';
import { CyberCard } from '../ui/CyberCard';

const ProfileText = () => {
  return (
    <CyberCard hover={false} className="space-y-4">
      <div className="flex items-center gap-2 text-cyber-primary">
        <Terminal className="w-5 h-5" />
        <span className="text-sm font-mono">/user/profile/about.txt</span>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-1 bg-cyber-primary/5 blur-sm rounded-lg" />
        <p className="relative text-lg text-gray-300 font-mono leading-relaxed">
          <span className="text-cyber-primary">{'>'}</span> A passionate Data Engineer with over 4 years of experience in building robust data pipelines
          and implementing cutting-edge solutions. My journey from Cape Peninsula University of Technology
          to the University of Wisconsin-Green Bay has shaped my approach to problem-solving and innovation.
        </p>
      </div>
    </CyberCard>
  );
};

export default ProfileText;