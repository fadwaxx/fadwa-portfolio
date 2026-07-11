import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const SKILL_GROUPS = [
    { title: lang === 'ar' ? 'لغات البرمجة' : 'Programming Languages', skills: ['JavaScript', 'TypeScript'] },
    { title: lang === 'ar' ? 'الواجهات الأمامية' : 'Front-End', skills: ['HTML5', 'CSS3', 'React', 'Responsive Web Design'] },
    { title: lang === 'ar' ? 'الأنظمة الخلفية' : 'Back-End', skills: ['Node.js', 'Express.js', 'REST API Development'] },
    { title: lang === 'ar' ? 'قواعد البيانات' : 'Database', skills: ['MongoDB', 'Mongoose'] },
    { title: lang === 'ar' ? 'الأدوات' : 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'] },
    { title: lang === 'ar' ? 'المهارات الشخصية' : 'Soft Skills', skills: ['Problem Solving', 'Teamwork', 'Communication', 'Fast Learning'] },
  ];

  return (
    <section id="skills" className="bg-black py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] px-6 sm:px-10 md:px-16 py-14 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            {t.skills.badge}
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl text-primary font-normal">
            {t.skills.title}
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#212121] rounded-2xl p-6"
            >
              <h3 className="text-primary/80 text-xs sm:text-sm uppercase tracking-wide mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary text-black text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}