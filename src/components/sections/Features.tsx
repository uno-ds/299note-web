import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type FeatureKey = 'health' | 'sns' | 'clinic' | 'memorial' | 'global';

const FEATURES: Array<{ key: FeatureKey; emoji: string; bg: string }> = [
  { key: 'health', emoji: '📊', bg: 'bg-red-50' },
  { key: 'sns', emoji: '📸', bg: 'bg-indigo-50' },
  { key: 'clinic', emoji: '🏥', bg: 'bg-green-50' },
  { key: 'memorial', emoji: '🕯️', bg: 'bg-orange-50' },
  { key: 'global', emoji: '🌏', bg: 'bg-sky-50' },
];

export function Features() {
  const t = useTranslations('features');
  return (
    <section className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <ScrollReveal>
          <p className="text-center font-display font-bold text-[11px] uppercase tracking-[0.2em] text-pink-deep">
            {t('label')}
          </p>
          <h2 className="mt-3 text-center font-display font-extrabold text-[26px] md:text-[36px] leading-tight tracking-tight text-charcoal">
            {t('title')}
          </h2>
        </ScrollReveal>
        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {FEATURES.map((f, idx) => (
            <ScrollReveal key={f.key} delayMs={idx * 80}>
              <article className="h-full rounded-card border border-pink-pale bg-white p-6 shadow-card transition-transform duration-normal ease-standard hover:-translate-y-1">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl ${f.bg}`}
                >
                  <span aria-hidden>{f.emoji}</span>
                </div>
                <h3 className="font-display font-bold text-[15px] text-charcoal">
                  {t(`${f.key}.title`)}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-charcoal/70">
                  {t(`${f.key}.body`)}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
