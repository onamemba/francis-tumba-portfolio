import React from 'react';
import Stats from './Stats';
import Profile from './Profile';

const About = () => {
  return (
    <div className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Profile />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default About;