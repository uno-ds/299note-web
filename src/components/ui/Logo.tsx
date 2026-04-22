type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <span
      className={`inline-flex items-baseline gap-1 font-display font-extrabold tracking-tight ${className ?? ''}`}
    >
      <span className="text-pink-deep text-[22px] leading-none">299</span>
      <span className="text-charcoal text-[22px] leading-none">note</span>
      <span aria-hidden className="text-pink-deep text-base leading-none ml-0.5">🐾</span>
    </span>
  );
}
