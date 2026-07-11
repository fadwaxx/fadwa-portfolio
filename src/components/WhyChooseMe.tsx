import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function WhyChooseMe() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const REASONS =
    lang === 'ar'
      ? [
          'كود نظيف وسهل التطوير',
          'تصميم متجاوب لجميع الأجهزة',
          'أداء سريع',
          'بنية قابلة للتوسع',
          'واجهة وتجربة استخدام حديثة',
          'حلول تناسب احتياجات الأعمال',
          'دعم فني موثوق',
          'اهتمام بالتفاصيل',
        ]
      : [
          'Clean & Maintainable Code',
          'Responsive Design',
          'Fast Performance',
          'Scalable Architecture',
          'Modern UI & UX',
          'Business-Focused Solutions',
          'Reliable Technical Support',
          'Attention to Detail',
        ];

  return (
    <section className="bg-black py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] px-6 sm:px-10 md:px-16 py-14 sm:py-20">
        <div className="text-center mb-12">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            {t.why.badge}
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl text-primary font-normal">
            {t.why.title}
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#212121] rounded-2xl p-5 flex items-center gap-3"
            >
              <Check className="w-4 h-4 text-primary shrink-0" />

              <span className="text-gray-300 text-xs sm:text-sm">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}