import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AirplaneGame from './AirplaneGame';
import Cursor3D from './Cursor3D';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <AirplaneGame />
      {/* <Cursor3D /> */}
      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 transition-transform duration-300">
          Hi, I am Francis Tumba
        </h1>
        <div className="hero-subtitle text-2xl md:text-4xl text-blue-200 mb-8 transition-transform duration-300">
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
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Hero;