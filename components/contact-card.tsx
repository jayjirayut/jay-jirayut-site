'use client';

import { useEffect, useRef, useState } from 'react';

type ContactCardProps = {
  email: string;
};

export function ContactCard({ email }: ContactCardProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setStatus('idle');
    }, 2400);
  }

  return (
    <div className="rounded-sm border border-rule bg-surface p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Contact</p>

      <p className="mt-4 break-all text-[18px] leading-7 tracking-[-0.03em] text-ink">{email}</p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-[14px]">
        <button
          type="button"
          onClick={handleCopy}
          className="bg-transparent p-0 text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
        >
          {status === 'copied' ? 'Email copied' : 'Copy email'}
        </button>

        <a
          href={`mailto:${email}`}
          className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
        >
          Open mail app
        </a>
      </div>

      <p className="mt-3 text-[14px] leading-6 text-body">
        Best for advisory, speaking, or collaboration.
      </p>

      <p
        aria-live="polite"
        className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
      >
        {status === 'copied' && 'Copied to clipboard'}
        {status === 'failed' && 'Copy unavailable on this device'}
        {status === 'idle' && 'Direct. No contact form.'}
      </p>
    </div>
  );
}
