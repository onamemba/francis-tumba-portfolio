import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led the development of scalable data pipelines and implemented ML models for predictive analytics.",
      achievements: [
        "Reduced data processing time by 60%",
        "Implemented real-time analytics dashboard",
        "Led a team of 5 engineers"
      ]
    },
    {
      title: "Data Engineer",
      company: "Data Solutions Inc",
      period: "2019 - 2021",
      description: "Designed and maintained ETL processes and data warehousing solutions.",
      achievements: [
        "Built automated data quality checks",
        "Optimized database performance",
        "Integrated multiple data sources"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="absolute -left-3 top-8">
                <div className="w-6 h-6 bg-purple-500 rounded-full">
                  <Briefcase className="w-4 h-4 text-white absolute top-1 left-1" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <div className="text-purple-400 mb-4">{exp.company} | {exp.period}</div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;