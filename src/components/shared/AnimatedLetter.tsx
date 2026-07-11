import { motion, MotionValue, useTransform } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

/**
 * حرف واحد تتغيّر شفافيته من 0.2 إلى 1 حسب موضع التمرير داخل النطاق
 * المحدد له، بحيث يظهر النص تدريجياً حرفاً حرفاً أثناء التمرير.
 */
export default function AnimatedLetter({ char, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}
