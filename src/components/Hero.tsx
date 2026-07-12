import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
} from 'lucide-react';

import WordsPullUp from './shared/WordsPullUp';
import MagneticButton from './shared/MagneticButton';
import Navbar from './Navbar';

import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const isArabic = lang === 'ar';

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  useEffect(() => {
    const canUsePointer = window.matchMedia('(pointer: fine)').matches;

    if (!canUsePointer) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const offsetX =
        (event.clientX / window.innerWidth - 0.5) * 10;

      const offsetY =
        (event.clientY / window.innerHeight - 0.5) * 8;

      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="min-h-screen bg-background p-3 sm:p-4 md:p-6"
    >
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-black sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] md:rounded-[2rem]">
        {/* فيديو الخلفية */}
        <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover brightness-[0.78] contrast-[1.08] saturate-[0.85]"
>
  <source src="/hero-bg.mp4" type="video/mp4" />
</video>

        {/* طبقات سينمائية */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(200,255,106,0.09),transparent_28%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/8 to-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/8" />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay" />

        <Navbar />

        {/* معلومات أعلى الهيرو */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: EASE,
          }}
          className="absolute left-5 right-5 top-20 z-10 flex items-center justify-between gap-4 sm:left-8 sm:right-8 md:left-12 md:right-12"
        >
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary/55 sm:flex">
            <MapPin className="h-3.5 w-3.5 text-accent" />

            <span>
              {isArabic
                ? 'المملكة العربية السعودية'
                : 'Saudi Arabia'}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2 rounded-full border border-accent/25 bg-black/25 px-3 py-2 text-[10px] text-primary/80 backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <span>
              {isArabic
                ? 'متاحة للعمل والمشاريع'
                : 'Available for work'}
            </span>
          </div>
        </motion.div>

        {/* المحتوى الرئيسي */}
        <div className="relative z-10 grid min-h-[calc(100vh-24px)] grid-cols-12 content-end gap-6 px-5 pb-8 pt-32 sm:min-h-[calc(100vh-32px)] sm:px-8 sm:pb-10 md:min-h-[calc(100vh-48px)] md:px-12 md:pb-12 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: EASE,
              }}
              className="mb-5"
            >
              <span className="inline-flex rounded-full border border-primary/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-primary/75 backdrop-blur-md sm:text-xs">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              className="will-change-transform"
            >
            <h1
  className="overflow-visible pb-5 text-[20vw] font-medium leading-[1] tracking-[-0.075em] text-primary sm:text-[17vw] md:text-[14vw] lg:text-[11vw] xl:text-[10vw]"
>
  <WordsPullUp
    text={t.hero.title}
    showAsterisk
  />
</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.42,
                ease: EASE,
              }}
              className="mt-6 max-w-2xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8 md:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.58,
                ease: EASE,
              }}
              className="mt-7 flex flex-wrap gap-3"
            >
             <MagneticButton>
  <a
    href="#contact"
    className={`group inline-flex items-center gap-3 rounded-full border border-primary/25 bg-black/35 py-1.5 text-sm font-medium text-primary backdrop-blur-md transition-colors hover:border-accent hover:text-accent sm:text-base ${
      lang === 'ar'
        ? 'pl-3 pr-6'
        : 'pl-5 pr-1.5'
    }`}
  >
    <span>{t.hero.hire}</span>

    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black">
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  </a>
</MagneticButton>

              <MagneticButton strength={0.16}>
              <a
  href="#contact"
  className={`group flex items-center gap-2 rounded-full bg-primary py-1.5 transition-all hover:gap-3 ${
    lang === 'ar'
      ? 'flex-row-reverse pr-5 pl-1.5'
      : 'pl-5 pr-1.5'
  }`}
>
  <span className="text-black font-medium text-sm sm:text-base">
    {t.hero.hire}
  </span>

  <span className="bg-black rounded-full w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
    <ArrowRight className="w-5 h-5" style={{ color: '#E1E0CC' }} />
  </span>
</a>
              </MagneticButton>

              <MagneticButton strength={0.12}>
  <a
    href="/Fadwa_Alsaif_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-primary/65 transition-colors hover:text-primary sm:text-base"
  >
    <Download className="h-4 w-4" />
    {t.hero.cv}
  </a>
</MagneticButton>
        
            </motion.div>
          </div>

          {/* الجهة الجانبية */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              ease: EASE,
            }}
            className="col-span-12 flex flex-col justify-end lg:col-span-4 lg:items-end"
          >
            <div
              className={`max-w-md border-t border-primary/15 pt-5 ${
                isArabic
                  ? 'text-right'
                  : 'lg:text-right'
              }`}
            >
              <p className="text-xs leading-7 text-primary/65 sm:text-sm sm:leading-8">
                {t.hero.description}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-primary/10 bg-black/20 p-4 backdrop-blur-md">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-primary/40">
                    {isArabic ? 'التخصص' : 'Focus'}
                  </span>

                  <strong className="mt-2 block text-xs font-medium text-primary/85 sm:text-sm">
                    Full-Stack
                  </strong>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-black/20 p-4 backdrop-blur-md">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-primary/40">
                    {isArabic ? 'العمل' : 'Work'}
                  </span>

                  <strong className="mt-2 block text-xs font-medium text-primary/85 sm:text-sm">
                    Web Apps
                  </strong>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-black/20 p-4 backdrop-blur-md">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-primary/40">
                    {isArabic ? 'السنة' : 'Year'}
                  </span>

                  <strong className="mt-2 block text-xs font-medium text-primary/85 sm:text-sm">
                    2026
                  </strong>
                </div>
              </div>
            </div>
          </motion.div>

          {/* مؤشر النزول */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="col-span-12 mt-2 inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-primary/45 transition-colors hover:text-accent sm:text-xs"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20"
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>

            <span>
              {isArabic
                ? 'استكشف المشاريع'
                : 'Explore Projects'}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}