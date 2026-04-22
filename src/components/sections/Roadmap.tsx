import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StatusBadge } from '@/components/ui/Badge';
import type { RoadmapStatus } from '@/lib/utils';

type RoadmapItem = { status: RoadmapStatus; label: string; date: string };

export function Roadmap() {
  const t = useTranslations('roadmap');
  const items = (t.raw('items') as RoadmapItem[]) ?? [];
  return (
    <section className="bg-pink-bg py-20 md:py-[120px]">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <ScrollReveal>
          <h2 className="text-center font-display font-extrabold text-[26px] md:text-[36px] tracking-tight text-charcoal">
            {t('title')}
          </h2>
        </ScrollReveal>
        <ul className="mx-auto mt-12 max-w-2xl space-y-3">
          {items.map((item, idx) => (
            <ScrollReveal key={`${item.label}-${idx}`} delayMs={idx * 70}>
              <li className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-card border border-pink-pale bg-white px-5 py-4 shadow-card">
                <div className="flex items-center gap-3">
                  <StatusBadge status={item.status}>
                    {item.status === 'done' ? '' : ''}
                    <span className="sr-only">{item.status}</span>
                  </StatusBadge>
                  <span className="font-display font-bold text-[15px] md:text-[16px] text-charcoal">
                    {item.label}
                  </span>
                </div>
                <span className="text-[13px] font-body text-mid md:text-right">{item.date}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
