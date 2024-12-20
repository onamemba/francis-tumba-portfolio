import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div className="py-20 bg-gray-900" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Education</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              school: "University of Wisconsin-Green Bay",
              degree: "IT/Data Science (Ongoing)",
              description: "Currently pursuing advanced studies in IT and Data Science, focusing on modern data engineering practices and machine learning applications."
            },
            {
              school: "Cape Peninsula University of Technology",
              degree: "Computer Engineering Diploma",
              description: "Completed comprehensive studies in computer engineering, laying the foundation for a career in technology and data engineering."
            }
          ].map((edu, index) => (
            <div 
              key={index}
              className="relative p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute left-4 top-6">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="ml-16">
                <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                <p className="text-blue-400">{edu.degree}</p>
                <p className="text-gray-300 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;