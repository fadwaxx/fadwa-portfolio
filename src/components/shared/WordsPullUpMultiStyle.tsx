import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
  delayStep?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delayStep = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
  });

  let wordIndex = 0;

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center overflow-visible pb-[0.18em] ${containerClassName}`}
    >
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(' ');

        return words.map((word, wordPosition) => {
          const currentIndex = wordIndex++;

          return (
            <span
              key={`${segmentIndex}-${wordPosition}`}
              className="inline-block overflow-visible pb-[0.18em] me-[0.25em]"
            >
              <motion.span
                className={`inline-block overflow-visible pb-[0.1em] ${
                  segment.className || ''
                }`}
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
                  delay: currentIndex * delayStep,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        });
      })}
    </span>
  );
}