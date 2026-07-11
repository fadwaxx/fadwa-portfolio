import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  Clock3,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

import MagneticButton from './shared/MagneticButton';
import ImageReveal from './shared/ImageReveal';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-120px',
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl">
        {/* عنوان القسم */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-end sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent sm:text-xs">
              {t.projects.badge}
            </span>

            <h2 className="mt-4 max-w-4xl text-3xl font-normal leading-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {t.projects.title}
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
            className="max-w-md text-sm leading-7 text-muted sm:text-base"
          >
            {lang === 'ar'
              ? 'أعرض هنا المواقع والأنظمة التي طورتها، مع تفاصيل كل مشروع والتقنيات المستخدمة فيه.'
              : 'A selection of websites and systems I have developed, including project details and technologies used.'}
          </motion.p>
        </div>

        {/* المشاريع */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const isCompleted = project.status === 'completed';
            const isFeatured = project.featured === true;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: EASE,
                }}
                className={`group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft transition-colors duration-500 hover:border-accent/30 ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* الصورة */}
                <div
                  className={`relative overflow-hidden ${
                    isFeatured
                      ? 'h-[360px] sm:h-[480px] lg:h-[620px]'
                      : 'h-[300px] sm:h-[390px]'
                  }`}
                >
                  {isCompleted ? (
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={project.title[lang]}
                      className="block h-full w-full"
                    >
                      <ImageReveal
                        className="h-full w-full"
                        delay={index * 0.08}
                      >
                        <img
                          src={project.cover}
                          alt={project.title[lang]}
                          className="h-full w-full object-cover transition-transform duration-1000 ease-smooth group-hover:scale-[1.045]"
                        />
                      </ImageReveal>
                    </Link>
                  ) : (
                    <ImageReveal
                      className="h-full w-full"
                      delay={index * 0.08}
                    >
                      <img
                        src={project.cover}
                        alt={project.title[lang]}
                        className="h-full w-full scale-105 object-cover opacity-45 grayscale"
                      />
                    </ImageReveal>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                  {!isCompleted && (
                    <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />
                  )}

                  {/* رقم المشروع */}
                  <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                    <span className="font-serif text-5xl italic text-primary/70 sm:text-6xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* الحالة */}
                  <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] backdrop-blur-md sm:text-xs ${
                        isCompleted
                          ? 'border-accent/30 bg-accent/10 text-accent'
                          : 'border-primary/20 bg-black/45 text-primary/65'
                      }`}
                    >
                      {!isCompleted && (
                        <Clock3 className="h-3.5 w-3.5" />
                      )}

                      {isCompleted
                        ? lang === 'ar'
                          ? 'مشروع مكتمل'
                          : 'Completed'
                        : lang === 'ar'
                          ? 'قيد التطوير'
                          : 'In Development'}
                    </span>
                  </div>

                  {/* معلومات المشروع فوق الصورة */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-9">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/55 sm:text-xs">
                      {project.type[lang]}
                    </span>

                    <div className="mt-3 flex items-end justify-between gap-6">
                      <div className="max-w-3xl">
                        <h3
                          className={`font-medium leading-tight text-primary ${
                            isFeatured
                              ? 'text-3xl sm:text-5xl lg:text-6xl'
                              : 'text-2xl sm:text-3xl'
                          }`}
                        >
                          {project.title[lang]}
                        </h3>

                        <p
                          className={`mt-4 leading-7 text-primary/65 ${
                            isFeatured
                              ? 'max-w-2xl text-sm sm:text-base'
                              : 'line-clamp-2 text-xs sm:text-sm'
                          }`}
                        >
                          {project.description[lang]}
                        </p>
                      </div>

                      {isCompleted && (
                        <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:flex">
                          <ArrowUpRight className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* الشريط السفلي */}
                <div className="border-t border-border p-5 sm:p-7">
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, isFeatured ? 7 : 4)
                        .map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] text-primary/75 sm:text-xs"
                          >
                            {technology}
                          </span>
                        ))}

                      {project.technologies.length >
                        (isFeatured ? 7 : 4) && (
                        <span className="rounded-full border border-border bg-card px-3 py-1.5 text-[10px] text-primary/75 sm:text-xs">
                          +
                          {project.technologies.length -
                            (isFeatured ? 7 : 4)}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {isCompleted && (
                        <MagneticButton>
                          <Link
                            to={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-medium text-black transition-colors hover:bg-accent sm:text-sm"
                          >
                            {lang === 'ar'
                              ? 'عرض تفاصيل المشروع'
                              : 'View Case Study'}

                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </MagneticButton>
                      )}

                      {project.demo && (
                        <MagneticButton strength={0.16}>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-xs text-primary transition-colors hover:border-accent hover:text-accent sm:text-sm"
                          >
                            <ExternalLink className="h-4 w-4" />

                            {lang === 'ar'
                              ? 'زيارة الموقع'
                              : 'Visit Website'}
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}