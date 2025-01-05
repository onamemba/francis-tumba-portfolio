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
          <span className="text-cyber-primary">{'>'}</span> 
          I’m Francis Tumba, a passionate Data Engineer now based in the United States, currently pursuing a Master’s degree in 
          Computer Science at the University of Wisconsin-Green Bay. With extensive experience in data engineering, cloud technologies,
          and software development, my expertise lies in transforming complex data into actionable insights. I have a keen interest in AI/ML
          and Data Science. Outside of tech, I’m a gamer and sports fanatic who loves exploring new challenges and crafting innovative solutions
          that make an impact.
        </p>
      </div>
    </CyberCard>
  );
};

export default ProfileText;