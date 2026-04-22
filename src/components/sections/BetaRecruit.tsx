import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

type Benefit = { title: string; body: string };

const BENEFIT_ICONS = ['🎁', '🚀', '💬'];

export function BetaRecruit() {
  const t = useTranslations('betaRecruit');
  const benefits = (t.raw('benefits') as Benefit[]) ?? [];
  const subject = encodeURIComponent(t('mailSubject'));
  const href = `mailto:hello@299note.com?subject=${subject}`;

  return (
    <section id="beta-recruit" className="bg-pink-bg py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mx-auto max-w-3xl rounded-card border border-pink-pale bg-gradient-to-br from-pink-bg via-white to-pink-pale/40 p-8 md:p-14 shadow-card">
          <ScrollReveal>
            <p className="font-display font-bold text-[11px] uppercase tracking-[0.2em] text-pink-deep">
              {t('label')}
            </p>
            <h2 className="mt-3 font-display font-extrabold text-[24px] md:text-[32px] leading-tight tracking-tight text-charcoal">
              {t('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="mt-4 font-body text-[16px] leading-relaxed text-charcoal/80">
              {t('intro')}
            </p>
          </ScrollReveal>
          <ul className="mt-7 space-y-3">
            {benefits.map((b, idx) => (
              <ScrollReveal key={`${b.title}-${idx}`} delayMs={120 + idx * 60}>
                <li className="flex gap-3 rounded-[14px] border border-pink-pale bg-white px-5 py-4 shadow-sm">
                  <span className="mt-0.5 flex-shrink-0 text-xl leading-none" aria-hidden>
                    {BENEFIT_ICONS[idx] ?? '✓'}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[14px] text-charcoal">{b.title}</p>
                    <p className="mt-1 font-body text-[13px] leading-[1.65] text-charcoal/70">{b.body}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal delayMs={360}>
            <div className="mt-8">
              <Button href={href}>{t('cta')}</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
