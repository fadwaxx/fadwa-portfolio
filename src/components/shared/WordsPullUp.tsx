import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayStep?: number;
}

/**
 * يقسّم النص إلى كلمات، وكل كلمة تنزلق من الأسفل للأعلى (y:20 -> y:0)
 * بتأخير متدرّج بين كل كلمة والتالية، وتُفعّل الحركة عند دخول العنصر لمجال الرؤية.
 */
export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  delayStep = 0.08,
}: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="overflow-hidden inline-block me-[0.25em]">
            <motion.span
              className="inline-block relative"
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * delayStep,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {isLast && showAsterisk && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
