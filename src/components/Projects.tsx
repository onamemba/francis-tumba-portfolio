import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Rec.ol.lect - AI Transcription & Summarization",
      description: "Built a website that transcribes audio and generates summaries using Hugging Face Model",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Hugging face", "React", "FastAPI"],
      links: {
        demo: "https://lecture-summarizer-web-ai.vercel.app/",
        github: "https://github.com/onamemba/lecture-summarizer-web-ai"
      }
    },
    {
      title: "Advo - AI Chat Application",
      description: "Developed a app that use AI to help you chat",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: ["React Native", "Node.js", "Open AI", "AWS"],
      links: {
        demo: "https://lecture-summarizer-web-ai.vercel.app/",
        github: "https://github.com/onamemba/lecture-summarizer-web-ai"
      }
    }
  ];

  return (
    <div className="py-20 bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;