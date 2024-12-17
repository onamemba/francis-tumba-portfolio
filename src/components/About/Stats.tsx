import React from 'react';
import { Clock, Book, Gamepad2, Trophy } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Clock />, title: "4+ Years", subtitle: "Experience" },
    { icon: <Book />, title: "Continuous", subtitle: "Learning" },
    { icon: <Gamepad2 />, title: "Gaming", subtitle: "Hobby" },
    { icon: <Trophy />, title: "Sports", subtitle: "Enthusiast" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-gray-800 rounded-lg">
          <div className="w-8 h-8 text-blue-400 mb-2">
            {stat.icon}
          </div>
          <h3 className="text-white font-semibold">{stat.title}</h3>
          <p className="text-gray-400">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;