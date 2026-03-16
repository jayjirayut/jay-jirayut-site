'use client';

import { useTheme } from '@/components/theme-provider';

const order: Theme[] = ['light', 'dark', 'system'];
type Theme = 'light' | 'dark' | 'system';

const labels: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System'
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function cycle() {
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:text-accent"
      aria-label={`Theme: ${labels[theme]}. Click to change.`}
    >
      {labels[theme]}
    </button>
  );
}
