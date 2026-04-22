import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
};

const base =
  'inline-flex items-center justify-center rounded-pill font-display font-bold text-[15px] tracking-[0.01em] transition-all duration-normal ease-standard whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-pink text-white shadow-button hover:bg-pink-deep hover:-translate-y-0.5 px-7 py-3',
  secondary:
    'bg-transparent text-pink-deep border-2 border-pink-light hover:border-pink px-7 py-3',
  ghost:
    'bg-pink-pale text-pink-deep hover:bg-pink-light px-5 py-2',
};

export function Button({ children, href, onClick, variant = 'primary', className }: Props) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
