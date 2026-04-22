import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type Merit = { title: string; body: string };

const MERIT_ICONS = ['🗄️', '🔬', '📊', '📝', '⚡'];

export function ForClinics() {
  const t = useTranslations('forClinics');
  const merits = (t.raw('merits') as Merit[]) ?? [];

  return (
    <section id="for-clinics" className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <ScrollReveal>
          <p className="text-center font-display font-bold text-[11px] uppercase tracking-[0.2em] text-pink-deep">
            {t('label')}
          </p>
          <h2 className="mt-3 text-center font-display font-extrabold text-[26px] md:text-[36px] leading-tight tracking-tight text-charcoal">
            {t('title')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delayMs={80}>
          <p className="mx-auto mt-5 max-w-2xl text-center font-body text-[16px] leading-relaxed text-charcoal/75">
            {t('intro')}
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-12 md:mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {merits.map((m, idx) => (
            <ScrollReveal key={`${m.title}-${idx}`} delayMs={idx * 70}>
              <article className="h-full rounded-card border border-pink-pale bg-white p-6 shadow-card transition-transform duration-normal ease-standard hover:-translate-y-1">
                <div className="text-2xl leading-none" aria-hidden>
                  {MERIT_ICONS[idx] ?? '•'}
                </div>
                <h3 className="mt-4 font-display font-bold text-[16px] text-charcoal">
                  {m.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-charcoal/75">
                  {m.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
