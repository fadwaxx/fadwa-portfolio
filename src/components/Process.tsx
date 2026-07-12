import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Search,
  Workflow,
  Code2,
  Rocket,
} from 'lucide-react';

import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const ICONS = [
  Search,
  Workflow,
  Code2,
  Rocket,
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Process() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
          >
            <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
              {t.process.badge}
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl leading-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {t.process.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: EASE,
            }}
            className="max-w-xl text-sm leading-8 text-muted sm:text-base"
          >
            {t.process.description}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.process.steps.map((step, index) => {
            const Icon = ICONS[index];

            return (
              <motion.article
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: EASE,
                }}
                className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/35 hover:bg-card sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="font-serif text-5xl italic text-primary/25 transition-colors duration-500 group-hover:text-accent/65">
                    {step.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-14">
  <h3 className="text-xl font-medium text-primary">
    {step.title}
  </h3>

  <p className="mt-4 text-sm leading-7 text-primary/55">
    {step.description}
  </p>
</div>

<div className="absolute bottom-8 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
</motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}