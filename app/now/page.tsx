import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { absoluteUrl, formatDate } from '@/lib/site';

const updatedAt = '2026-03-15';

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
            Writing more honestly about what building AI actually looks like — the failures, the
            constraints, the decisions that haunt you. Getting this site to a place where it
            feels like me, not a pitch deck. Series A fundraising is ongoing; the work continues
            regardless.
          </p>
        </section>

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m exploring</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            How to tell the truth about professional work without it becoming a confessional.
            What autonomy actually requires beyond saying you want it. How AI products survive
            after the demo — and what to do when they don&apos;t.
          </p>
        </section>

        <section className="grid gap-5 border-y border-rule py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m reading / listening to</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            Long-form essays on technology and institutions. Design writing that values simplicity.
            Music that helps me think clearly.
          </p>
        </section>
      </div>
    </Container>
  );
}
