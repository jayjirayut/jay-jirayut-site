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
    <div className="surface-panel p-5 sm:p-6" data-static="true">
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Email</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">No form</p>
      </div>

      <p className="mt-5 break-all text-[20px] leading-8 tracking-[-0.04em] text-ink">{email}</p>

      <div className="mt-5 flex flex-wrap gap-3 text-[14px]">
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-sm border border-rule px-3 py-2 text-accent transition-colors duration-200 hover:border-accent hover:underline hover:underline-offset-4"
        >
          {status === 'copied' ? 'Email copied' : 'Copy email'}
        </button>

        <a
          href={`mailto:${email}`}
          className="rounded-sm border border-rule px-3 py-2 text-accent transition-colors duration-200 hover:border-accent hover:underline hover:underline-offset-4"
        >
          Open mail app
        </a>
      </div>

      <p className="mt-4 max-w-md text-[15px] leading-7 text-body">
        Best for advisory, speaking, or collaboration. Clear email beats a contact form.
      </p>

      <p
        aria-live="polite"
        className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
      >
        {status === 'copied' && 'Copied to clipboard'}
        {status === 'failed' && 'Copy unavailable on this device'}
        {status === 'idle' && 'Direct. No contact form.'}
      </p>
    </div>
  );
}
