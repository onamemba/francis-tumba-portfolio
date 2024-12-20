import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToAbout}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-400 hover:text-blue-300 transition-colors duration-300"
      aria-label="Scroll to about section"
    >
      <ChevronDown className="w-8 h-8" />
    </button>
  );
};

export default ScrollIndicator;