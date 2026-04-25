'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

const getInitial = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':    return { opacity: 0, y: distance };
    case 'down':  return { opacity: 0, y: -distance };
    case 'left':  return { opacity: 0, x: distance };
    case 'right': return { opacity: 0, x: -distance };
    case 'zoom':  return { opacity: 0, scale: 0.85 };
    case 'fade':  return { opacity: 0 };
  }
};

const getAnimate = (direction: Direction) => {
  switch (direction) {
    case 'up':
    case 'down':  return { opacity: 1, y: 0 };
    case 'left':
    case 'right': return { opacity: 1, x: 0 };
    case 'zoom':  return { opacity: 1, scale: 1 };
    case 'fade':  return { opacity: 1 };
  }
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 30,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction, distance)}
      animate={inView ? getAnimate(direction) : getInitial(direction, distance)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
