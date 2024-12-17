import React from 'react';

const NavLinks = () => {
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-gray-300 hover:text-blue-400 transition-colors"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;