import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Building2,
  UtensilsCrossed,
  Rocket,
  Users,
  UserCheck,
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function WhoIWorkWith() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const AUDIENCE = [
    {
      icon: Building2,
      label:
        lang === 'ar'
          ? 'أصحاب الأعمال الذين يحتاجون مواقع احترافية'
          : 'Businesses looking for custom websites',
    },
    {
      icon: UtensilsCrossed,
      label:
        lang === 'ar'
          ? 'المطاعم والكافيهات'
          : 'Restaurants & Cafés',
    },
    {
      icon: Rocket,
      label:
        lang === 'ar'
          ? 'الشركات الناشئة'
          : 'Startups',
    },
    {
      icon: Users,
      label:
        lang === 'ar'
          ? 'الشركات التي تحتاج دعمًا في تطوير الويب'
          : 'Companies seeking web development support',
    },
    {
      icon: UserCheck,
      label:
        lang === 'ar'
          ? 'الفرق التي تبحث عن مطورة ويب فل ستاك'
          : 'Teams looking for a Full-Stack Web Developer',
    },
  ];

  return (
    <section className="min-h-screen bg-black relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointerEvents-none" />

      <div className="relative max-w-6xl mx-auto text-center mb-14">
        <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          {t.audience.badge}
        </span>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-primary">
          {t.audience.title}
        </h2>
      </div>

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        {AUDIENCE.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-[#212121] rounded-2xl p-6 flex flex-col items-center text-center gap-4 lg:h-[220px] justify-center"
          >
            <div className="w-11 h-11 rounded-full bg-black/60 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}