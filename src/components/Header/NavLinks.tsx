import React from 'react';

const NavLinks = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
        >
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default NavLinks;