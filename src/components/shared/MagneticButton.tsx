import {
    motion,
    useMotionValue,
    useSpring,
  } from 'framer-motion';
  import {
    type MouseEvent,
    type ReactNode,
    useRef,
  } from 'react';
  
  type MagneticButtonProps = {
    children: ReactNode;
    className?: string;
    strength?: number;
  };
  
  export default function MagneticButton({
    children,
    className = '',
    strength = 0.22,
  }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const smoothX = useSpring(x, {
      stiffness: 180,
      damping: 18,
      mass: 0.3,
    });
  
    const smoothY = useSpring(y, {
      stiffness: 180,
      damping: 18,
      mass: 0.3,
    });
  
    const handleMouseMove = (
      event: MouseEvent<HTMLDivElement>,
    ) => {
      if (!window.matchMedia('(pointer: fine)').matches) {
        return;
      }
  
      const element = buttonRef.current;
  
      if (!element) {
        return;
      }
  
      const rect = element.getBoundingClientRect();
  
      const distanceX =
        event.clientX - (rect.left + rect.width / 2);
  
      const distanceY =
        event.clientY - (rect.top + rect.height / 2);
  
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    };
  
    const resetPosition = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.div
        ref={buttonRef}
        style={{
          x: smoothX,
          y: smoothY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetPosition}
        className={`inline-flex ${className}`}
      >
        {children}
      </motion.div>
    );
  }