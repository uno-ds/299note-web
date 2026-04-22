import { useTranslations } from 'next-intl';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const t = useTranslations('about');
  return (
    <footer className="border-t border-pink-pale/60 bg-cream py-12">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Logo />
          <p className="mt-6 font-body text-[13px] md:text-[14px] leading-relaxed text-mid">
            {t('body')}
          </p>
          <p className="mt-8 font-body text-[12px] uppercase tracking-[0.18em] text-dim">
            © 2026 299note
          </p>
        </div>
      </div>
    </footer>
  );
}
