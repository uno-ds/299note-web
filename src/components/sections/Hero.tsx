import { useTranslations } from 'next-intl';
import { DevBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const MOCKUPS = [
  { emoji: '🐾', label: 'Home', bg: 'from-pink-pale to-pink-bg', rotate: '-rotate-6 -translate-y-3' },
  { emoji: '📈', label: 'Timeline', bg: 'from-pink-bg to-pink-light/40', rotate: 'rotate-0 translate-y-4' },
  { emoji: '🌈', label: 'Memorial', bg: 'from-charcoal to-charcoal-light', rotate: 'rotate-6 -translate-y-1' },
];

export function Hero() {
  const t = useTranslations();
  const locale = t('b2b.mailSubject');
  const contactHref = `mailto:hello@299note.com?subject=${encodeURIComponent(locale)}`;

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(249,190,195,0.35),_transparent_55%)]" />
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <DevBadge>{t('hero.badge')}</DevBadge>
            <h1 className="mt-6 font-display font-black text-[36px] leading-[1.1] tracking-tight text-charcoal md:text-[54px] md:leading-[1.05] lg:text-[60px] whitespace-pre-line">
              {t('hero.headline')}
            </h1>
            <p className="mt-6 max-w-xl font-body text-[16px] md:text-[17px] leading-relaxed text-mid whitespace-pre-line">
              {t('hero.subheadline')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={contactHref} variant="primary">
                {t('contact.button')}
              </Button>
              <a
                href="#why"
                className="font-display font-bold text-[14px] text-pink-deep hover:text-pink transition-colors duration-fast px-4 py-2 rounded-pill"
              >
                {t('why.title').split('—')[0].trim()} ↓
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto grid grid-cols-3 gap-3 md:gap-4 max-w-md">
              {MOCKUPS.map((m, i) => (
                <div
                  key={m.label}
                  className={`phone-mockup transform ${m.rotate} transition-transform duration-slow ease-standard hover:scale-[1.02]`}
                  style={{ zIndex: i === 1 ? 2 : 1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.bg}`}>
                    <div className="flex h-full flex-col items-center justify-center gap-2 px-3">
                      <span className="text-4xl md:text-5xl" aria-hidden>
                        {m.emoji}
                      </span>
                      <span
                        className={`font-display font-bold text-[10px] tracking-wide uppercase ${
                          i === 2 ? 'text-pink-light' : 'text-pink-deep'
                        }`}
                      >
                        {m.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-[11px] uppercase tracking-[0.2em] text-dim">
              iPhone mockup · App preview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
