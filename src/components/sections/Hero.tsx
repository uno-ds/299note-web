import { useTranslations } from 'next-intl';
import { DevBadge } from '@/components/ui/Badge';

// Drop iOS screenshots here:
//   public/screenshots/hero-1.png  (e.g. SNS home feed)
//   public/screenshots/hero-2.png  (e.g. post detail with photo)
//   public/screenshots/hero-3.png  (e.g. memorial or timeline)
// Gradient shows as placeholder until real screenshots are added.
const SNS_POSTS = [
  {
    user: 'Max & Family',
    handle: '@max_fam',
    caption: 'Beautiful morning walk! Loving the spring 🌸',
    gradient: 'from-amber-200 to-orange-300',
    screenshot: '/screenshots/hero-1.png',
    likes: 42,
    rotate: '-rotate-6 -translate-y-3',
    zIndex: 1,
  },
  {
    user: "Buddy's Mom",
    handle: '@buddymom',
    caption: "Check-up done ✅ Dr. Kim says Buddy is perfectly healthy!",
    gradient: 'from-sky-200 to-blue-300',
    screenshot: '/screenshots/hero-2.png',
    likes: 88,
    rotate: 'rotate-0 translate-y-4',
    zIndex: 2,
  },
  {
    user: 'Forever Mochi',
    handle: '@mochi_forever',
    caption: 'Thank you for all the love. Mochi is always in our hearts. 🌈',
    gradient: 'from-purple-200 to-pink-300',
    screenshot: '/screenshots/hero-3.png',
    likes: 234,
    rotate: 'rotate-6 -translate-y-1',
    zIndex: 1,
  },
];

export function Hero() {
  const t = useTranslations();

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
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto grid grid-cols-3 gap-2 md:gap-3 max-w-[340px] md:max-w-md">
              {SNS_POSTS.map((post, i) => (
                <div
                  key={post.handle}
                  className={`phone-mockup transform ${post.rotate} transition-transform duration-slow ease-standard hover:scale-[1.02]`}
                  style={{ zIndex: post.zIndex }}
                >
                  {/* Gradient placeholder — hidden once screenshot loads */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                  {/* Real iOS screenshot — drop files in public/screenshots/ */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.screenshot}
                    alt="299note app"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="eager"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[11px] uppercase tracking-[0.2em] text-dim">
              299note · App preview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
