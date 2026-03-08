import type { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-[24px] font-semibold tracking-[-0.06em] text-ink sm:text-[28px]">
      {children}
    </h2>
  );
}
