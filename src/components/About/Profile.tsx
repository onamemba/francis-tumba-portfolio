import React from 'react';

const Profile = () => {
  return (
    <div className="space-y-6 group">
      <p className="text-lg text-gray-300 transition-colors duration-300">
      I’m Francis Tumba, a passionate Data Engineer originally from South Africa, where I gained valuable experience working in data engineering,
      cloud technologies, and software development. I’m now based in the United States, pursuing a Computer Science degree at the University of Wisconsin-Green Bay. 
      My expertise lies in transforming complex data into actionable insights, with a keen interest in AI/ML and Data Science. Outside of tech, 
      I’m an gamer and sports Fanatic who loves exploring new challenges and crafting innovative solutions that make an impact.
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