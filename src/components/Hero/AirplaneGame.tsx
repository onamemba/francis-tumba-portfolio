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

    const clouds: { x: number; y: number; speed: number }[] = Array(20)
      .fill(null)
      .map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
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

      // Draw clouds
      clouds.forEach((cloud) => {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        
        cloud.x -= cloud.speed;
        if (cloud.x < -20) {
          cloud.x = canvas.width + 20;
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