'use client';

import { useEffect, useState } from 'react';

const storageKey = 'jay-preview-theme';

type PreviewTheme = 'light' | 'dark';

function applyTheme(theme: PreviewTheme) {
  document.documentElement.dataset.previewTheme = theme;
}

export function DevThemeToggle() {
  const [theme, setTheme] = useState<PreviewTheme>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const nextTheme = storedTheme === 'dark' ? 'dark' : 'light';

    applyTheme(nextTheme);
    setTheme(nextTheme);
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  if (!ready) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-[120] rounded-sm border border-rule bg-bg px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
      aria-label={`Switch preview theme to ${theme === 'dark' ? 'light' : 'dark'}`}
    >
      Preview {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
}
