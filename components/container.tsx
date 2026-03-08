import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: 'shell' | 'reading';
  as?: 'div' | 'section' | 'article';
};

export function Container({
  children,
  className,
  size = 'shell',
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full',
        size === 'shell' ? 'max-w-shell' : 'max-w-reading',
        className
      )}
    >
      {children}
    </Component>
  );
}
