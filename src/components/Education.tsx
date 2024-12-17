import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Education</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="relative">
            <div className="absolute left-0 top-0">
              <GraduationCap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="ml-16">
              <h3 className="text-2xl font-bold text-white">University of Wisconsin-Green Bay</h3>
              <p className="text-purple-400">IT/Data Science (Ongoing)</p>
              <p className="text-gray-300 mt-2">
                Currently pursuing advanced studies in IT and Data Science, focusing on modern data engineering practices
                and machine learning applications.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0">
              <GraduationCap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="ml-16">
              <h3 className="text-2xl font-bold text-white">Cape Peninsula University of Technology</h3>
              <p className="text-purple-400">Computer Engineering Diploma</p>
              <p className="text-gray-300 mt-2">
                Completed comprehensive studies in computer engineering, laying the foundation for a career
                in technology and data engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;