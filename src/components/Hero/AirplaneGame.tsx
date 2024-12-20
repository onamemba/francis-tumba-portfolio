import React, { useEffect, useRef } from 'react';

const AirplaneGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const planeRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create clouds with z-position for 3D effect
    const clouds = Array(20).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 3, // Z depth for 3D effect
      speed: 0.5 + Math.random() * 1.5,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      planeRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw clouds with 3D perspective
      clouds.forEach((cloud) => {
        const scale = (cloud.z + 1) * 0.5; // Scale based on z-position
        const size = 20 * scale;
        const alpha = 0.2 * scale; // Opacity based on z-position

        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
        
        // Update cloud position with 3D movement
        cloud.z -= cloud.speed * 0.01;
        if (cloud.z < 0) {
          cloud.z = 3;
          cloud.x = Math.random() * canvas.width;
          cloud.y = Math.random() * canvas.height;
        }
      });

      // Draw airplane
      ctx.beginPath();
      ctx.moveTo(planeRef.current.x, planeRef.current.y);
      ctx.lineTo(planeRef.current.x - 20, planeRef.current.y + 10);
      ctx.lineTo(planeRef.current.x - 10, planeRef.current.y);
      ctx.lineTo(planeRef.current.x - 20, planeRef.current.y - 10);
      ctx.closePath();
      ctx.fillStyle = '#3b82f6';
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default AirplaneGame;