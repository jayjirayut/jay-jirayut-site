import type { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-[26px] font-semibold tracking-[-0.065em] text-ink sm:text-[30px]">
      {children}
    </h2>
  );
}
