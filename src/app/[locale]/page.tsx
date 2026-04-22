import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Why } from '@/components/sections/Why';
import { Pillars } from '@/components/sections/Pillars';
import { B2B } from '@/components/sections/B2B';
import { Roadmap } from '@/components/sections/Roadmap';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Why />
        <Pillars />
        <B2B />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
