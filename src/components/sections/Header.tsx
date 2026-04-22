import { useTranslations } from 'next-intl';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('nav');
  return (
    <header className="sticky top-0 z-40 border-b border-pink-pale/60 bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-center">
          <Logo />
        </a>
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden sm:inline-flex font-display font-bold text-[13px] text-charcoal/80 hover:text-pink-deep transition-colors duration-fast ease-standard px-3 py-1.5 rounded-lg hover:bg-pink-pale"
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </header>
  );
}
