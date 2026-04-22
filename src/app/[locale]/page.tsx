import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Why } from '@/components/sections/Why';
import { Features } from '@/components/sections/Features';
import { ForClinics } from '@/components/sections/ForClinics';
import { BetaRecruit } from '@/components/sections/BetaRecruit';
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
        <Features />
        <ForClinics />
        <BetaRecruit />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
