import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative w-full h-[300px] rounded-lg overflow-hidden transform transition-all duration-300">
        <img
          src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif"
          alt="Coding Animation"
          className="w-full h-full object-cover"
        />
      </div>
  );
};

export default ProfileImage;