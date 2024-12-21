import React from 'react';

const Profile = () => {
  return (
    <div className="space-y-6 group">
      <p className="text-lg text-gray-300 transition-colors duration-300">
        A passionate Data Engineer with over 4 years of experience in building robust data pipelines
        and implementing cutting-edge solutions. My journey from Cape Peninsula University of Technology
        to the University of Wisconsin-Green Bay has shaped my approach to problem-solving and innovation.
      </p>
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden transform transition-all duration-300">
        <img
          src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif"
          alt="Coding Animation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Profile;