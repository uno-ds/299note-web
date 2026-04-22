import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const t = useTranslations();
  const subject = encodeURIComponent(t('b2b.mailSubject'));
  const href = `mailto:hello@299note.com?subject=${subject}`;
  return (
    <section id="contact" className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display font-extrabold text-[26px] md:text-[36px] tracking-tight text-charcoal">
              {t('contact.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={100}>
            <p className="mt-6 font-body text-[16px] md:text-[17px] leading-[1.75] text-charcoal/85">
              {t('contact.body')}
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={180}>
            <a
              href={href}
              className="mt-6 inline-block font-display font-bold text-[18px] md:text-[20px] text-pink-deep hover:text-pink transition-colors duration-fast"
            >
              hello@299note.com
            </a>
          </ScrollReveal>
          <ScrollReveal delayMs={240}>
            <div className="mt-8">
              <Button href={href}>{t('contact.button')}</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
