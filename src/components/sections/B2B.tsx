import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

type Merit = { title: string; body: string };

const MERIT_ICONS = ['🗄️', '🔬', '📊', '📝', '⚡'];

export function B2B() {
  const t = useTranslations('b2b');
  const merits = (t.raw('merits') as Merit[]) ?? [];
  const subject = encodeURIComponent(t('mailSubject'));
  const href = `mailto:hello@299note.com?subject=${subject}`;

  return (
    <section className="bg-pink-bg py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mx-auto max-w-3xl rounded-card border border-pink-pale bg-gradient-to-br from-pink-bg via-white to-pink-pale/40 p-8 md:p-14 shadow-card">
          <ScrollReveal>
            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] leading-tight tracking-tight text-charcoal">
              {t('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={80}>
            <p className="mt-4 font-body text-[16px] leading-relaxed text-charcoal/75">
              {t('intro')}
            </p>
          </ScrollReveal>
          <ul className="mt-7 space-y-3">
            {merits.map((m, idx) => (
              <ScrollReveal key={idx} delayMs={120 + idx * 60}>
                <li className="flex gap-3 rounded-[14px] border border-pink-pale bg-white px-5 py-4 shadow-sm">
                  <span className="mt-0.5 flex-shrink-0 text-xl leading-none" aria-hidden>
                    {MERIT_ICONS[idx]}
                  </span>
                  <div>
                    <p className="font-display font-bold text-[14px] text-charcoal">{m.title}</p>
                    <p className="mt-1 font-body text-[13px] leading-[1.65] text-charcoal/70">{m.body}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal delayMs={480}>
            <div className="mt-8">
              <Button href={href}>{t('cta')}</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
