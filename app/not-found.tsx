import Link from 'next/link';

import { Container } from '@/components/container';

export default function NotFound() {
  return (
    <Container size="reading" className="space-y-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[46px]">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-[16.5px] leading-8 text-body">
        The route may have changed, or the content hasn&apos;t been published.
      </p>
      <Link
        href="/"
        className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
      >
        Return home
      </Link>
    </Container>
  );
}
