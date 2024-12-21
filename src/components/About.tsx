import React from 'react';
import { BrainCircuit , Book, Gamepad2, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
            I’m Francis Tumba, a passionate Data Engineer originally from South Africa, where I gained valuable experience working in data engineering,
            cloud technologies, and software development. I’m now based in the United States, pursuing a Computer Science degree at the University of Wisconsin-Green Bay. 
            My expertise lies in transforming complex data into actionable insights, with a keen interest in AI/ML and DevOps. Outside of tech, 
            I’m an gamer and sports buff who loves exploring new challenges and crafting innovative solutions that make an impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <BrainCircuit  className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold">AI/ML</h3>
                <p className="text-gray-400">Enthusiast</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Book className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold">Continuous</h3>
                <p className="text-gray-400">Learning</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Gamepad2 className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold">Gaming</h3>
                <p className="text-gray-400">Hobby</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Trophy className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold">Sports</h3>
                <p className="text-gray-400">Fanatic</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Francis Tumba"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;