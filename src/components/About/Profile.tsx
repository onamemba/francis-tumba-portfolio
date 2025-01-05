import React from 'react';

const Profile = () => {
  return (
    <div className="space-y-6 group">
      <p className="text-lg text-gray-300 transition-colors duration-300">
      I’m Francis Tumba, a passionate Data Engineer now based in the United States, currently pursuing a Master’s degree in Computer Science at the 
      University of Wisconsin-Green Bay. With extensive experience in data engineering, cloud technologies,and software development, my expertise lies
      in transforming complex data into actionable insights. I have a keen interest in AI/ML and Data Science. Outside of tech, I’m a gamer and sports 
      fanatic who loves exploring new challenges and crafting innovative solutions that make an impact
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