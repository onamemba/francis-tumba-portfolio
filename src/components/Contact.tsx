import React, { useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const Contact = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (globeRef.current) {
        const rect = globeRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (y / rect.height) * 30;
        const rotateY = (x / rect.width) * 30;
        
        globeRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-400 outline-none h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="relative">
            <div
              ref={globeRef}
              className="relative w-64 h-64 mx-auto transition-transform duration-200 ease-out"
            >
              <Globe className="w-full h-full text-purple-400 animate-pulse" />
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;