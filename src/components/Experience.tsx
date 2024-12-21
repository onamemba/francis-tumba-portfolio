import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Autumn Leaf IT",
      period: "2021 - Present",
      description: "Led the development of scalable data pipelines and implemented ML models for predictive analytics.",
      achievements: [
        "Led the migration to cloud-based integration, improving annual revenues by 37%",
        "Collaborated with data scientists and engineers to develop data pipelines, resulting in a 40% increase in data availability",
        "Oversaw a team of 5 engineers to implement data-driven solutions, resulting in a 50% increase in data accessibility and 30% increase in data accuracy"
      ]
    },
    {
      title: "Data Engineer",
      company: "Liberty Life",
      period: "2019 - 2021",
      description: "Designed and maintained ETL processes and data warehousing solutions.",
      achievements: [
        "Developed and maintained data pipeline, ingesting data across 12 disparate sources using EMR, S3 and Python",
        "Used Airflow to build ETL solutions that helped improve conversion rates by 16%",
        "Supported senior business intelligence analysts in building reports and analyzing trends, improving data quality by 36% and facilitating accurate reporting"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 group"
            >
              <div className="absolute -left-3 top-8">
                <div className="w-6 h-6 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors duration-300">
                  <Briefcase className="w-4 h-4 text-white absolute top-1 left-1" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {exp.title}
                </h3>
                <div className="text-blue-400 mb-4">{exp.company} | {exp.period}</div>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300"></span>
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