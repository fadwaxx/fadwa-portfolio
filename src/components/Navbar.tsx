import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  const NAV_ITEMS = [
    { label: t.navbar.about, href: '#about' },
    { label: t.navbar.services, href: '#services' },
    { label: t.navbar.skills, href: '#skills' },
    { label: t.navbar.projects, href: '#projects' },
    { label: t.navbar.process, href: '#process' },
    { label: t.navbar.contact, href: '#contact' },
  ];

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[10px] sm:text-xs md:text-sm transition-colors whitespace-nowrap"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#E1E0CC')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    'rgba(225, 224, 204, 0.8)')
                }
              >
                {item.label}
              </a>
            </li>
          ))}

<li>
  <button
    onClick={toggleLang}
    className="flex items-center gap-2 text-[10px] sm:text-xs md:text-sm border border-primary/30 rounded-full px-4 py-2 transition-all hover:border-primary hover:bg-primary/10"
    style={{ color: '#E1E0CC' }}
  >
    <span>{lang === 'ar' ? '🇺🇸' : '🇸🇦'}</span>
    <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
  </button>
</li>
        </ul>
      </div>
    </nav>
  );
}