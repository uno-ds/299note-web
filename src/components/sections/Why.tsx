import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Why() {
  const t = useTranslations('why');
  return (
    <section id="why" className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal as="div">
            <h2 className="font-display font-extrabold text-[26px] md:text-[36px] leading-tight tracking-tight text-charcoal">
              {t('title')}
            </h2>
          </ScrollReveal>
          <div className="mt-8 space-y-6 font-body text-[16px] md:text-[17px] leading-[1.75] text-charcoal/85">
            <ScrollReveal delayMs={80}>
              <p>{t('para1')}</p>
            </ScrollReveal>
            <ScrollReveal delayMs={160}>
              <p>{t('para2')}</p>
            </ScrollReveal>
            <ScrollReveal delayMs={240}>
              <p className="font-display font-bold text-charcoal">{t('para3')}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
