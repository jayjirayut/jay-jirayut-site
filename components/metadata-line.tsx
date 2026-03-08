import { clsx } from 'clsx';

type MetadataLineProps = {
  items: Array<string | undefined>;
  className?: string;
};

export function MetadataLine({ items, className }: MetadataLineProps) {
  const content = items.filter(Boolean).join(' / ');

  return (
    <p className={clsx('font-mono text-[12px] uppercase tracking-[0.18em] text-muted', className)}>
      {content}
    </p>
  );
}
