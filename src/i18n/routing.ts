import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ja', 'en', 'ko', 'de', 'es'],
  defaultLocale: 'ja',
  localeDetection: true,
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
