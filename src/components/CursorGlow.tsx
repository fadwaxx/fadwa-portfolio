import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 22,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 22,
    mass: 0.35,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches);
    };

    updateEnabled();

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    mediaQuery.addEventListener('change', updateEnabled);

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-56 w-56 rounded-full opacity-20 blur-3xl"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(200,255,106,0.38) 0%, rgba(200,255,106,0.12) 38%, transparent 72%)',
      }}
    />
  );
}