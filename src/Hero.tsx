import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;

        cursorRef.current.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
      <div ref={cursorRef} className="pointer-events-none fixed w-50 h-50 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I am Francis Tumba
        </h1>
        <div className="text-2xl md:text-4xl text-purple-200 mb-8">
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Engineer',
              2000,
              'Programmer',
              2000,
              'Leader',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-purple-400"
          />
        </div>
        <div className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;