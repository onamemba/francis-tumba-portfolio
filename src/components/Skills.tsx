import React from 'react';
import { Database, Cloud, Brain, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Data Engineering",
      icon: <Database className="w-8 h-8" />,
      items: ["Python", "SQL", "ETL", "Data Warehousing"]
    },
    {
      category: "Cloud Technologies",
      icon: <Cloud className="w-8 h-8" />,
      items: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-8 h-8" />,
      items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"]
    },
    {
      category: "Development",
      icon: <Terminal className="w-8 h-8" />,
      items: ["React", "Node.js", "Git", "CI/CD"]
    }
  ];

  return (
    <div className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group"
            >
              <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;