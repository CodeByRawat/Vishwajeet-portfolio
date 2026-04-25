'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;

    const colors = ['rgba(196,90,40,', 'rgba(75,35,18,', 'rgba(255,255,255,'];
    const particles: Particle[] = [];
    const COUNT = 100;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        offsetX: 0,
        offsetY: 0,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    // Listen for when mouse leaves window entirely
    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Base uniform floating motion
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries using base coordinates
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse repulsion logic
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        const minDist = 300; // Increased radius of repulsion

        let targetOffsetX = 0;
        let targetOffsetY = 0;

        if (distMouse < minDist && distMouse > 0) {
          const force = (minDist - distMouse) / minDist;
          // Calculate the elastic push offset
          targetOffsetX = (dxMouse / distMouse) * force * 150; // Max push 150px
          targetOffsetY = (dyMouse / distMouse) * force * 150;
        }

        // Elastic interpolation (Spring back) 
        p.offsetX += (targetOffsetX - p.offsetX) * 0.08;
        p.offsetY += (targetOffsetY - p.offsetY) * 0.08;

        const drawX = p.x + p.offsetX;
        const drawY = p.y + p.offsetY;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          const d1X = p1.x + p1.offsetX;
          const d1Y = p1.y + p1.offsetY;
          const d2X = p2.x + p2.offsetX;
          const d2Y = p2.y + p2.offsetY;

          const dx = d1X - d2X;
          const dy = d1Y - d2Y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(d1X, d1Y);
            ctx.lineTo(d2X, d2Y);
            ctx.strokeStyle = `rgba(196,90,40,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    tick();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
