import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface CyberTitleProps {
  title: string;
  roles: string[];
}

const CyberTitle = ({ title, roles }: CyberTitleProps) => {
  return (
    <div className="relative z-10 text-center px-4 cyber-text-glow">
      <div className="relative inline-block">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 border-b-2 border-cyber-primary/50">
          {title}
          <div className="absolute -inset-1 bg-cyber-accent/20 blur-xl" />
        </h1>
      </div>
      <div className="text-2xl md:text-4xl text-cyber-accent mb-8">
        I'm a{' '}
        <TypeAnimation
          sequence={roles.map((role) => [role, 2000]).flat()}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-cyber-primary"
        />
      </div>
    </div>
  );
};

export default CyberTitle;