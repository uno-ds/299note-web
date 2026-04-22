import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function B2B() {
  const t = useTranslations('b2b');
  const subject = encodeURIComponent(t('mailSubject'));
  const href = `mailto:hello@299note.com?subject=${subject}`;
  return (
    <section className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mx-auto max-w-3xl rounded-card border border-pink-pale bg-gradient-to-br from-pink-bg via-white to-pink-pale/40 p-8 md:p-14 shadow-card">
          <ScrollReveal>
            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] leading-tight tracking-tight text-charcoal">
              {t('title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <p className="mt-6 whitespace-pre-line font-body text-[16px] md:text-[17px] leading-[1.75] text-charcoal/85">
              {t('body')}
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={180}>
            <div className="mt-8">
              <Button href={href}>{t('cta')}</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
