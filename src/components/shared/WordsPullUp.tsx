import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayStep?: number;
}

export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  delayStep = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const words = text.split(' ');

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap overflow-visible pb-[0.12em] ${className}`}
    >
      {words.map((word, index) => {
        const isLast = index === words.length - 1;

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-visible me-[0.25em] pb-[0.12em]"
          >
            <motion.span
              className="relative inline-block overflow-visible pb-[0.08em]"
              initial={{
                y: '100%',
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * delayStep,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}

              {isLast && showAsterisk && (
                <span className="absolute -right-[0.3em] top-[0.08em] text-[0.31em]">
                  
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}