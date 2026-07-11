import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Copy,
} from 'lucide-react';
import WordsPullUp from './shared/WordsPullUp';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const email = 'Fadwax0212@outlook.com';
  const phone = '966590545617';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert(lang === 'ar' ? 'تم نسخ البريد الإلكتروني' : 'Email copied');
  };

  return (
    <footer id="contact" className="bg-black px-4 sm:px-6 pb-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] px-6 sm:px-10 md:px-16 py-16 sm:py-24 text-center">

        <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          {t.contact.badge}
        </span>

        <h2
          className="mt-4 text-3xl sm:text-5xl md:text-6xl leading-[0.95]"
          style={{ color: '#E1E0CC' }}
        >
          <WordsPullUp text={t.contact.title} />
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-primary/70 text-sm sm:text-base leading-8">
          {t.contact.description}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <a
            href={`mailto:${email}`}
            className="group rounded-2xl border border-primary/15 bg-black/30 p-5 text-right transition-all hover:border-primary/60 hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 mb-4 text-primary" />

            <h3 className="text-primary font-medium">
              {t.contact.email}
            </h3>

            <p className="mt-2 text-primary/60 text-sm break-all">
              {email}
            </p>
          </a>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-primary/15 bg-black/30 p-5 text-right transition-all hover:border-primary/60 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 mb-4 text-primary" />

            <h3 className="text-primary font-medium">
              {t.contact.whatsapp}
            </h3>

            <p className="mt-2 text-primary/60 text-sm">
              +966 59 054 5617
            </p>
          </a>

          <a
            href="https://github.com/fadwaxx"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-primary/15 bg-black/30 p-5 text-right transition-all hover:border-primary/60 hover:-translate-y-1"
          >
            <Github className="w-5 h-5 mb-4 text-primary" />

            <h3 className="text-primary font-medium">
              {t.contact.github}
            </h3>

            <p className="mt-2 text-primary/60 text-sm">
              @fadwaxx
            </p>
          </a>

          <a
            href="#"
            className="group rounded-2xl border border-primary/15 bg-black/30 p-5 text-right transition-all hover:border-primary/60 hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5 mb-4 text-primary" />

            <h3 className="text-primary font-medium">
              {t.contact.linkedin}
            </h3>

            <p className="mt-2 text-primary/60 text-sm">
              {lang === 'ar' ? 'قريبًا' : 'Coming Soon'}
            </p>
          </a>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 border border-primary/40 text-primary text-sm sm:text-base rounded-full px-5 py-3 transition-colors hover:border-primary"
          >
            <Copy className="w-4 h-4" />
            {t.contact.copy}
          </button>

          <a
            href={`mailto:${email}?subject=Project Inquiry - Portfolio&body=Hello Fadwa,%0D%0AI would like to discuss a project with you.`}
            className="flex items-center gap-2 bg-primary text-black text-sm sm:text-base font-medium rounded-full px-5 py-3 transition-transform hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            {t.contact.send}
          </a>

        </div>

        <p className="mt-14 text-gray-500 text-xs sm:text-sm">
          {lang === 'ar'
            ? `فدوى عبدالرحمن السيف — المملكة العربية السعودية © ${new Date().getFullYear()}`
            : `Fadwa Abdulrahman Alsaif — Saudi Arabia © ${new Date().getFullYear()}`}
        </p>

      </div>
    </footer>
  );
}