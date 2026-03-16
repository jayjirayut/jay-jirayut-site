'use client';

import Link from 'next/link';

import { Container } from '@/components/container';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <Container size="reading" className="space-y-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">Error</p>
      <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[46px]">
        Something went wrong.
      </h1>
      <p className="text-[16.5px] leading-8 text-body">
        An unexpected error occurred. You can try again or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={reset}
          className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
        >
          Try again
        </button>
        <Link
          href="/"
          className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
        >
          Return home
        </Link>
      </div>
    </Container>
  );
}
