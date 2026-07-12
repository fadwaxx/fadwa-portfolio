import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Check,
  X,
} from 'lucide-react';
import { projects } from '../data/projects';
import MagneticButton from './shared/MagneticButton';
import ImageReveal from './shared/ImageReveal';
import { useLanguage } from '../LanguageContext';

export default function ProjectDetails() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [slug]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects.find((item) => item.slug === slug);
  const currentProjectIndex = projects.findIndex(
    (item) => item.slug === slug,
  );
  
  const nextProject =
    currentProjectIndex >= 0
      ? projects[(currentProjectIndex + 1) % projects.length]
      : null;

  if (!project) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-primary">
        <h1 className="text-3xl">
          {lang === 'ar' ? 'المشروع غير موجود' : 'Project not found'}
        </h1>

        <Link
          to="/#projects"
          className="mt-5 text-primary/60 transition-colors hover:text-accent"
        >
          {lang === 'ar' ? 'العودة إلى المشاريع' : 'Back to Projects'}
        </Link>
      </section>
    );
  }

  const features = project.features?.[lang] ?? [];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-primary">
      {/* شريط الرجوع */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-primary/70 transition-colors hover:border-accent hover:text-accent sm:text-sm"
        >
          {lang === 'ar' ? (
            <ArrowRight className="h-4 w-4" />
          ) : (
            <ArrowLeft className="h-4 w-4" />
          )}

          {lang === 'ar' ? 'العودة إلى المشاريع' : 'Back to Projects'}
        </Link>
      </div>

      {/* مقدمة المشروع */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
              {project.type[lang]}
            </span>

            <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-[0.92] tracking-[-0.04em] text-primary sm:text-6xl lg:text-8xl">
              {project.title[lang]}
            </h1>

            <p className="mt-7 max-w-3xl text-sm leading-8 text-primary/65 sm:text-base">
              {project.description[lang]}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
  <div className="rounded-2xl border border-border bg-surface p-5">
    <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
      {lang === 'ar' ? 'الدور' : 'Role'}
    </span>

    <p className="mt-3 text-sm leading-6 text-primary/80">
      {project.roleShort?.[lang] ??
        (lang === 'ar' ? 'مطورة فل ستاك' : 'Full-Stack Developer')}
    </p>
  </div>

  <div className="rounded-2xl border border-border bg-surface p-5">
    <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
      {lang === 'ar' ? 'السنة' : 'Year'}
    </span>

    <p className="mt-3 text-sm text-primary/80">
      {project.year ?? '2026'}
    </p>
  </div>

  <div className="rounded-2xl border border-border bg-surface p-5">
    <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
      {lang === 'ar' ? 'العميل' : 'Client'}
    </span>

    <p className="mt-3 text-sm leading-6 text-primary/80">
      {project.client?.[lang] ??
        (lang === 'ar' ? 'مشروع شخصي' : 'Personal Project')}
    </p>
  </div>

  <div className="rounded-2xl border border-border bg-surface p-5">
    <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
      {lang === 'ar' ? 'المدة' : 'Duration'}
    </span>

    <p className="mt-3 text-sm leading-6 text-primary/80">
      {project.duration?.[lang] ?? '—'}
    </p>
  </div>
</div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">

  {project.demo && (
    <MagneticButton>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs font-medium text-black sm:text-sm"
      >
        <ExternalLink className="h-4 w-4" />
        {lang === 'ar' ? 'زيارة الموقع' : 'Visit Website'}
      </a>
    </MagneticButton>
  )}

  {project.github && (
    <MagneticButton strength={0.16}>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-xs text-primary transition-colors hover:border-accent hover:text-accent sm:text-sm"
      >
        <Github className="h-4 w-4" />
        GitHub
      </a>
    </MagneticButton>
  )}

</div>
      </section>

      {/* صورة الغلاف */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setSelectedImage(project.cover)}
          className="group block w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft md:rounded-[2.5rem]"
        >
          <ImageReveal className="h-[300px] w-full sm:h-[500px] lg:h-[700px]">
  <img
    src={project.cover}
    alt={project.title[lang]}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
  />
</ImageReveal>
        </button>
      </section>

      {/* التحدي والحل */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-surface p-7 sm:p-10">
            <span className="font-serif text-5xl italic text-accent/70">
              01
            </span>

            <h2 className="mt-7 text-2xl text-primary sm:text-3xl">
              {lang === 'ar' ? 'التحدي' : 'The Challenge'}
            </h2>

            <p className="mt-5 text-sm leading-8 text-primary/65 sm:text-base">
              {project.challenge?.[lang] ?? project.description[lang]}
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-card p-7 sm:p-10">
            <span className="font-serif text-5xl italic text-accent/70">
              02
            </span>

            <h2 className="mt-7 text-2xl text-primary sm:text-3xl">
              {lang === 'ar' ? 'الحل' : 'The Solution'}
            </h2>

            <p className="mt-5 text-sm leading-8 text-primary/65 sm:text-base">
              {project.solution?.[lang] ?? project.description[lang]}
            </p>
          </article>
        </div>

        {project.role && (
          <div className="mt-6 rounded-[1.75rem] border border-border bg-surface p-7 sm:p-10">
            <span className="text-[10px] uppercase tracking-[0.22em] text-accent sm:text-xs">
              {lang === 'ar' ? 'دوري في المشروع' : 'My Role'}
            </span>

            <p className="mt-5 max-w-4xl text-lg leading-9 text-primary/80 sm:text-2xl">
              {project.role[lang]}
            </p>
          </div>
        )}
      </section>

      {/* المميزات */}
      {features.length > 0 && (
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.55fr_1fr]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
                  {lang === 'ar' ? 'مميزات المشروع' : 'Key Features'}
                </span>

                <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-5xl">
                  {lang === 'ar'
                    ? 'تجربة متكاملة للعملاء وإدارة المطعم.'
                    : 'A complete experience for customers and restaurant staff.'}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-black">
                      <Check className="h-4 w-4" />
                    </span>

                    <span className="text-sm leading-6 text-primary/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* التقنيات */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
            {lang === 'ar' ? 'التقنيات المستخدمة' : 'Technology Stack'}
          </span>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-card px-5 py-3 text-xs text-primary/80 sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
{/* فيديو استعراض المشروع */}
{project.video && (
  <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28">
    <div className="mb-8">
      <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
        {lang === 'ar' ? 'استعراض المشروع' : 'Project Preview'}
      </span>

      <h2 className="mt-4 text-3xl text-primary sm:text-5xl">
        {lang === 'ar'
          ? 'شاهد تجربة الموقع أثناء الاستخدام.'
          : 'See the website in action.'}
      </h2>
    </div>

    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-black">
      <video
        key={project.video}
        controls
        muted
        playsInline
        preload="metadata"
        poster={project.cover}
        className="aspect-video w-full bg-black object-contain"
      >
        <source src={project.video} type="video/mp4" />

        {lang === 'ar'
          ? 'متصفحك لا يدعم تشغيل الفيديو.'
          : 'Your browser does not support video playback.'}
      </video>
    </div>
  </section>
)}
      {/* معرض الصور */}
      {project.gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="mb-10">
            <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
              {lang === 'ar' ? 'معرض المشروع' : 'Project Gallery'}
            </span>

            <h2 className="mt-4 text-3xl text-primary sm:text-5xl">
              {lang === 'ar'
                ? 'نظرة أقرب على تجربة المشروع.'
                : 'A closer look at the experience.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`group overflow-hidden rounded-[1.5rem] border border-border bg-surface ${
                  index % 3 === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <ImageReveal
  className={
    index % 3 === 0
      ? 'h-[280px] w-full sm:h-[500px]'
      : 'h-[280px] w-full sm:h-[390px]'
  }
  delay={index * 0.06}
>
  <img
    src={image}
    alt={`${project.title[lang]} ${index + 1}`}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
  />
</ImageReveal>
              </button>
            ))}
          </div>
        </section>
      )}
{/* دعوة للتواصل */}
<section className="px-4 pb-6 sm:px-6">
  <div className="mx-auto max-w-7xl rounded-[2rem] border border-border bg-[#101010] px-6 py-16 text-center shadow-soft sm:px-10 sm:py-24">
    <span className="text-xs uppercase tracking-[0.22em] text-primary/50">
      {lang === 'ar' ? 'هل لديك فكرة مشروع؟' : 'Have a Project in Mind?'}
    </span>

    <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight text-primary sm:text-5xl">
      {lang === 'ar'
        ? 'لنحوّل فكرتك إلى موقع ويب احترافي يعكس هوية مشروعك ويحقق أهدافك.'
        : "Let's build a modern website that represents your business and delivers real results."}
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary/60 sm:text-base">
      {lang === 'ar'
        ? 'أساعدك في تنفيذ موقعك من مرحلة الفكرة والتخطيط، إلى التطوير والاختبار والإطلاق.'
        : 'I can help you take your website from planning and development to testing and launch.'}
    </p>

    <HashLink
      smooth
      to="/#contact"
      className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
    >
      {lang === 'ar' ? 'ناقش مشروعك معي' : 'Discuss Your Project'}

      {lang === 'ar' ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </HashLink>
  </div>
</section>
{/* المشروع التالي */}
{nextProject && nextProject.slug !== project.slug && (
  <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
    <span className="text-[10px] uppercase tracking-[0.24em] text-accent sm:text-xs">
      {lang === 'ar' ? 'المشروع التالي' : 'Next Project'}
    </span>

    <Link
      to={`/projects/${nextProject.slug}`}
      className="group mt-6 block overflow-hidden rounded-[2rem] border border-border bg-surface"
    >
      <div className="relative h-[300px] overflow-hidden sm:h-[450px]">
        <img
          src={nextProject.cover}
          alt={nextProject.title[lang]}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-10">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-primary/55">
              {nextProject.type[lang]}
            </span>

            <h2 className="mt-3 text-3xl text-primary sm:text-5xl">
              {nextProject.title[lang]}
            </h2>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            {lang === 'ar' ? (
              <ArrowLeft className="h-5 w-5" />
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </span>
        </div>
      </div>
    </Link>
  </section>
)}
      {/* تكبير الصور */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-black"
            aria-label={lang === 'ar' ? 'إغلاق الصورة' : 'Close image'}
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={selectedImage}
            alt={project.title[lang]}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-6xl rounded-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
}