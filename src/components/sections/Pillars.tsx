import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type PillarKey = 'timeline' | 'clinic' | 'memorial';

const PILLARS: Array<{ key: PillarKey; emoji: string; tone: 'pink' | 'pink' | 'dark' }> = [
  { key: 'timeline', emoji: '📈', tone: 'pink' },
  { key: 'clinic', emoji: '🏥', tone: 'pink' },
  { key: 'memorial', emoji: '🌈', tone: 'dark' },
];

export function Pillars() {
  const t = useTranslations('pillars');
  return (
    <section className="bg-pink-bg py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <ScrollReveal>
          <h2 className="text-center font-display font-extrabold text-[26px] md:text-[36px] leading-tight tracking-tight text-charcoal">
            {t('title')}
          </h2>
        </ScrollReveal>
        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-3">
          {PILLARS.map((p, idx) => {
            const isDark = p.tone === 'dark';
            return (
              <ScrollReveal key={p.key} delayMs={idx * 120}>
                <article
                  className={`h-full rounded-card border p-8 shadow-card transition-transform duration-normal ease-standard hover:-translate-y-1 ${
                    isDark
                      ? 'bg-gradient-to-br from-charcoal to-charcoal-light border-charcoal-light text-cream'
                      : 'bg-white border-pink-pale text-charcoal'
                  }`}
                >
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-[16px] text-2xl ${
                      isDark ? 'bg-pink-pale/10 text-pink-light' : 'bg-pink-pale text-pink-deep'
                    }`}
                  >
                    <span aria-hidden>{p.emoji}</span>
                  </div>
                  <p
                    className={`font-display font-bold text-[11px] uppercase tracking-[0.14em] ${
                      isDark ? 'text-pink-light' : 'text-pink-deep'
                    }`}
                  >
                    {t(`${p.key}.subtitle`)}
                  </p>
                  <h3
                    className={`mt-3 font-display font-bold text-[20px] md:text-[22px] leading-snug ${
                      isDark ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    {t(`${p.key}.title`)}
                  </h3>
                  <p
                    className={`mt-4 font-body text-[15px] leading-[1.7] ${
                      isDark ? 'text-cream/80' : 'text-charcoal/80'
                    }`}
                  >
                    {t(`${p.key}.body`)}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
