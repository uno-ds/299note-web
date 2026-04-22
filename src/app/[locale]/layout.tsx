import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Nunito, Nunito_Sans, Noto_Sans_JP, Noto_Sans_KR } from 'next/font/google';
import { routing, type Locale } from '@/i18n/routing';
import '../globals.css';

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

const notoJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '700', '800'],
  variable: '--font-noto-jp',
  display: 'swap',
});

const notoKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '700', '800'],
  variable: '--font-noto-kr',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    return {};
  }
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://299note.com'),
    alternates: {
      canonical: `https://299note.com/${locale}`,
      languages: {
        ja: 'https://299note.com/ja',
        en: 'https://299note.com/en',
        ko: 'https://299note.com/ko',
        de: 'https://299note.com/de',
        es: 'https://299note.com/es',
        'x-default': 'https://299note.com/en',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://299note.com/${locale}`,
      siteName: '299note',
      locale,
      type: 'website',
      images: [
        {
          url: `/og/og-${locale}.png`,
          width: 1200,
          height: 630,
          alt: '299note',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`/og/og-${locale}.png`],
    },
    icons: {
      icon: [
        { url: '/favicon/favicon-16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${nunito.variable} ${nunitoSans.variable} ${notoJP.variable} ${notoKR.variable}`}
    >
      <body className="bg-cream text-charcoal antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
