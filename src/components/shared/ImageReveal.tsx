import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ImageReveal({
  children,
  className = '',
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : {}}
        transition={{
          duration: 0.9,
          delay: delay + 0.05,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="pointer-events-none absolute inset-0 z-10 origin-right bg-accent"
      />
    </div>
  );
}