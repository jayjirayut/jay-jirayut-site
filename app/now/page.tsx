import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { absoluteUrl, formatDate } from '@/lib/site';

const updatedAt = '2026-03-08';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Jay is focused on right now.',
  alternates: {
    canonical: absoluteUrl('/now')
  }
};

export default function NowPage() {
  return (
    <Container size="shell" className="space-y-14">
      <header className="max-w-reading space-y-5 border-b border-rule pb-10">
        <p className="section-kicker">Last updated {formatDate(updatedAt)}</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[48px]">Now</h1>
        <p className="max-w-2xl text-[16.5px] leading-8 text-body">
          A lightweight snapshot of what I&apos;m paying attention to. Updated when it feels useful.
        </p>
      </header>

      <div className="space-y-10">
        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m focused on</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            Building a more durable public body of work around AI systems, decision-making, and
            why useful technology still beats impressive theatre. I&apos;m also getting this site
            into a shape that I&apos;d feel comfortable sending to smart people without explaining
            it first.
          </p>
        </section>

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m exploring</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            How AI products work after the demo. What makes system design trustworthy in ambiguous
            environments. How to build a career with more autonomy and less image management.
          </p>
        </section>

        <section className="grid gap-5 border-y border-rule py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m reading / listening to</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            Long-form essays on technology and institutions. Design writing that values simplicity.
            Music that helps me think in clean lines instead of noise.
          </p>
        </section>
      </div>
    </Container>
  );
}
