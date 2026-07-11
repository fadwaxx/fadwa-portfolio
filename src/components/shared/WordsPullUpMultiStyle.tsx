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

/**
 * نفس فكرة WordsPullUp لكن يدعم عدة مقاطع بأنماط مختلفة داخل نفس العنوان
 * (مثال: جزء عادي + جزء مائل بخط Instrument Serif + جزء عادي مرة أخرى)
 * مع الحفاظ على حركة الدخول المتدرجة لكل كلمة بغض النظر عن المقطع.
 */
export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delayStep = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let wordIndex = 0;

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ');
        return words.map((word, i) => {
          const currentIndex = wordIndex++;
          return (
            <span
              key={`${segIdx}-${i}`}
              className="overflow-hidden inline-block me-[0.25em]"
            >
              <motion.span
                className={`inline-block ${segment.className || ''}`}
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
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
