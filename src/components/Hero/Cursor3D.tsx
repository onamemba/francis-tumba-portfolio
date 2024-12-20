import React, { useEffect } from 'react';

const Cursor3D = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-64 h-64 rounded-full pointer-events-none mix-blend-screen filter blur-xl opacity-30 bg-blue-500 transition-transform duration-300 ease-out';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX - 128;
      const y = e.clientY - 128;
      cursor.style.transform = `translate(${x}px, ${y}px)`;

      // Add 3D effect to title and subtitle
      const title = document.querySelector('.hero-title');
      const subtitle = document.querySelector('.hero-subtitle');
      if (title && subtitle) {
        const rect = title.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angleX = (e.clientY - centerY) / 30;
        const angleY = -(e.clientX - centerX) / 30;

        title.setAttribute('style', `transform: perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`);
        subtitle.setAttribute('style', `transform: perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`);
      }
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default Cursor3D;