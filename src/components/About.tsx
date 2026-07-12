import WordsPullUpMultiStyle from './shared/WordsPullUpMultiStyle';
import ScrollRevealParagraph from './shared/ScrollRevealParagraph';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="about" className="bg-black py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] px-6 sm:px-10 md:px-16 py-14 sm:py-20 text-center">
        <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          {t.about.badge}
        </span>

        <div className="mt-6 max-w-3xl mx-auto">
        <h2 className="overflow-visible pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] sm:leading-[1.05]">
            <WordsPullUpMultiStyle
              segments={[
                { text: t.about.title1, className: 'font-normal' },
                { text: t.about.title2, className: 'italic font-serif' },
                { text: t.about.title3, className: 'font-normal' },
              ]}
            />
          </h2>
        </div>

      

        <ScrollRevealParagraph
  className="mt-10 mx-auto max-w-3xl px-2 text-sm leading-8 text-[#DEDBC8] sm:text-base break-words"
  text={t.about.description}
/>
      </div>
    </section>
  );
}