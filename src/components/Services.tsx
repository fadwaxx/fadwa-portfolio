import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Globe,
  UtensilsCrossed,
  LayoutDashboard,
  Webhook,
  Database,
  Gauge,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const ICONS = [
  Code2,
  Layout,
  Server,
  Globe,
  UtensilsCrossed,
  LayoutDashboard,
  Webhook,
  Database,
  Gauge,
  Wrench,
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof Code2;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#212121] rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#262626] transition-colors"
    >
      <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>

      <h3 className="text-primary text-base sm:text-lg font-medium">
        {title}
      </h3>

      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="min-h-screen bg-black relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div ref={ref} className="relative max-w-6xl mx-auto text-center mb-14 sm:mb-20">
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-primary"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.services.title}
        </motion.p>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 mt-1"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.services.subtitle}
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {t.services.items.map((service, i) => (
          <ServiceCard
            key={service.title}
            icon={ICONS[i]}
            title={service.title}
            desc={service.desc}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}