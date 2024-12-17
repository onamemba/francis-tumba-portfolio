import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import AirplaneGame from './AirplaneGame';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <AirplaneGame />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I am Francis Tumba
        </h1>
        <div className="text-2xl md:text-4xl text-blue-200 mb-8">
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Engineer',
              2000,
              'Programmer',
              2000,
              'Leader',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-400"
          />
        </div>
        <div className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;