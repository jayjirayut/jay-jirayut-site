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
          A quick snapshot of what I&apos;m focused on right now.
        </p>
      </header>

      <div className="space-y-10">
        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m focused on</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            Publishing more often. I want this site to reflect the part of AI work that is slow,
            messy, and commercially real, not just the polished version. I am also trying to get
            the site to a point where I can keep using it without redesigning it every week.
          </p>
        </section>

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m exploring</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            How to write about professional work without sounding vague or defensive. What autonomy
            actually requires in money, time, and tradeoffs. Which AI products stay useful once the
            excitement fades.
          </p>
        </section>

        <section className="grid gap-5 border-y border-rule py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>What I&apos;m reading / listening to</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            Long-form writing on technology, institutions, health, and design. Music that helps me
            slow down and think.
          </p>
        </section>
      </div>
    </Container>
  );
}
