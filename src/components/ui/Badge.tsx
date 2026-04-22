import { cn } from '@/lib/utils';
import type { RoadmapStatus } from '@/lib/utils';

const STATUS_MAP: Record<RoadmapStatus, { bg: string; text: string; icon: string }> = {
  done: { bg: 'bg-health-bg', text: 'text-health-text', icon: '✓' },
  progress: { bg: 'bg-warning-bg', text: 'text-warning-text', icon: '→' },
  planned: { bg: 'bg-pink-pale', text: 'text-pink-deep', icon: '●' },
};

export function StatusBadge({ status, children }: { status: RoadmapStatus; children: React.ReactNode }) {
  const s = STATUS_MAP[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[12px] px-3 py-1.5 font-display font-bold text-[13px] leading-none',
        s.bg,
        s.text,
      )}
    >
      <span aria-hidden>{s.icon}</span>
      <span>{children}</span>
    </span>
  );
}

export function DevBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-pink-pale px-3 py-1.5 font-display font-bold text-[11px] uppercase tracking-[0.14em] text-pink-deep">
      {children}
    </span>
  );
}
