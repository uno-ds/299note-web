'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const LANGUAGES = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]['code'];

export function LanguageSwitcher() {
  const locale = useLocale() as LanguageCode;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-display font-bold text-[13px] text-charcoal hover:bg-pink-pale transition-colors duration-fast ease-standard"
      >
        <span aria-hidden>🌐</span>
        <span>{current.label}</span>
        <span className="text-[10px]" aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-2 min-w-[160px] rounded-input border border-pink-pale bg-white p-2 shadow-dropdown z-50"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === locale;
            return (
              <button
                key={lang.code}
                role="menuitemradio"
                aria-checked={active}
                type="button"
                onClick={() => {
                  router.replace(pathname, { locale: lang.code });
                  setOpen(false);
                }}
                className={`block w-full text-left rounded-lg px-3.5 py-2.5 text-sm transition-colors duration-fast ease-standard ${
                  active
                    ? 'bg-pink-pale text-pink-deep font-bold'
                    : 'text-charcoal hover:bg-pink-bg'
                }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
