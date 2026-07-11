import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import AnimatedLetter from './AnimatedLetter';

interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
}

export default function ScrollRevealParagraph({ text, className = '' }: ScrollRevealParagraphProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, index) => {
        const charProgress = index / totalChars;
        const range: [number, number] = [charProgress - 0.1, charProgress + 0.05];
        return (
          <AnimatedLetter key={index} char={char} progress={scrollYProgress} range={range} />
        );
      })}
    </p>
  );
}
