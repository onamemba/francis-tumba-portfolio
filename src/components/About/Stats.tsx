import React from 'react';
import { BrainCircuit, Book, Gamepad2, Trophy } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <BrainCircuit />, title: "AI/ML", subtitle: "Enthusiast" },
    { icon: <Book />, title: "Continuous", subtitle: "Learning" },
    { icon: <Gamepad2 />, title: "Gaming", subtitle: "Hobby" },
    { icon: <Trophy />, title: "Sports", subtitle: "Fanatic" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="p-4 bg-gray-800 rounded-lg group hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
        >
          <div className="w-8 h-8 text-blue-400 mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
            {stat.title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {stat.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;